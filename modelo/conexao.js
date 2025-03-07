const mongoose = require('mongoose');

const banco = mongoose.connection;
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
};

// Estabelecendo a conexão com o MongoDB
mongoose.connect('mongodb://localhost:27017/livraria', options);

// Verificando se a conexão foi bem-sucedida
banco.on('open', () => {
    console.log('Conexão com o MongoDB estabelecida com sucesso!');
});

// Caso haja algum erro na conexão
banco.on('error', (erro) => {
    console.log('Erro na conexão com o MongoDB:', erro);
});

module.exports = banco;
