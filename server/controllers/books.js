const asyncHandler = require('express-async-handler')
const Book = require('../models/books')

const getAllBooks = asyncHandler(async (req, res) => {
    const books = await Book.find()
    res.json(books)
})

const createBook = asyncHandler( async (req, res) => {
    const book = await Book.create(req.body)
    res.status(201).json(book)
}) 

const updateBook = asyncHandler( async (req, res) => {
    const updated = await Book.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    res.status(201).json(updated)
})  

const deleteBook = asyncHandler( async (req, res) => {
    const deleted = await Book.findByIdAndDelete(req.params.id)
    res.status(202).json(deleted)
})

module.exports = {
    getAllBooks,
    createBook,
    updateBook,
    deleteBook
}