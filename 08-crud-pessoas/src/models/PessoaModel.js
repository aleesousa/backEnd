const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  // Estrutura da pessoa
  {
    nome: { type: String, require: true },
    cpf: { type: String, require: true },
    email: { type: String, require: true },
    telefone: { type: String, require: true },
    dataNascimento: { type: Date, require: true },
    genero: { type: String, require: true },
    endereco: {
      cep: String,
      logradouro: String,
      complemento: String,
      bairro: String,
      numero: String,
      uf: String,
    },
  },

  // parametros
  // Salva data de criação e data de atualização do registro
  { timestamps: true }
);

// modelo
const PessoaModel = mongoose.model("Pessoas", schema);

model.exports = PessoaModel;