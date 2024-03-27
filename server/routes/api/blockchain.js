const express = require('express');
const router = express.Router();
const getContract = require('../../middleware/blockchain')
const { getInfoRequest, getContractNameRequest, getTotalSupplyRequest, getContractSymbolrequest } = require('../../controllers/blockchain')

router.get('/getInfo', getContract, getInfoRequest);

router.get('/getName', getContract, getContractNameRequest);

router.get('/getSymbol', getContract, getContractSymbolrequest);

router.get('/getTotalSupply', getContract, getTotalSupplyRequest);

module.exports = router;