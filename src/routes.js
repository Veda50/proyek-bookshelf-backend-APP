const handle = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: handle.addBook,
  },
  {
    method: 'GET',
    path: '/books',
    handler: handle.getAllBooks,
  },
  {
    method: 'GET',
    path: '/books/{booksId}',
    handler: handle.getBookById,
  },
  {
    method: 'PUT',
    path: '/books/{booksId}',
    handler: handle.editBookById,
  },
  {
    method: 'DELETE',
    path: '/books/{booksId}',
    handler: handle.deleteBookById,
  },
];

module.exports = routes;
