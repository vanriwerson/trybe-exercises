'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('books', 'publisher', { // addColumn recebe o nome da tabela e o nome da coluna com suas opções de tipagem
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('books', 'publisher');
  }
};
