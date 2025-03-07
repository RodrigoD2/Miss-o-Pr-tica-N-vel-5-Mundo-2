export interface LivroMongo {
  _id: string;
  titulo: string;
  autor: string;
  ano: number;
}
getLivros(): Observable<LivroMongo[]> {
  return this.http.get<LivroMongo[]>(this.baseURL);
}

adicionarLivro(livro: Livro): Observable<LivroMongo> {
  return this.http.post<LivroMongo>(this.baseURL, livro);
}
