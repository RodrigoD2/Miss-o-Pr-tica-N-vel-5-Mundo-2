import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LivroDados = () => {
  const navigate = useNavigate();
  const [livro, setLivro] = useState({
    codigo: '', // Alteração: Texto vazio para o código
    titulo: '',
    autor: '',
    ano: '',
  });

  const incluir = () => {
    // Chamar o método do servidor para incluir o livro
    fetch('http://localhost:5000/livros', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(livro),
    })
    .then(response => response.json())
    .then(data => {
      // Após a inclusão do livro, redirecionar para a raiz
      navigate('/');
    })
    .catch(error => console.error('Erro ao incluir livro:', error));
  };

  return (
    <div>
      <h2>Incluir Livro</h2>
      <form onSubmit={(e) => { e.preventDefault(); incluir(); }}>
        <input
          type="text"
          placeholder="Código"
          value={livro.codigo}
          onChange={(e) => setLivro({ ...livro, codigo: e.target.value })}
        />
        <input
          type="text"
          placeholder="Título"
          value={livro.titulo}
          onChange={(e) => setLivro({ ...livro, titulo: e.target.value })}
        />
        <input
          type="text"
          placeholder="Autor"
          value={livro.autor}
          onChange={(e) => setLivro({ ...livro, autor: e.target.value })}
        />
        <input
          type="number"
          placeholder="Ano"
          value={livro.ano}
          onChange={(e) => setLivro({ ...livro, ano: e.target.value })}
        />
        <button type="submit">Incluir</button>
      </form>
    </div>
  );
};

export default LivroDados;
