const { User } = require('../models');

const createUser = ({ username, password }) => User.create({ username, password });

const getByUserId = (id) => User.findByPk(id);

module.exports = {
  createUser,
  getByUserId,
};
