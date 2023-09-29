const  Sequelize  = require('sequelize')
const sequelize = require('../banco/sequelize')

const Receita = require('./receita')

const receita = Receita(sequelize,Sequelize.DataTypes)

const db ={
    sequelize, receita
}
module.exports = db 