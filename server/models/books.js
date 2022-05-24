const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add title']
    },
    author: {
        type: String,
        required: [true, 'Please add author']
    }
})


module.exports = mongoose.model('Book', bookSchema)