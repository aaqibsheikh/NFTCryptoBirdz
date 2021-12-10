require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
// const mnemonic = fs.readFileSync(".secret").toString().trim();

const keyData = fs.readFileSync('./p-key.txt', {
  encoding:'utf8', flag:'r'
})

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: { 
      url: "https://polygon-mumbai.infura.io/v3/84c54b7656b64c6499ae7ccedf9c6bc3",
      accounts: [keyData]
    },
    mainnet: {
      url: "https://polygon-mainnet.infura.io/v3/84c54b7656b64c6499ae7ccedf9c6bc3",
      accounts: [keyData]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
};
