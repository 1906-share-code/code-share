const Sequelize = require('sequelize')
const db = require('../db')

const Snapshots = db.define('snapshots', {
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
  doc_type: {
    type: Sequelize.STRING,
    allowNull: false
  },
  version: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  data: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = Snapshots
