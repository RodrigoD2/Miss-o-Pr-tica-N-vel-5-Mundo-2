const express = require('express');
const router = express.Router();
const Livro = require('../modelo/livro-schema');

// Rota GET para listar livros
router.get('/', async (req, res) => {
  try {
    const livros = await Livro.find();  // Busca todos os livros no banco
    res.json(livros);  // Retorna os livros como resposta em JSON
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar livros' });
  }
});

// Rota POST para adicionar livro
router.post('/', async (req, res) => {
  try {
    const livro = new Livro(req.body);  // Cria um novo livro com os dados enviados
    await livro.save();  // Salva o livro no banco
    res.status(201).json({ message: 'Livro adicionado com sucesso!' });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao adicionar livro' });
  }
});

module.exports = router;
