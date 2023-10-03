const express = require('express')
const routers = require('./rotas/index')
const cors = require('cors')
const app= express()
const {sequelize} = require('./models/index')

app.use(express.json())
app.use(cors())
app.use('/',routers)

sequelize.sync().then(()=>{
    console.log('Conectado patrão!')
})
app.listen(3001,()=>{
    console.log('server onfire!')
})  