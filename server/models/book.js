'use strict';
module.exports = (sequelize, DataTypes) => {
  var Book = sequelize.define('Book', {
    bookTitle: DataTypes.STRING,
    author: DataTypes.STRING,
    isbn: DataTypes.STRING,
    bookSummary: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: (models)=> {
        // associations can be defined here
        Book.hasMany(models.UserBorrowedBooks,{
          foreignKey:'bookId'  
        });
      }
    }
  });
  return Book;
};