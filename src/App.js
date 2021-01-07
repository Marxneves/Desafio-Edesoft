import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Empresas from './pages/Empresas/Empresas';
import CadastrarFornecedor from './pages/CadastrarFornecedor/CadastrarFornecedor';
import CadastrarEmpresa from './pages/CadastrarEmpresa/CadastrarEmpresa';
import ListarEmpresas from './pages/ListarEmpresas/ListarEmpresas';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/empresa" component={ Empresas } />
        <Route path="/fornecedor" component={ CadastrarFornecedor } />
        <Route path="/listarEmpresas" component={ ListarEmpresas } />
        <Route path="/cadastarEmpresa" component={ CadastrarEmpresa } />
        <Route path="/" component={ Home } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
