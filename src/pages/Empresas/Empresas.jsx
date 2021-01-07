import { Link } from 'react-router-dom';
import './empresas.css';

export default function CriarEmpresa() {
  return (
    <div className="links-container">
      <Link to="/listarEmpresas"><button type="button">Ver Empresas</button></Link>
      <Link to="/cadastarEmpresa"><button type="button">Cadastrar Empresa</button></Link>
    </div>
  );
}