import React from "react";
import { ControleEditora } from '../classes/controle/ControleEditora';
import { Livro } from "../classes/modelo/Livro";


const controleEditora = new ControleEditora();


interface LinhaLivroProps {
  livro: Livro;
  excluir: (codigo: number) => void;
}

const LinhaLivro = ({ livro, index, excluirLivro }) => {
  return (
    <li key={index}>
      <strong>{livro.titulo}</strong> - {livro.autor} ({livro.ano})
      <button onClick={() => excluirLivro(livro.codigo)}>Excluir</button>
    </li>
  );
};

export default LinhaLivro;


  return (
    <tr>
      <td>
        <strong>{livro.titulo}</strong>
      </td>
      <td>{nomeEditora || "Editora desconhecida"}</td>
      <td>{livro.autores.length > 0 ? livro.autores.join(", ") : "Sem autores"}</td>
      <td>
        <button className="btn btn-danger" onClick={() => excluir(livro.codigo)}>
          Excluir
        </button>
      </td>
    </tr>
  );
};

