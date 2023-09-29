const express = require('express')
const routers = require('./rotas/index')
const app= express()
const {sequelize} = require('./models/index')

app.use(express.json())

app.use('/',routers)

sequelize.sync().then(()=>{
    console.log('Conectado patrão!')
})
app.listen(3000,()=>{
    console.log('server onfire!')
})