'use strict';

module.exports = (sequelize, DataTypes) => {
  const message = sequelize.define('message', {
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

    userId:{
      type:DataTypes.INTEGER,
    },
  
    
  });
     message.associate = function associate(models) {
     message.belongsTo(models.user, {
     foreignKey: 'userId',
     onDelete: 'CASCADE',
    });
    
  };
  return message;
};