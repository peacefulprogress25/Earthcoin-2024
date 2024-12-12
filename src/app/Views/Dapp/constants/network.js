export const contractAddressList = {
    137: { // polygon mainnet
        earthERC20: "0x9F9f149a02Cddc9a8251207cefD3fF774DAF56F6",
        earthStaking: "0xFD4791764e27Fe0Bac5A2BfDf2ABd5745EC588DC",
        earthTreasury: "0x4Bd65205422293eCC5Fb00cD018692Fa4Bb38BdF",
        fruit: "0xEC9e4E0dB70ee14eBF9907eA4C4514fa77d757e7",
        presale: "0xF2E7dD135F142F3847aAB27EDf8a464Bd6c5E92a",
        soulbound: "0x7d5fef3a09f8A67Bd8CEAce828Ca97af729F44df",
        stable: "0x2058A9D7613eEE744279e3856Ef0eAda5FCbaA7e",// not used
        stableCoin: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
        claim: "0x0DBAd79b9dA051d20857499f8fa1bDCF2a4dfE84",


        explorer: "https://polygonscan.com/address/",
        infura: "https://polygon-mainnet.infura.io/v3/",
        tokenContract: '0x9F9f149a02Cddc9a8251207cef',
        metadata: {
            explorerName: "View on Polygon scan",
        },
        units: {
            unit1: '$DAI',
            unit2: '',
            unit3: '',
            unit4: '',
        }
    },
    44787: { //testnet
        earthERC20: "0xB30918C8Ea73D4a40A9bb7b800fb743F6Ef52489",
        earthStaking: "0x17a692cAb04ECc3706BA057C577E5218e251Bc69",
        earthTreasury: "0x14C0dcfC7cF3Cb0512B273F15a17EA5F7370ACb8",
        fruit: "0x888aB85CC4c66C0f5A8700b23C0c140749Cafa25",
        presale: "0x57Fc7d47b1D5ac97773e4Fb4a9Ba23941394E10E",
        soulbound: "0xd572E471bb2b7aCE3Ad079b2Fc99990532111a28",
        stable: "0x2058A9D7613eEE744279e3856Ef0eAda5FCbaA7e", //missing
        stableCoin: "0x94c52bdAc17388739c70eC60c8eb8137069E544C",
        claim: "0x15e522a4b3A03edC4130e09D0B88Bda90f03E96F"
    },
    42220: { // Celo Mainnet
        earthERC20: "0x9F9f149a02Cddc9a8251207cefD3fF774DAF56F6",
        earthStaking: "0xFD4791764e27Fe0Bac5A2BfDf2ABd5745EC588DC",
        earthTreasury: "0xDD7879E58E33706151a0B57deBB1c5308584a4Cc",
        fruit: "0xEC9e4E0dB70ee14eBF9907eA4C4514fa77d757e7",
        presale: "0x99190184514e84146063BF0C521E789eb179F10e",
        soulbound: "0x7d5fef3a09f8A67Bd8CEAce828Ca97af729F44df",
        stable: "0x2058A9D7613eEE744279e3856Ef0eAda5FCbaA7e", //missing
        stableCoin: "0x765DE816845861e75A25fCA122bb6898B8B1282a",
        claim: "0xfe6323C648f1C7923CE6177157cd094630017C6E",


        explorer: "https://explorer.celo.org/mainnet/address/",
        infura: "https://celo-mainnet.infura.io/v3/",
        tokenContract: '0x765DE816845861e75A25fCA122bb6898B8B1282a',
        units: {
            unit1: 'cUSD',
            unit2: '',
            unit3: '',
            unit4: '',
        },
        metadata: {
            explorerName: "View on Celo"
        },
    },
    84532: { //Base Sepolia Testnet
        earthERC20: "0x14C0dcfC7cF3Cb0512B273F15a17EA5F7370ACb8",
        earthStaking: "0x78C004B72F96e10C0484dEd69D6De34d7F1B956F",
        earthTreasury: "0x21F5a64A8ffDcb94CeB7E4951ADA37F1d851398A",
        fruit: "0x5Ffd36F3b15753DE948d7600Be5f6Ae7dEb0D8F5",
        presale: "0x975C8135dbb0477e8efC0aAeBdFB8aB0CaD76ce4",
        soulbound: "0x468A83A7cd1fEd2f900C1D7A35B2861a0d60bdE2",
        stable: "", //missing
        stableCoin: "0xDDB5E9d90A3e9f48dEdd4A75b04e78156b9241eF",
        claim: "0xAc604aeE3881911beFDb135aec38D1A2a3Ee7B65",


        explorer: "https://sepolia.basescan.org/address/",
        infura: "https://base-sepolia.infura.io/v3/",
        tokenContract: '0x765DE816845861e75A25fCA122bb6898B8B1282a',
        units: {
            unit1: 'USDC',
            unit2: '',
            unit3: '',
            unit4: '',
        },
        metadata: {
            explorerName: "View on Base Sepolia"
        },
    },
    10: {
        nftMetaData: "0x2b2514535f3769289956Df44B0Bf1d8dfe138F68"
    }
}

export const networks = [
    {
        chainName: "Polygon Mainnet",
        chainId: "0x89",
        rpcUrls: ["https://polygon-rpc.com"],
        blockExplorerUrls: ["https://polygonscan.com"],
        nativeCurrency: {
            symbol: "POL",
            decimals: 18,
        },
    },
    // {
    //     chainName: "Celo Testnet",
    //     chainId: "0xaef3",
    //     rpcUrls: ["https://alfajores-forno.celo-testnet.org"],
    //     blockExplorerUrls: ["https://alfajores.celoscan.io"],
    //     nativeCurrency: {
    //         symbol: "CELO",
    //         decimals: 18,
    //     },
    // },
    {
        chainName: "Celo",
        chainId: "0xa4ec",
        rpcUrls: ["https://forno.celo.org"],
        blockExplorerUrls: ["https://explorer.celo.org/mainnet"],
        nativeCurrency: {
            symbol: "CELO",
            decimals: 18,
        },
    },
    {
        chainName: "Base Sepolia Testnet",
        chainId: "0x14a34",
        rpcUrls: ["https://sepolia.base.org"],
        blockExplorerUrls: ["https://sepolia.basescan.org"],
        nativeCurrency: {
            symbol: "ETH",
            decimals: 18,
        },
    },
    // {
    //     chainName: "OP Mainnet",
    //     chainId: "0xa",
    //     rpcUrls: ["https://mainnet.optimism.io"],
    //     blockExplorerUrls: ["https://explorer.optimism.io"],
    //     nativeCurrency: {
    //         symbol: "ETH",
    //         decimals: 18,
    //     },
    // },
]