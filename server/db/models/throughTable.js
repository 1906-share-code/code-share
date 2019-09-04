const Sequelize = require('sequelize')
const db = require('../db')

const ThroughTable = db.define(
  'throughTable',
  {
    userId: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  }
)

module.exports = ThroughTable
