import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import CriarEmpresa from './pages/CriarEmpresa';
import CriarFornecedor from './pages/CriarFornecedor/CriarFornecedor';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/empresa" component={ CriarEmpresa } />
        <Route path="/fornecedor" component={ CriarFornecedor } />
        <Route path="/" component={ Home } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
