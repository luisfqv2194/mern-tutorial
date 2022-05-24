const mongoose = require('mongoose');
const db = process.env.ATLAS_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(db)
        console.log("Connected to DB")
    } catch (error) {
        console.error(error)
    }
}

module.exports = connectDB


