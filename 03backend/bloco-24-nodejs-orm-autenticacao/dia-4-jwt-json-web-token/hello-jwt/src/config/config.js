require('dotenv').config();

const config = {
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.MYSQL_HOST,
  dialect: 'mysql',
};

module.exports = {
  development: {
    ...config,
    database: 'jwt_exercise_dev',
  },
  test: {
    ...config,
    database: 'jwt_exercise_test',
  },
  production: {
    ...config,
    database: 'jwt_exercise',
  },
};
