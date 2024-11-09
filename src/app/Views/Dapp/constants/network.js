export const contractAddressList = {
    137: {
        earthERC20: "0x9F9f149a02Cddc9a8251207cefD3fF774DAF56F6",
        earthStaking: "0xFD4791764e27Fe0Bac5A2BfDf2ABd5745EC588DC",
        earthTreasury: "0x4Bd65205422293eCC5Fb00cD018692Fa4Bb38BdF",
        fruit: "0xEC9e4E0dB70ee14eBF9907eA4C4514fa77d757e7",
        presale: "0xF2E7dD135F142F3847aAB27EDf8a464Bd6c5E92a",
        soulbound: "0x7d5fef3a09f8A67Bd8CEAce828Ca97af729F44df",
        stable: "0x2058A9D7613eEE744279e3856Ef0eAda5FCbaA7e",// not used
        stableCoin: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
        claim: "0x0DBAd79b9dA051d20857499f8fa1bDCF2a4dfE84"
    },
    44787: {
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
    42220: {
        earthERC20: "0x9F9f149a02Cddc9a8251207cefD3fF774DAF56F6",
        earthStaking: "0xFD4791764e27Fe0Bac5A2BfDf2ABd5745EC588DC",
        earthTreasury: "0xDD7879E58E33706151a0B57deBB1c5308584a4Cc",
        fruit: "0xEC9e4E0dB70ee14eBF9907eA4C4514fa77d757e7",
        presale: "0x99190184514e84146063BF0C521E789eb179F10e",
        soulbound: "0x7d5fef3a09f8A67Bd8CEAce828Ca97af729F44df",
        stable: "0x2058A9D7613eEE744279e3856Ef0eAda5FCbaA7e", //missing
        stableCoin: "0x765DE816845861e75A25fCA122bb6898B8B1282a",
        claim: "0xfe6323C648f1C7923CE6177157cd094630017C6E"
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
    {
        chainName: "Celo Testnet",
        chainId: "0xaef3",
        rpcUrls: ["https://alfajores-forno.celo-testnet.org"],
        blockExplorerUrls: ["https://alfajores.celoscan.io"],
        nativeCurrency: {
            symbol: "CELO",
            decimals: 18,
        },
    },
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