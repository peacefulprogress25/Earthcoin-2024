export const networks = [
    {
        chainName: "Polygon Mainnet",
        value:"1",
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
        value:"2",
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
        value:"3",
        chainId: "0xa4ec",
        rpcUrls: ["https://forno.celo.org"],
        blockExplorerUrls: ["https://explorer.celo.org/mainnet"],
        nativeCurrency: {
            symbol: "CELO",
            decimals: 18,
        },
    },
    {
        chainName: "OP Mainnet",
        value:"4",
        chainId: "0xa",
        rpcUrls: ["https://mainnet.optimism.io"],
        blockExplorerUrls: ["https://explorer.optimism.io"],
        nativeCurrency: {
            symbol: "ETH",
            decimals: 18,
        },
    },
]