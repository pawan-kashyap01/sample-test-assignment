require('dotenv').config();
const app = require('./app');
const PORT = process.env.PORT | 5000;
const {connectDB} = require('./config/db');

//Handling uncaught exception
process.on('uncaughtException', (err)=>{
    console.log(`Error: ${err.message}`);
    console.log('Shutting down server due to uncaught exception.');
    process.exit(1);
});

//Connecting to database
connectDB();

const server = app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`);
});

//Unhandled promise rejection
process.on('unhandledRejection',(err)=>{
    console.error(`Error: ${err}`);
    console.error(`Error Message: ${err.message}`);
    console.log("Shutting down the server due to unhandled promise rejection.");
    server.close(()=>{
        process.exit(1);
    })
})
