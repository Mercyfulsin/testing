require('dotenv').config();
module.exports = {
  development: {
    username: 'g6ek7gp6inmy47ow',
    password: process.env.DB_PASSWORD,
    database: 'jlcelikkxrpe5nnq',
    host: 'muowdopceqgxjn2b.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    dialect: 'mysql',
    port: '3306'
  },
  test: {
    username: 'g6ek7gp6inmy47ow',
    password: 'Yakusoku1!',
    database: 'testdb',
    host: 'localhost',
    dialect: 'mysql',
    logging: false
  },
  production: {
    // eslint-disable-next-line camelcase
    username: 'g6ek7gp6inmy47ow',
    password: process.env.DB_PASSWORD,
    database: 'jlcelikkxrpe5nnq',
    host: 'muowdopceqgxjn2b.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    dialect: 'mysql',
    port: '3306'
  }
};
