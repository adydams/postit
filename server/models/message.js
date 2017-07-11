'use strict';

module.exports = (sequelize, DataTypes) => {
  const message = sequelize.define('messages', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: {
        args: true,
        msg: 'id already exists!'
      }
    },

   text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Message cannot be empty'
        } 
       } 
      },
      
    priority: {
      type: DataTypes.STRING,
      defaultValue: 'normal',
      validate: {
        isIn: {
          args: [['normal', 'urgent', 'critical']],
          msg: 'priority is invalid'
        }
      }
    },
  
    
  });
  //     // Message.associate = function associate(models) {
  //   Message.belongsTo(models.User, {
  //     as: 'Author',
  //     onDelete: 'SET NULL'
  //   });
  //   Message.belongsToMany(models.User, {
  //     through: 'UserUnreadMessages'
  //   });
  // };
  return message;
};