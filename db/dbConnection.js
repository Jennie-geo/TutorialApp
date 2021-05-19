const mongoose = require("mongoose");
require('dotenv').config()
const { CONNECTION_URL } = process.env
//const db = mongoose.connection
//creating  connection function
const connectDB = async () => {
    try {
        await mongoose.connect(CONNECTION_URL, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
         });
        console.log('DB connected successfully...')
    } catch(err) {
     console.error(err.message);
     process.exit(1);
    }   
}                                   

module.exports = connectDB;