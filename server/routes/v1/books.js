const express = require('express')
const router = express.Router()
const {getAllBooks, createBook, updateBook, deleteBook} = require('../../controllers/books')

router.route('/').get(getAllBooks).post(createBook)
router.route('/:id').put(updateBook).delete(deleteBook)

module.exports = router