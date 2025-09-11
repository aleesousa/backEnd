// importa o express e cors

const express = require("express");
const cors = require("cors");

// crio uma instância de aplicação
const app = express();

//intermediários
//habilita o cors nas requisições
app.use(cors());

//habilita receber json no corpo da requisição
app.use(express.json());

//roteadores (intermediário do tipo router)
const contatosRoutes = require("./routes/Contatos");
app.use(contatosRoutes);

// executar a aplicação
app.listen(3000, () => {
  console.log("Aplicação rodando em http://localhost:3000");
});
