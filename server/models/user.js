const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        message: 'username already exist'
      },
      validate: {
        is: {
          args: /\w+/g,
          message: 'Input a valid username'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: { isEmail: true },
    },
  },{
     hooks: {
       beforeCreate: (user) => {
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);
         }
       },instanceMethods:{
         validPassword:  function(password) {
          return bcrypt.compareSync(password, this.password);
       }
    },
  });
 
  user.associate = function associate(models) {
    user.hasMany(models.message);
    user.belongsToMany(models.group, {
      foreignKey:'userId', 
      through:'groupId'
    });
  };

  return user;
};