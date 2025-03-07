import { Livro } from "../modelo/Livro";

export class ControleLivros {
    private livros: Livro[] = [
        { codigo: 1, codEditora: 1, titulo: "Use a cabeça: Java", resumo: "Livro sobre Java", autores: ["Kathy Sierra", "Bert Bates"] },
        { codigo: 2, codEditora: 2, titulo: "Java, como programar", resumo: "Livro sobre programação Java", autores: ["Paul Deitel", "Harvey M. Deitel"] },
        { codigo: 3, codEditora: 3, titulo: "Core Java for the impatient", resumo: "Livro sobre Java SE 9", autores: ["Cay S. Horstmann"] }
    ];

    obterLivros(): Livro[] {
        return this.livros;
    }

    incluir(livro: Livro): void {
        const novoCodigo = this.livros.length > 0 ? Math.max(...this.livros.map(l => l.codigo)) + 1 : 1;
        livro.codigo = novoCodigo;
        this.livros.push(livro);
    }

    excluir(codLivro: number): void {
        this.livros = this.livros.filter(l => l.codigo !== codLivro);
    }
}

export const controleLivros = new ControleLivros();
