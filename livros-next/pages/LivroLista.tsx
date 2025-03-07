import { useState, useEffect } from "react";
import Head from "next/head";
import { Menu } from "../componentes/Menu";
import { LinhaLivro } from "../componentes/LinhaLivro";
import { Livro } from "../classes/modelo/Livro";
import styles from "../styles/Home.module.css";

const baseURL = "http://localhost:3000/api/livros";

const obterLivros = async (): Promise<Livro[]> => {
  const resposta = await fetch(baseURL);
  return resposta.json();
};

const excluirLivro = async (codigo: number): Promise<boolean> => {
  const resposta = await fetch(`${baseURL}/${codigo}`, { method: "DELETE" });
  return resposta.ok;
};

const LivroLista = () => {
  const [livros, setLivros] = useState<Array<Livro>>([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    if (!carregado) {
      obterLivros().then((dados) => {
        setLivros(dados);
        setCarregado(true);
      });
    }
  }, [carregado]);

  const excluir = (codigo: number) => {
    excluirLivro(codigo).then(() => setCarregado(false));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Loja Next - Livros</title>
      </Head>

      <Menu />

      <main>
        <h1>Catálogo de Livros</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Título</th>
              <th>Editora</th>
              <th>Autores</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro) => (
              <LinhaLivro
                key={livro.codigo}
                livro={livro}
                excluir={excluir}
              />
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default LivroLista;
