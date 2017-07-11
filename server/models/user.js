module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('users', {
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
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
      // user.associate = (models) => {
      //   user.hasMany(models.group, {
      //     foreignKey: 'userId',
      //     as: 'groups',
      //   });
      // };
  return user;
};