const express = require("express");

const router = express.Router();

const bookController = require('../controllers/book.controller');

router.get('/edit/:No', bookController.editBookPage);
router.post('/edit/:No', bookController.editBook);
router.get('/add', bookController.addBookPage);
router.post('/add', bookController.addBook);
router.get('/delete/:No', bookController.deleteBook);
router.get('/search', bookController.searchBookPage);
router.post('/search', bookController.searchBook);
router.get('/show', bookController.show);

module.exports = router;