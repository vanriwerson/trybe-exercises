import { Router } from 'express';
import BooksController from '../controllers/books.controller';
import { validateBook, validatePartialBook } from '../middlewares/books.middleware';

const router = Router();
const booksIdRoute = '/books/:id';
const booksController = new BooksController();

router.post('/books', validateBook, booksController.create);

router.get('/books', booksController.getAll);

router.get(booksIdRoute, booksController.getById);

router.put(booksIdRoute, validateBook, booksController.update);

router.patch(booksIdRoute, validatePartialBook, booksController.partialUpdate);

router.delete(booksIdRoute, booksController.remove);

export default router;