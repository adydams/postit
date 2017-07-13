'use strict';

module.exports = (sequelize, DataTypes) => {
  const group = sequelize.define('group', {
     name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Group name cannot be an empty string'
        },
        is: {
          args: /^[a-z1-9_]+$/i,
          msg: 'Name can contain only letters, numbers and underscores'
        }
      }
    },
    
    description: {
      type: DataTypes.STRING,
    },

    groupId:{
       type: DataTypes.STRING,
    },

    } 
  );
      group.associate = function associate(models) {
      group.hasMany(models.message);
      group.belongsTo(models.user, {
        as: 'Creator',
        onDelete: 'SET NULL'
      });
      group.belongsToMany(models.user, {
         foreignKey: 'userId',
         through:'groupId',
         });
    };
  return group;
}
  