import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {
  return (
    <header className="top-bar">
      <nav>
        <ul className="list-nav">
          <Link to="/">Lista de Fornecedores</Link>
          <Link to="/fornecedor">Cadastrar Novo Fornecedor</Link>
          <Link to="/empresa">Cadastrar Nova Empresa</Link>
        </ul>
      </nav>
    </header>
  );
}