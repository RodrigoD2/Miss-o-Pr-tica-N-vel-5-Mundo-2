// pages/LivroLista.tsx

import { useState, useEffect } from 'react';
import LinhaLivro from '../components/LinhaLivro';  // Certifique-se de que este caminho esteja correto

// Instância de ControleLivros (adapte conforme sua implementação)
import ControleLivros from '../controleLivros';

const controleLivros = new ControleLivros();

const LivroLista = () => {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    controleLivros.obterTodos()
      .then((dados) => {
        setLivros(dados);
        setCarregado(true);
      })
      .catch((erro) => {
        console.error("Erro ao obter livros:", erro);
        setCarregado(true);
      });
  }, []);

  return (
    <div>
      <h2>Lista de Livros</h2>
      {carregado ? (
        <ul>
          {livros.map((livro, index) => (
            <LinhaLivro key={index} livro={livro} index={index} />
          ))}
        </ul>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default LivroLista;
