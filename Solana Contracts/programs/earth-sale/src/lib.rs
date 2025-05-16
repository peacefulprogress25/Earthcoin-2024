use anchor_lang::prelude::*;
use anchor_spl::associated_token::AssociatedToken;
use anchor_spl::token::{self, Mint, Token, TokenAccount, Transfer};

declare_id!("opDkBZHvgeU37GrvufHukGPj5KuwbBcuTx6kwNd9YJv");

#[program]
pub mod earth_sale {
    use super::*;

    /// Initializes the token sale with the specified price per token.
    ///
    /// # Arguments
    /// * `ctx` - The context containing the sale configuration and mint accounts.
    /// * `price_per_token` - The price of one Earth token in USDC.
    pub fn initialize_sale(ctx: Context<InitializeSale>, price_per_token: u64) -> Result<()> {
        require!(price_per_token > 0, ErrorCode::InvalidPrice);
        let config = &mut ctx.accounts.config;
        config.admin = ctx.accounts.admin.key();
        config.earth_mint = ctx.accounts.earth_mint.key();
        config.usdc_mint = ctx.accounts.usdc_mint.key();
        config.price_per_token = price_per_token;
        config.is_active = true;
        config.total_deposited = 0;
        config.bump = ctx.bumps.config;

        emit!(SaleInitialized {
            admin: config.admin,
            price_per_token,
        });
        Ok(())
    }

    /// Initializes the token vault for the sale.
    ///
    /// # Arguments
    /// * `ctx` - The context containing the config and vault account.
    pub fn initialize_vault(ctx: Context<InitializeVault>) -> Result<()> {
        emit!(VaultInitialized {
            admin: ctx.accounts.admin.key(),
            vault: ctx.accounts.vault.key(),
        });
        Ok(())
    }

    /// Deposits Earth tokens into the vault for sale.
    ///
    /// # Arguments
    /// * `ctx` - The context containing the admin, token accounts, and vault.
    /// * `amount` - The number of Earth tokens to deposit.
    pub fn deposit_earth_tokens(ctx: Context<DepositTokens>, amount: u64) -> Result<()> {
        require!(amount > 0, ErrorCode::InvalidAmount);
        require!(ctx.accounts.config.is_active, ErrorCode::SaleNotActive);
        require_keys_eq!(
            ctx.accounts.admin.key(),
            ctx.accounts.config.admin,
            ErrorCode::Unauthorized
        );

        token::transfer(ctx.accounts.transfer_ctx(), amount)?;
        ctx.accounts.config.total_deposited = ctx
            .accounts
            .config
            .total_deposited
            .checked_add(amount)
            .ok_or(ErrorCode::ArithmeticOverflow)?;

        emit!(TokensDeposited {
            amount,
            admin: ctx.accounts.admin.key(),
        });
        Ok(())
    }

    /// Allows a buyer to purchase Earth tokens by paying USDC.
    ///
    /// # Arguments
    /// * `ctx` - The context containing the buyer, token accounts, and vault.
    /// * `amount` - The number of Earth tokens to purchase.
    pub fn buy_earth_tokens(ctx: Context<BuyTokens>, amount: u64) -> Result<()> {
        require!(amount > 0, ErrorCode::InvalidAmount);
        require!(ctx.accounts.config.is_active, ErrorCode::SaleNotActive);
        require!(
            ctx.accounts.vault.amount >= amount,
            ErrorCode::InsufficientVaultBalance
        );

        let cost = ctx
            .accounts
            .config
            .price_per_token
            .checked_mul(amount)
            .ok_or(ErrorCode::ArithmeticOverflow)?;

        token::transfer(ctx.accounts.usdc_payment_ctx(), cost)?;

        let seeds = &[b"config".as_ref(), &[ctx.accounts.config.bump]];
        let signer = &[&seeds[..]];
        let earth_transfer_ctx = CpiContext::new_with_signer(
            ctx.accounts.token_program.to_account_info(),
            Transfer {
                from: ctx.accounts.vault.to_account_info(),
                to: ctx.accounts.buyer_earth.to_account_info(),
                authority: ctx.accounts.config.to_account_info(),
            },
            signer,
        );
        token::transfer(earth_transfer_ctx, amount)?;

        emit!(TokensPurchased {
            buyer: ctx.accounts.buyer.key(),
            amount,
            cost,
        });
        Ok(())
    }

    /// Withdraws unsold Earth tokens from the vault to the admin's token account.
    ///
    /// # Arguments
    /// * `ctx` - The context containing the admin, vault, and admin token account.
    /// * `amount` - The number of Earth tokens to withdraw.
    pub fn withdraw_unsold_earth(ctx: Context<WithdrawEarth>, amount: u64) -> Result<()> {
        require!(amount > 0, ErrorCode::InvalidAmount);
        require!(
            ctx.accounts.vault.amount >= amount,
            ErrorCode::InsufficientVaultBalance
        );
        require_keys_eq!(
            ctx.accounts.admin.key(),
            ctx.accounts.config.admin,
            ErrorCode::Unauthorized
        );

        let seeds = &[b"config".as_ref(), &[ctx.accounts.config.bump]];
        let signer = &[&seeds[..]];
        let withdraw_ctx = CpiContext::new_with_signer(
            ctx.accounts.token_program.to_account_info(),
            Transfer {
                from: ctx.accounts.vault.to_account_info(),
                to: ctx.accounts.admin_token.to_account_info(),
                authority: ctx.accounts.config.to_account_info(),
            },
            signer,
        );
        token::transfer(withdraw_ctx, amount)?;

        ctx.accounts.config.total_deposited = ctx
            .accounts
            .config
            .total_deposited
            .checked_sub(amount)
            .ok_or(ErrorCode::ArithmeticOverflow)?;

        emit!(TokensWithdrawn {
            amount,
            admin: ctx.accounts.admin.key(),
        });
        Ok(())
    }

    /// Changes the admin of the sale.
    ///
    /// # Arguments
    /// * `ctx` - The context containing the current admin and sale configuration.
    /// * `new_admin` - The public key of the new admin.
    pub fn change_admin(ctx: Context<ChangeAdmin>, new_admin: Pubkey) -> Result<()> {
        require_keys_eq!(
            ctx.accounts.admin.key(),
            ctx.accounts.config.admin,
            ErrorCode::Unauthorized
        );
        ctx.accounts.config.admin = new_admin;
        emit!(AdminChanged {
            old_admin: ctx.accounts.admin.key(),
            new_admin,
        });
        Ok(())
    }

    /// Closes the sale, preventing further purchases or deposits.
    ///
    /// # Arguments
    /// * `ctx` - The context containing the admin and sale configuration.
    pub fn close_sale(ctx: Context<CloseSale>) -> Result<()> {
        require_keys_eq!(
            ctx.accounts.admin.key(),
            ctx.accounts.config.admin,
            ErrorCode::Unauthorized
        );
        ctx.accounts.config.is_active = false;
        emit!(SaleClosed {
            admin: ctx.accounts.admin.key(),
        });
        Ok(())
    }

    /// Restarts the sale after it has been closed.
    ///
    /// # Arguments
    /// * `ctx` - The context containing the admin and sale configuration.
    pub fn restart_sale(ctx: Context<RestartSale>) -> Result<()> {
        require_keys_eq!(
            ctx.accounts.admin.key(),
            ctx.accounts.config.admin,
            ErrorCode::Unauthorized
        );
        require!(!ctx.accounts.config.is_active, ErrorCode::SaleAlreadyActive);

        ctx.accounts.config.is_active = true;

        emit!(SaleRestarted {
            admin: ctx.accounts.admin.key(),
        });
        Ok(())
    }
}

#[account]
pub struct SaleConfig {
    pub admin: Pubkey,
    pub earth_mint: Pubkey,
    pub usdc_mint: Pubkey,
    pub price_per_token: u64,
    pub is_active: bool,
    pub total_deposited: u64,
    pub bump: u8,
}

#[error_code]
pub enum ErrorCode {
    #[msg("Invalid token amount")]
    InvalidAmount,
    #[msg("Arithmetic overflow")]
    ArithmeticOverflow,
    #[msg("Insufficient vault balance")]
    InsufficientVaultBalance,
    #[msg("Invalid price")]
    InvalidPrice,
    #[msg("Sale is not active")]
    SaleNotActive,
    #[msg("Unauthorized access")]
    Unauthorized,
    #[msg("Sale is already active")]
    SaleAlreadyActive,
}

#[event]
pub struct SaleInitialized {
    pub admin: Pubkey,
    pub price_per_token: u64,
}

#[event]
pub struct VaultInitialized {
    pub admin: Pubkey,
    pub vault: Pubkey,
}

#[event]
pub struct TokensDeposited {
    pub amount: u64,
    pub admin: Pubkey,
}

#[event]
pub struct TokensPurchased {
    pub buyer: Pubkey,
    pub amount: u64,
    pub cost: u64,
}

#[event]
pub struct TokensWithdrawn {
    pub amount: u64,
    pub admin: Pubkey,
}

#[event]
pub struct AdminChanged {
    pub old_admin: Pubkey,
    pub new_admin: Pubkey,
}

#[event]
pub struct SaleClosed {
    pub admin: Pubkey,
}

#[event]
pub struct SaleRestarted {
    pub admin: Pubkey,
}

#[derive(Accounts)]
pub struct InitializeSale<'info> {
    #[account(
        init,
        payer = admin,
        space = 8 + 32 + 32 + 32 + 8 + 1 + 8 + 1, // discriminator + 3 pubkeys + u64 + bool + u64 + u8
        seeds = [b"config"],
        bump
    )]
    pub config: Account<'info, SaleConfig>,
    pub earth_mint: Account<'info, Mint>,
    pub usdc_mint: Account<'info, Mint>,
    #[account(mut)]
    pub admin: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct InitializeVault<'info> {
    #[account(seeds = [b"config"], bump = config.bump)]
    pub config: Account<'info, SaleConfig>,

    #[account(mut)]
    pub admin: Signer<'info>,

    pub earth_mint: Account<'info, Mint>,

    #[account(
        init_if_needed,
        payer = admin,
        associated_token::mint = earth_mint,
        associated_token::authority = config
    )]
    pub vault: Account<'info, TokenAccount>,

    pub token_program: Program<'info, Token>,
    pub associated_token_program: Program<'info, AssociatedToken>,
    pub system_program: Program<'info, System>,
    pub rent: Sysvar<'info, Rent>,
}

#[derive(Accounts)]
pub struct DepositTokens<'info> {
    #[account(mut, seeds = [b"config"], bump = config.bump)]
    pub config: Account<'info, SaleConfig>,
    #[account(mut)]
    pub admin: Signer<'info>,
    #[account(mut, constraint = from.mint == config.earth_mint)]
    pub from: Account<'info, TokenAccount>,
    #[account(
        mut,
        constraint = vault.mint == config.earth_mint,
        constraint = vault.owner == config.key()
    )]
    pub vault: Account<'info, TokenAccount>,
    pub token_program: Program<'info, Token>,
}

#[derive(Accounts)]
pub struct BuyTokens<'info> {
    #[account(seeds = [b"config"], bump = config.bump)]
    pub config: Account<'info, SaleConfig>,
    #[account(mut)]
    pub buyer: Signer<'info>,
    #[account(
        mut,
        constraint = buyer_usdc.mint == config.usdc_mint
    )]
    pub buyer_usdc: Account<'info, TokenAccount>,
    #[account(
        mut,
        constraint = admin_usdc.mint == config.usdc_mint
    )]
    pub admin_usdc: Account<'info, TokenAccount>,
    #[account(
        mut,
        constraint = vault.mint == config.earth_mint,
        constraint = vault.owner == config.key()
    )]
    pub vault: Account<'info, TokenAccount>,
    #[account(
        mut,
        constraint = buyer_earth.mint == config.earth_mint
    )]
    pub buyer_earth: Account<'info, TokenAccount>,
    pub token_program: Program<'info, Token>,
}

#[derive(Accounts)]
pub struct WithdrawEarth<'info> {
    #[account(mut, seeds = [b"config"], bump = config.bump)]
    pub config: Account<'info, SaleConfig>,
    #[account(mut)]
    pub admin: Signer<'info>,
    #[account(
        mut,
        constraint = vault.mint == config.earth_mint,
        constraint = vault.owner == config.key()
    )]
    pub vault: Account<'info, TokenAccount>,
    #[account(
        mut,
        constraint = admin_token.mint == config.earth_mint
    )]
    pub admin_token: Account<'info, TokenAccount>,
    pub token_program: Program<'info, Token>,
}

#[derive(Accounts)]
pub struct ChangeAdmin<'info> {
    #[account(mut, seeds = [b"config"], bump = config.bump)]
    pub config: Account<'info, SaleConfig>,
    #[account(constraint = admin.key() == config.admin)]
    pub admin: Signer<'info>,
}

#[derive(Accounts)]
pub struct CloseSale<'info> {
    #[account(mut, seeds = [b"config"], bump = config.bump)]
    pub config: Account<'info, SaleConfig>,
    #[account(constraint = admin.key() == config.admin)]
    pub admin: Signer<'info>,
}

#[derive(Accounts)]
pub struct RestartSale<'info> {
    #[account(mut, seeds = [b"config"], bump = config.bump)]
    pub config: Account<'info, SaleConfig>,
    #[account(constraint = admin.key() == config.admin)]
    pub admin: Signer<'info>,
}

impl<'info> DepositTokens<'info> {
    fn transfer_ctx(&self) -> CpiContext<'_, '_, '_, 'info, Transfer<'info>> {
        CpiContext::new(
            self.token_program.to_account_info(),
            Transfer {
                from: self.from.to_account_info(),
                to: self.vault.to_account_info(),
                authority: self.admin.to_account_info(),
            },
        )
    }
}

impl<'info> BuyTokens<'info> {
    fn usdc_payment_ctx(&self) -> CpiContext<'_, '_, '_, 'info, Transfer<'info>> {
        CpiContext::new(
            self.token_program.to_account_info(),
            Transfer {
                from: self.buyer_usdc.to_account_info(),
                to: self.admin_usdc.to_account_info(),
                authority: self.buyer.to_account_info(),
            },
        )
    }
}
