const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db')
dotenv.config({path : './config/config.env'});

connectDB();
const app = express();
app.use(express.json());
app.use(morgan('dev'));
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }));
const transactions = require("./routes/transactions");
app.use('/api/v1/transactions',transactions);
//app.get('/' , (req,res) => (res.send('hello'))); 
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`.yellow.bold));
