const express = require('express')

const receitaRouter = require('./receita')

const router = express.Router()

router.get('/',(req,res)=>{
    res.send('Estamos funcionando!')
})

router.use('/receitas',receitaRouter)


module.exports = router