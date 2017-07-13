const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
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
    },
    
    
  });
 
  user.beforeCreate= function beforeCreate(user){
   //const salt = bcrypt.genSaltSync();
   user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
    
   }
  user.prototype.validPassword = function validPassword(password) {
    return bcrypt.compareSync(password, this.password);
    
  };

   

     
  user.associate = function associate(models) {
    user.hasMany(models.message, {
    });
    user.belongsToMany(models.group, {
      foreignKey:'userId', 
      through:'groupId',
       
    });
  };

  return user;
};