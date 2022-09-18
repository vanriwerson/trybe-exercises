const { booksService } = require('../services');

const error500Message = 'Algo deu errado';

const getAll = async (req, res) => {
  try {
    const { author } = req.query
    let books;
    
    if (author) {
      books = await booksService.getByAuthor(author);
    } else {
      books = await booksService.getAll();
    }

    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await booksService.getById(id);
  
    if (!book) return res.status(404).json({ message: 'Book not found' });

    return res.status(200).json(book);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const getByAuthor = async (req, res) => {
  try {
    const { author } = req.query;
    const books = await booksService.getByAuthor(author);
  
    if (!books) return res.status(404).json({ message: 'Book not found' });

    return res.status(200).json(books);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const createBook = async (req, res) => {
  try {
    const { title, author, pageQuantity, publisher } = req.body;
    const newBook = await booksService.createBook(title, author, pageQuantity, publisher);

    return res.status(201).json(newBook);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const updateBook = async (req, res) => {
  try {
    const { title, author, pageQuantity, publisher } = req.body;
    const { id } = req.params;
    const updatedBook = await booksService.updateUser(id, title, author, pageQuantity, publisher);

    if (!updatedBook) return res.status(404).json({ message: 'Book not found' });

    return res.status(200).json({ message: 'Book updated!' });    
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    await booksService.deleteBook(id);

    return res.status(200).json({ message: 'Book deleted!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

module.exports = {
  getAll,
  getById,
  getByAuthor,
  createBook,
  updateBook,
  deleteBook,
};
