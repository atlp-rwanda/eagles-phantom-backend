require('dotenv').config()

module.exports = {
  development: {
    url: 'postgres://postgres:password@127.0.0.1:5432/test',
    dialect: 'postgres',
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    dialect: 'postgres',
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
  },
}