//onst Sequelize = require('sequelize')
// const Sharedb = require('sharedb-postgres')
// const pkg = require('../../package.json')

// const databaseName = pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '')

// const sdb = new Sharedb(
//   process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`,
//   {
//     logging: false
//   }
// )
// module.exports = sdb

// This is a global Mocha hook used for resource cleanup.
// Otherwise, Mocha v4+ does not exit after tests.
// if (process.env.NODE_ENV === 'test') {
//   after('close database connection', () => sdb.close())
// }
