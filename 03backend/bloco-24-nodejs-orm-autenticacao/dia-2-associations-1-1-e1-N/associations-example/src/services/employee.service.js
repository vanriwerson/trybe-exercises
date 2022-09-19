const { Address, Employee } = require('../models/');

const getAll = async () => {
  const users = await Employee.findAll({
    include: { model: Address, as: 'addresses' },
  });

  return users;
};

// Eager loading => utilizado quando precisamos de todos os dados
// const getById = async (id) => {
//   const employee = await Employee.findByPk(id, {
//       include: [{
//         model: Address, as: 'addresses', attributes: { exclude: ['employeeId'] },
//       }],
//     });
//   return employee;
// };

const getById = async (id) => {
  const employee = await Employee.findOne({
    where: { id },
  });
  return employee;
};

module.exports = {
  getAll,
  getById,
};