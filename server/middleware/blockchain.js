const config = require('../config');
const ethers = require("ethers");

const getContract = (req, res, next) => {
  try {

    // establish connection to smart contract
    const provider = ethers.getDefaultProvider(`https://mainnet.infura.io/v3/${config.INFURA_PROJECT_ID}`);
    const ABI = require('../../abi.json');

    const contract = new ethers.Contract(
      config.CONTRACT_ADDRESS,
      ABI,
      provider
    );

    // module.exports = contract;
    req.contract = contract;
    next();

  } catch (err) {
    const errMsg = 'Internal auth error - failed to read smart contract'
    console.log(err)
    console.error(errMsg);
    res.status(500).json({ msg: errMsg });
  }
};

module.exports = getContract;
