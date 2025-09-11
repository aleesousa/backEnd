// importa o express
const express = require('express')

//crio um roteador
const router = express.Router()

// Implemento as rotas e a lógica
// CRUD de contatos (create, read, update, delete)

// Váriavel para guardar a lista de contatos
let contatos = ["João", "Maria"]

// Buscar a lista de contatos
router.get('/contatos', (req, res, next) =>{
    res.json(contatos)
})

// Cadastrar o contato
router.post('/contatos', (req, res, next) =>{
    const { nome } = req.body
    // validações
    if(!nome){
        return res.status(400).json({ error: "Nome é Obrigatório!!"})
    }
    if(contatos.includes(nome)){
        return res.status(409).json({ erro: "Contato já existe!!!"})
    }
    contatos.push(nome)
    res.status(201).json({ message: "Contato cadastrato com sucesso!!" })
})

// Deletar um contato
router.delete("/contatos/:nome", () => {
    const nome = req.params.nome
    contatos = contatos.filter(contato => contato != nome)
    res.json({message: "Contato excluido com sucesso!!!"})
})

// Deletar todos os contatos
router.delete("/contatos", (req, res, next) =>{
    contatos = []
    res.json({ message: "Todos os contatos foram excluido!!! "})
})

// exporto o roteador
module.exports = router