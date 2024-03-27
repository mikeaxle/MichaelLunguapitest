const dotenv = require('dotenv')

// Load env vars if env is not production
if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: './server/config/local.env' })
}

module.exports = {
  PORT: process.env.PORT || 7777,
  JWT_SECRET: process.env.JWT_SECRET,
  MONGO_URI: process.env.MONGO_URI,
  NODE_ENV: process.env.NODE_ENV,
  INITIAL_CHIPS_AMOUNT: 100000,
  INFURA_PROJECT_ID: 'a591ef7ae9b64d9394f0ffd48a7d24ad', // TODO: move to .env
  CONTRACT_ADDRESS: '0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD270' // TODO: move to .env
}
