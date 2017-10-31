'use strict';
module.exports = (sequelize, DataTypes) => {
  var Role = sequelize.define('Role', {
    title: DataTypes.STRING
  },
  {
    roleId: DataTypes.INTEGER
  } ,{
    classMethods: {
      associate: (models)=> {
        // associations can be defined here
        Role.hasMany(models.User, {
          foreignKey: 'roleId',
          onDelete: 'CASCADE'
        });
      }
    }
  });
  return Role;
};