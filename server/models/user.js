'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username:{
      type: DataTypes.STRING,
      allowNull: false
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false
    },
    firstName:{
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName:{
      type: DataTypes.STRING,
      allowNull: false
    },
    roleId:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    mobileNumber:{
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: (models)=> {
        // associations can be defined here
        User.hasMany(models.UserBorrowedBooks, {
          foreignKey: 'userId',
          onDelete: 'CASCADE'  
        });
        User.belongsTo(models.Role,{
          foreignKey: 'roleId',
          onDelete: 'CASCADE'  
        })
      }
    }
  });
  return User;
};