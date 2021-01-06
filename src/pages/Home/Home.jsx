import { useEffect, useState } from 'react';
import data from '../../mock/data';
import './home.css';

export default function Home() {
  const [initialData, setInitialData] = useState('');
  const [companySelected, setCompanySelected] = useState('');
  const [name, setName] = useState('');
  const [document, setDocument] = useState('');
  const [date, setDate] = useState('');
  const header = ["Empresa", "Nome", "Tipo de Pessoa", "CPF ou CNPJ", "RG", "Data e Hora do Cadastro", "Data de Nascimento", "Telefone"];

  useEffect(() => {
    setInitialData(data);
  }, []);

  const resetFilters = () => {
    setCompanySelected('');
    setName('');
    setDocument('');
    setDate('');
  };

  return (
    <div className="main">
      <h1>Lista de Fornecedores</h1>
      {initialData !== '' && (
        <div className="filters">
          <label htmlFor="companies">
            Empresas:
            <select id="companies" value={companySelected} onChange={ ({ target }) => setCompanySelected(target.value) }>
              <option value="" hidden>Selecione a empresa</option>
              { initialData.companies.map(({ nomeFantasia, CNPJ }) => (
                <option key={ CNPJ } value={ nomeFantasia }>{ nomeFantasia }</option>
              )) }
            </select>
          </label>
          <label htmlFor="name">
            Nome:
            <input id="name" type="text" value={name} onChange={ ({ target }) => setName(target.value) } />
          </label>
          <label htmlFor="document">
            CPF/CNPJ:
            <input id="document" type="text" value={document} onChange={ ({ target }) => setDocument(target.value) } />
          </label>
          <label htmlFor="date">
            Data de Cadastro:
            <input id="date" type="text" value={date} onChange={ ({ target }) => setDate(target.value) } />
          </label>
          <button onClick={ resetFilters } type="button">Limpar Filtros</button>
        </div>
      )
      }
      {initialData !== '' && (
        <table border='1'>
          <thead>
            <tr>
              { header.map((head) => <th key={head}>{ head }</th>) }
            </tr>
          </thead>
          <tbody>
            { initialData.providers
              .filter(({ empresa }) => (
                companySelected !== '' ?  empresa === companySelected : true
              ))
              .filter(({ nome }) => (
                name !== '' ?  nome.toUpperCase().includes(name.toUpperCase()) : true
              ))
              .filter(({ CPFouCNPJ }) => (
                document !== '' ?  CPFouCNPJ.includes(document) : true
              ))
              .filter(({ dataHoraCadastro}) => (
                date !== '' ?  dataHoraCadastro.includes(date) : true
              ))
              .map((provides, index) => (
                <tr key={ index }>
                  {Object.values(provides).map((provide, index) => <td key={ index }>{ provide }</td>) }
                </tr>
              ))
            }
          </tbody>
        </table>
      ) }
    </div>
  );
}