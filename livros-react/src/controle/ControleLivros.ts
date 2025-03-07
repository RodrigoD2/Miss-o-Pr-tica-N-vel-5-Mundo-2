import { Livro } from "../modelo/Livro"; 
import ControleLivros from '../modelo/Livro';  

const controleLivros = new ControleLivros();

const baseURL = "http://localhost:3030/livros";

export interface LivroMongo {
  _id: string;  
  titulo: string;
  autor: string;
  ano: number;
}

export class ControleLivros {
  async obterLivros(): Promise<Livro[]> {
    const resposta = await fetch(baseURL, { method: "GET" });
    const dados: LivroMongo[] = await resposta.json();
    return dados.map((livroMongo) =>
      new Livro(
        livroMongo._id,
        0,
        livroMongo.titulo,
        "",
        [livroMongo.autor]
      )
    );
  }

  async incluir(livro: Livro): Promise<boolean> {
    const livroMongo: LivroMongo = {
      _id: "",
      titulo: livro.titulo,
      autor: livro.autores[0],
      ano: 2025,
    };

    const resposta = await fetch(baseURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(livroMongo),
    });

    return resposta.ok;
  }

  async excluir(codigo: string): Promise<boolean> {
    const resposta = await fetch(`${baseURL}/${codigo}`, { method: "DELETE" });
    return resposta.ok;
  }
}
