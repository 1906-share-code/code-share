const Sequelize = require('sequelize')
const db = require('../db')

const Ops = db.define('ops', {
  collection: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true
  },
  doc_id: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true
  },
  version: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  operation: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = Ops
