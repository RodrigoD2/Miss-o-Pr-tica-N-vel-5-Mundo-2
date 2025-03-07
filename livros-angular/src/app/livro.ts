export class Livro {
  codigo: string;  // Alterando tipo para string
  titulo: string;
  autor: string;
  ano: number;

  constructor(titulo: string, autor: string, ano: number, codigo: string = '') {
    this.titulo = titulo;
    this.autor = autor;
    this.ano = ano;
    this.codigo = codigo;  // Inicializando código com texto vazio
  }
}
