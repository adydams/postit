const sequelize = require('sequelize')

sequelize.define('grouppage', {
     id: Sequelize.INTEGER,
  groupname: Sequelize.TEXT,
  groupmembers: Sequelize.TEXT
})