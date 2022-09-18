const { book } = require('../models');

const getAll = async () => {
  const books = await book.findAll({ 
    order: [['title', 'ASC']],
  });

  return books;
};

const getById = async (id) => {
  const book = await book.findByPk(id);

  return book;
};

const getByAuthor = async (author) => {
  const books = await book.findAll({ 
    where: { author },
    order: [['title', 'ASC']],
  });

  return books;
};

const createBook = async (title, author, pageQuantity, publisher) => {
  const newBook = await book.create({ title, author, pageQuantity, publisher });

  return newBook;
};

const updateBook = async (id, title, author, pageQuantity, publisher) => {
  const [updatedBook] = await book.update(
    { title, author, pageQuantity, publisher },
    { where: { id } },
  );
 
  return updatedBook;
};

const deleteBook = async (id) => {
  const book = await book.destroy(
    { where: { id } },
  );

  return book;
};

module.exports = {
  getAll,
  getById,
  getByAuthor,
  createBook,
  updateBook,
  deleteBook,
};
