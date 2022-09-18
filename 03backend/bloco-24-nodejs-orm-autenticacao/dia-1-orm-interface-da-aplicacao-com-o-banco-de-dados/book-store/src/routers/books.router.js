const express = require('express');
const { booksController } = require('../controllers');

const router = express.Router();

router.get('/', booksController.getAll);

router.get('/:id', booksController.getById);

router.get('/search', booksController.getByAuthor);

router.post('/', booksController.createBook);

router.put('/:id', booksController.updateBook);

router.delete('/:id', booksController.deleteBook);

module.exports = router;
