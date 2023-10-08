require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");

/** @type import('hardhat/config').HardhatUserConfig */



module.exports = {
  defaultNetwork: "hardhat",
  networks: {

    localhost: {
      url: "http://127.0.0.1:8545/",
      chainId: 31337,
      ens: {
        enabled: true,
      },
    },
   
  },
  solidity: {
    compilers: [{ version: "0.8.18" }, { version: "0.6.6" }],
  },
  namedAccounts: {
    deployer: {
      default: 0,
      // 1: 0,
    },
    player: {
      default: 1,
    },
  },
  mocha: {
    timeout: 500000,
  },
};
