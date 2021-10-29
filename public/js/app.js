const express = require("express");

const app = express();

const bodyParser = require("body-parser");
const ejs = require('ejs');


app.use(express.static("public"));
var session = require('express-session');

// var cookieParser = require('cookie-parser');


// SET VIEW ENGINE
// app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', 'views');

// console.log(session);
const homeRoute = require("./routes/home");
app.use("/", homeRoute);


// const mysqlConnection = require('./config/database');


// app.use(cookieParser());






// app.use(session({
//     secret: 'worksheetswelove',
//     resave: true,
//     saveUninitialized: true,
//     maxAge: Date.now() + (30 * 86400 * 1000)
// })); // session secret



// USE BODY-PARSER MIDDLEWARE
app.use(express.urlencoded({ extended: false }));



app.use(express.json());




app.listen('3000', () => {
    console.log("server started on port 50000");
});

module.exports = app;


