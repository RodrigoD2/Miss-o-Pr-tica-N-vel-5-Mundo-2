import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

class Livro {
  constructor(  
    public codLivro: number,
    public codEditora: number,
    public titulo: string,
    public resumo: string,
    public autores: string[] = []
  ) {}
}

class Editora {
  constructor(public codEditora: number, public nome: string) {}
}

@Component({
  selector: 'app-livro-dados',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css'],
})
export class LivroDadosComponent implements OnInit {
  livro: Livro = new Livro(0, 0, '', '', []);
  autoresForm: string = '';
  editoras: Editora[] = [];

  constructor(private router: Router) {}

  // Método ngOnInit para carregar as editoras e fazer o log
  ngOnInit(): void {
    this.editoras = [
      new Editora(1, 'Editora A'),
      new Editora(2, 'Editora B'),
      new Editora(3, 'Editora C'),
    ];
    console.log('Editoras carregadas:', this.editoras); // Verifique se as editoras estão sendo carregadas no console
  }

  incluir = (): void => {
    this.livro.autores = this.autoresForm.split('\n');
    console.log(this.livro);
    this.router.navigateByUrl('/lista');
  };
}
