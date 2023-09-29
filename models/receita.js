const {DataTypes} = require('sequelize')

const receita = (sequelize, DataTypes)=>{
    const Receita = sequelize.define('Receita',{
        titulo:{
            type: DataTypes.STRING,

        },
        imagem:{
            type: DataTypes.STRING,

        },
        descricao:{
            type:DataTypes.TEXT,
        }

    },{
        tableName:'receita'
    })
return Receita
}

module.exports = receita