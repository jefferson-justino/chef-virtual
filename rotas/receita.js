const express = require('express')
const router = express.Router()
const { receita} = require('../models/index') 


router.get('/',async(req,res)=>{
    const cursos = await receita.findAll()
    res.json(cursos)
}) 
router.post('/',async(req,res)=>{
    const{titulo,imagem,descricao} =req.body
    await receita.create({titulo,imagem,descricao})
    res.send('Receita criada!')
})
module.exports = router