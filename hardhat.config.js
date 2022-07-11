require('@nomiclabs/hardhat-waffle');
require("dotenv").config({ path: ".env" });
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  solidity: '0.8.9',
  networks: {
    rinkeby: {
      url: process.env.ALCHEMY_API_KEY_URL,
      accounts: [process.env.RINKEBY_PRIVATE_KEY],
    },
    // mainnet: {
    //   chainId: 1,
    //   url: process.env.PROD_ALCHEMY_KEY,
    //   accounts: [process.env.PRIVATE_KEY],
    // },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "A5AUM1G8ABD56HHCDS4UI3CXB3Q9WAD1T1",
  }
};
