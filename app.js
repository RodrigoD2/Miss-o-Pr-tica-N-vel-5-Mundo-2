const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const livroRouter = require('./routes/livros');

const app = express();

// Conexão com o MongoDB
mongoose.connect('mongodb://localhost:27017/livraria', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Conexão com o MongoDB estabelecida com sucesso!"))
  .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

// Usar CORS e middleware para aceitar JSON
app.use(cors());
app.use(express.json());

// Configuração das rotas
app.use('/livros', livroRouter);  // Para '/livros', será utilizado o livroRouter

// Rota raiz
app.get('/', (req, res) => {
  res.send('Bem-vindo ao servidor de livros!');
});

module.exports = app;
