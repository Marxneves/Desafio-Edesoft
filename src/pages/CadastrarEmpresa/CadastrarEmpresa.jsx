import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import data from '../../mock/data';

export default function CadastrarEmpresa() {
  const [uf, setUf] = useState('');
  const [name, setName] = useState('');
  const [cnpj, setCnpj] = useState('');
  const history = useHistory();

  const saveCompanie = () => {
    data.companies.push(
      {
        UF: uf,
        nomeFantasia: name,
        CNPJ: cnpj,
      },
    );

    history.push('/');
  };

  return (
    <main className="form-container">
      <h1>Cadastro de Empresa</h1>
      <form action="" className="form">
        <label htmlFor="uf">
          UF:
          <input id="uf" type="text" value={ uf } onChange={ ({ target }) => setUf(target.value) } />
        </label>

        <label htmlFor="name">
          Nome Fantasia:
        <input id="name" value={ name } onChange={ ({ target }) => setName(target.value) } type="text" />
        </label>

        <label htmlFor="Cnpj">
          CNPJ:
          <input id="Cnpj" type="text" value={ cnpj } onChange={ ({ target }) => setCnpj(target.value) } />
        </label>

        <button className="btn-create" onClick={ saveCompanie } type="button">Cadastrar</button>
      </form>
    </main>
  );
}
