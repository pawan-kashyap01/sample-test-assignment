const mongoose = require('mongoose');
const Mongo_URL = process.env.MONGO_URL;

const connectDB = ()=>{
        mongoose.connect(Mongo_URL)
        .then((db)=>{
            console.log("Connected to MongoDB database");
        })
    };

module.exports = {connectDB};