const { booksModel } = require('../models');

const getAll = async () => {
  const books = await booksModel.findAll();

  return books;
};

const getById = async (id) => {
  const book = await booksModel.findByPk(id);

  return book;
};

const createBook = async (title, author, pageQuantity) => {
  const newBook = await booksModel.create({ title, author, pageQuantity });

  return newBook;
};

const updateBook = async (id, title, author, pageQuantity) => {
  const [updatedBook] = await booksModel.update(
    { title, author, pageQuantity },
    { where: { id } },
  );
 
  return updatedBook;
};

const deleteBook = async (id) => {
  const book = await booksModel.destroy(
    { where: { id } },
  );

  return book;
};

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  deleteBook,
};
