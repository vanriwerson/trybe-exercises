const express = require('express');
const { userController } = require('../controllers');

const router = express.Router();

router.get('/', userController.getAll);

// Este endpoint usa o método findByPk do Sequelize para buscar um usuário pelo id.
router.get('/:id', userController.getById);

// Este endpoint usa o método findOne do Sequelize para buscar um usuário pelo id e email.
// URL a ser utilizada para o exemplo "http://localhost:3001/user/search/1?email=leo@test.com"
router.get('/search/:id', userController.getByIdAndEmail);

// Este endpoint usa o método create do Sequelize para salvar um usuário no banco.
router.post('/', userController.createUser);

// Este endpoint usa o método update do Sequelize para alterar um usuário no banco.
router.put('/:id', userController.updateUser);

// Este endpoint usa o método destroy do Sequelize para remover um usuário no banco.
router.delete('/:id', userController.deleteUser);

module.exports = router;