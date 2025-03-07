const Livro = require('./livro-schema'); // Modelo do Mongoose

// Função para obter todos os livros
const obterLivros = async () => {
  try {
    return await Livro.find(); // Retorna todos os livros da coleção
  } catch (err) {
    throw new Error('Erro ao obter livros');
  }
};

// Função para incluir um novo livro
const incluir = async (livro) => {
  try {
    await Livro.create(livro); // Cria um novo livro no banco
  } catch (err) {
    throw new Error('Erro ao adicionar livro');
  }
};

module.exports = { obterLivros, incluir }; // Exporta as funções para o `livros.js`
