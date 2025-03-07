const mongoose = require('mongoose');

const livroSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  ano: { type: Number, required: true }
});

const Livro = mongoose.model('Livro', livroSchema); // Cria o modelo 'Livro'

module.exports = Livro;
