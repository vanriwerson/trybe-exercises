const { Address, Employee } = require('../models/');
const Sequelize = require('sequelize');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';
// Ajustamos para usar a configuração correta para nosso ambiente
const sequelize = new Sequelize(config[env]);

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

// Unmanaged transaction:
// const insert = async ({ firstName, lastName, age, city, street, number }) => {
//   const t = await sequelize.transaction();
//   try {
//     const employee = await Employee.create(
//       { firstName, lastName, age },
//       { transaction: t },
//     );

//     await Address.create(
//       { city, street, number, employeeId: employee.id },
//       { transaction: t },
//     );

//     // Se chegou até essa linha, quer dizer que nenhum erro ocorreu.
//     // Com isso, podemos finalizar a transação usando a função `commit`.
//     await t.commit();
//     return employee;
//   } catch (e) {
//     // Se entrou nesse bloco é porque alguma operação falhou.
//     // Nesse caso, o sequelize irá reverter as operações anteriores com a função rollback, não sendo necessário fazer manualmente
//     await t.rollback();
//     console.log(e);
//     throw e; // Jogamos o erro para a controller tratar
//   }
// };

// Managed transaction (recomendado):
const insert = async ({ firstName, lastName, age, city, street, number }) => {
  const t = await sequelize.transaction();
  try {
    const result = await sequelize.transaction(async (t) => {
      const employee = await Employee.create({
        firstName, lastName, age
      }, { transaction: t });

      await Address.create({
        city, street, number, employeeId: employee.id
      }, { transaction: t });
      return employee;
    });
    return result;
  } catch (e) {
    console.log(e);
    throw e; // Jogamos o erro para a controller tratar
  }
};

module.exports = {
  getAll,
  getById,
  insert,
};