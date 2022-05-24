const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const connectDB =  require('./db/conn')

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

const v1 =  require('./routes/v1/')

app.use('/api/v1/', v1)

app.listen(port, () => console.log("Running on port " + port ))