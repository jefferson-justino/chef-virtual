const Sequelize = require('sequelize')

// const configDatabase = require('./database') 

// const sequelize = new Sequelize(configDatabase)
const sequelize = new Sequelize(process.env.DATABASE_URL)

module.exports = sequelize