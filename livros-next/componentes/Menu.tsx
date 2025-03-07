import Link from "next/link";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const Menu: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" href="/">
          Loja Next
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" href="/">
                Página Inicial
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/LivroLista">
                Catálogo de Livros
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/LivroDados">
                Adicionar Livro
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
