import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Editora } from '../editora';
import { Livro } from '../livro';

@Component({
  selector: 'app-livro-lista',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent implements OnInit {
  public editoras: Array<Editora> = [];
  public livros: Array<Livro> = [];

  livroEditando: Livro | null = null;

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService
  ) {}

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    this.livros = this.servLivros.obterLivros();
  }

  excluir = (codigo: number): void => {
    this.servLivros.excluir(codigo);
    this.livros = this.servLivros.obterLivros();
  }

  editar = (livro: Livro): void => {
    this.livroEditando = { ...livro };
  }

  salvarEdicao = (): void => {
    if (this.livroEditando) {
      this.servLivros.excluir(this.livroEditando.codigo);
      this.servLivros.incluir(this.livroEditando);
      this.livroEditando = null;
      this.livros = this.servLivros.obterLivros();
    }
  }

  obterNome = (codEditora: number): string => {
    const nome = this.servEditora.getNomeEditora(codEditora);
    return nome || 'Nome não disponível';
  }
}
