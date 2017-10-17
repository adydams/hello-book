const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

//set up express as app
const app = express();

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
app.post('/api/books', (req, res)=>{
      let  book = ({
      title: req.body.title,
      author: req.body.author,
      bookSummary: req.body.bookSummary,
      isbn: req.body.isbn
    });
  
    res.send(book);
});

module.exports = app; 