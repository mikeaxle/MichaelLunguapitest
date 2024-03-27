const contract = require('../server')

// @route   GET api/blockchain/getInfo
// @desc    Get smart contract admin address
// @access  Public
exports.getInfoRequest = async (req, res) => {
  try {
    console.log('fetching smart contract info...')
    const info = await req.contract.admin()
    console.log(info);
    return res.status(200).send(`Owner account: ${info}`);
  } catch (err) {
    console.log(err)
    return res.status(500).send(`Internal server error: ${err}`);
  }
}

// @route   GET api/blockchain/getName
// @desc    Get smart contract name 
// @access  Public
exports.getContractNameRequest = async (req, res) => {
  try {
    const name = await req.contract.name();
    console.log(name)
    return res.status(200).send(`Smart Contract Name: ${name}`);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send(`Internal server error: ${err.message}`);
  }
};

// @route   GET api/blockchain/getSymbol
// @desc    Get smart contract Symbol 
// @access  Public
exports.getContractSymbolrequest = async (req, res) => {
  try {
    const symbol = await req.contract.symbol();
    console.log(symbol)
    return res.status(200).send(`Smart Contract Symbol: ${symbol}`);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send(`Internal server error: ${err.message}`);
  }
};

// @route   GET api/blockchain/getTotalSupply
// @desc    Get smart contract total supply 
// @access  Public
exports.getTotalSupplyRequest = async (req, res) => {
  try {
    const totalSupply = await req.contract.totalSupply()
    console.log(totalSupply)
    return res.status(200).send(`Totaly Supply: ${totalSupply.toString()}`);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send(`Internal server error: ${err.message}`);
  }
};