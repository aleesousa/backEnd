const express = require("express");
const router = express.Router;
const PessoaModel = require('../models/PessoaModel')

// Rotas do CRUD
// Create
router.post('/pessoas', async (req, res, next) => {
    const pessoa = req.body
    const pessoaCadastrada = await PessoaModel.create(pessoa)
    res.status(201).json(pessoaCadastrada)
})

// Read

// Update

//Delete



module.exports = router;
