// pages/LivroDados.tsx
import { useState } from 'react';
import { useRouter } from 'next/router';
import ControleLivros from '../controleLivros';  // Certifique-se de que o ControleLivros está corretamente implementado
import Livro from '../models/Livro'; // Importe o modelo de Livro, conforme sua estrutura

const controleLivros = new ControleLivros();

const LivroDados = () => {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [ano, setAno] = useState('');
  const [carregado, setCarregado] = useState(false);

  const router = useRouter();

  // Função para incluir um livro
  const incluirLivro = () => {
    const livro = new Livro({
      codigo: '', // Código vazio conforme solicitado
      titulo,
      autor,
      ano
    });

    controleLivros.incluir(livro)
      .then(() => {
        router.push('/LivroLista'); // Redireciona para a página de LivroLista após a inclusão
      })
      .catch((erro) => {
        console.error("Erro ao incluir livro:", erro);
        setCarregado(true); // Manter o carregamento se ocorrer um erro
      });
  };

  return (
    <div>
      <h2>Incluir Livro</h2>
      <form onSubmit={(e) => { e.preventDefault(); incluirLivro(); }}>
        <div>
          <label>Título:</label>
          <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        </div>
        <div>
          <label>Autor:</label>
          <input type="text" value={autor} onChange={(e) => setAutor(e.target.value)} />
        </div>
        <div>
          <label>An
