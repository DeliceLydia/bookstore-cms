import { CREATE_BOOK, REMOVE_BOOK } from './ActionTypes';

const createBook = (book) => ({
  type: CREATE_BOOK,
  book,
});

const removeBook = (book) => ({
  type: REMOVE_BOOK,
  book,
});

export { createBook, removeBook };
