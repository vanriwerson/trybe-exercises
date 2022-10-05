import { Router } from 'express';
import BooksController from '../controllers/books.controller';
import validationBook from '../middlewares/books.middleware';

const router = Router();

const booksController = new BooksController();

const booksIdRoute = '/books/:id';

router.get('/books', booksController.getAll);

router.get(booksIdRoute, booksController.getById);

router.post('/books/', validationBook, booksController.create);

router.put(booksIdRoute, validationBook, booksController.update);

router.delete(booksIdRoute, booksController.remove);

export default router;