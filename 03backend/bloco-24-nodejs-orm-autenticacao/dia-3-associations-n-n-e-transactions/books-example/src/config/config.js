// src/config/config.js

require('dotenv').config();

const config = {
  username: process.env.SQL_USERNAME,
  password: process.env.SQL_PASSWORD,
  host: process.env.SQL_HOST,
  dialect: 'mysql',
};

module.exports = {
  development: {
    ...config,
    database: 'books_database_development',
  },
  test: {
    ...config,
    database: 'books_database_test',
  },
  production: {
    ...config,
    database: 'books_database_production',
  },
};