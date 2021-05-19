const express = require("express");

const connectDB = require('./db/dbConnection');
//using environmental variable
require('dotenv').config()
const { PORT } = process.env;
//connect to db
connectDB()
//initializing express
const app = express()
 //initializing express middleware
app.use(express.json({extended: false}))

app.get('/', (req, res) => {
    res.status(200).json({message: "it is well"})
})
const port = process.env.PORT || PORT;
app.listen(port, () => console.log("Server connected"))