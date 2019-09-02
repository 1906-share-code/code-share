const Sequelize = require('sequelize')
const db = require('../db')

const Doc = db.define('doc', {
  docname: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  userId: {
    type: Sequelize.STRING
  }
})

module.exports = Doc
