const express = require("express");
const router = express.Router();

// lista de pessoas de simular o banco de dados
let listaPessoas = [
  {
    id: 1,
    nome: "Joao",
    cpf: "000000000-00",
    email: "joaofrango@gmail.com",
    dataNascimento: "01/01/2000",
  },
  {
    id: 2,
    nome: "Leal",
    cpf: "000000000-02",
    email: "cadu@gmail.com",
    dataNascimento: "02/02/2002",
  },
];

// mapear as rotas e a lógica
// Busca - GET /pessoas
router.get("/pessoas", (req, res, next) => {
  res.json(listaPessoas);
});

// Busca por ID -
// GET /pessoas/:id
router.get("/pessoas/:id", (req, res, next) => {
  // recebendo o ID como parametro dinâmico
  const id = req.params.id;
  // faço a busca na lista de pessoas pelo id recebido
  const pessoa = listaPessoas.find((pessoa) => pessoa.id == id);
  if (!pessoa) {
    return res.status(404).json({ error: "Pessoa não encontrada!!!" });
  }
  res.json(pessoa);
});

// exportar o roteador
module.exports = router;
