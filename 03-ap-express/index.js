// importar o express

const express = require("express");

// crio uma instância () da minha aplicação

const app = express();

// guardar o numero da porta que vai ser alocada

const porta = 3000;

// Middlewares (intermediários)
// Intermediários de Log
app.use((req, res, next) => {
  console.log("Time: ", new Date().toLocaleString());
  console.log("Metodo: ", req.method);
  console.log("Rota: ", req.url);
  next();
});

app.get("/nome", (req, res, next) => {
//capturar informações dos usuários
// vao vir atraves dos parametros da requisição (query params) É enviado pelo POSTMAN
  const primeiroNome = req.query.primeiroNome;
  const sobreNome = req.query.sobreNome;

  res.send("Olá " + primeiroNome + " " + sobreNome + "!");
});

//importando o router de calculadora de nota
const calculadoraNotaRouter = require('./routes/calculadoraNota')
// Toda requisição que chegar na rota /calculadora vai paara o router
app.use('/calculadora', calculadoraNotaRouter)

// Método e a rota
// Req -> Dados da requisição
// Res -> Manipulador da resposta
// Next -> Chamador do proximo middleware
app.get("/teste", (req, res, next) => {
  res.send("TESTE ATUALIZAR");
});

app.get("/pessoas", (req, res, next) => {
  const pessoas = [
    {
      id: 1,
      nome: "Ale",
      idade: "20",
    },
    {
      id: 2,
      nome: "Sousa",
      idade: "30",
    },
  ];

  res.json(pessoas);
});

// Executa a aplicação escolhendo a porta
app.listen(porta, () => {
  // Imprimo uma mensagem para confirmar que aplicação está funcionando (rodando na porta escolhida)
  console.log("Aplicação rodando em http://localhost:3000");
});

// Executa a aplicação escolhendo
