'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserBorrowedBooks = sequelize.define('UserBorrowedBooks', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bookId:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    borrowedDate: {
      type: DataTypes.DATE
    },
    returnedDate:{
       type: DataTypes.DATE
      }
  }, {
    classMethods: {
      associate: (models)=> {
        // associations can be defined here
        UserBorrowedBooks.belongsTo(models.User, {
          foreignKey: 'userId',
        });
        UserBorrowedBooks.belongsTo(models.Book,{
          foreignKey: 'bookId'
        });
      }
    }
  });
  return UserBorrowedBooks;
};