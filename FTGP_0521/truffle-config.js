const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
	contracts_build_directory: './web/src/contracts',
    networks: {
        development: {
            host: "127.0.0.1",
            port: 8545,
            network_id: 1337,
            gasLimit: 500000000,
        },
        bsctestnet: {
            provider: () => new HDWalletProvider(
                `spot error visit urge weapon hire grunt glare glimpse crush mercy clip`,
                `https://data-seed-prebsc-1-s3.binance.org:8545`
            ),
            network_id: 97,
            gasLimit: 500000000,
            skipDryRun: true
        },
    },
    compilers: {
        solc: {
            version: "./node_modules/solc",
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 200
                }
            }
        }
    },
    plugins: [
        'truffle-plugin-verify'
    ],
    api_keys: {
        bscscan: 'WRIA3TSVFBPXHTNHYH8D8KKX4HAFVHPDV8',
    },
    verify: {
        proxy: {
            host: '127.0.0.1',
            port: '1081',
        },
    },
};
