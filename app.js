const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const uuidv4 = require('uuid/v4');
const fs = require('fs');
//const dummyMemory =require('./dummyMemory');
//set up express as app
const app = express();
const userController = require('./server/controllers/user');
const bookController = require('./server/controllers/book')
//log response to the console
app.use(logger('dev'))

//parse incoming request as JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//a default routes

app.get('/api', (req, res)=>{
    res.status(200).send({
       message: 'Welcome to Hello-Book, default routes'
    });
});

// adding a new book
app.post('/api/books', bookController.books);

//updating existing books
app.put('/api/books/:bookId', bookController.put);

//getting all the list of books 
app.get('/api/books', bookController.list);

//signup route
app.post('/api/user/signup', userController.signup)
//signin route
app.post('/api/user/signin', userController.signin)

module.exports = app; 