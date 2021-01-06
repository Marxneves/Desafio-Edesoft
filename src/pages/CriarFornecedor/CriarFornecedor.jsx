import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import data from '../../mock/data';
import './criarFornecedor.css';

export default function CriarFornecedor() {
  const [companySelected, setCompanySelected] = useState('');
  const [name, setName] = useState('');
  const [person, setPerson] = useState('');
  const [register, setRegister] = useState('');
  const [document, setDocument] = useState('');
  const [bornDate, setBornDate] = useState('');
  const [telephone, setTelephone] = useState('');
  const [menor, setMenor] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (companySelected !== '') {
      const date = new Date();
      const company = data.companies.find(({ nomeFantasia }) => nomeFantasia === companySelected);
      const year = bornDate.substring(bornDate.length - 4);
      if (company.UF === "SP" && ((Number(date.getFullYear()) - Number(year)) < 18)) {
        setMenor(true);
      } else {
        setMenor(false);
      }
    }

  }, [bornDate,companySelected]);

  const saveProvider = () => {
    const date = new Date();

    data.providers.push(
      {
        empresa: companySelected,
        nome: name,
        tipoDePessoa: person,
        CPFouCNPJ: register,
        RG: document === '' ? '-' : document,
        dataHoraCadastro: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`,
        dataNascimento: bornDate === '' ? '-' : bornDate,
        telefone: telephone,
      },
    );

    history.push('/');
  };

  return (
    <main className="form-container">
      <h1>Cadastro de Fornecedor</h1>
      <form action="" className="form">
        <label htmlFor="companies">
          Empresa:
          <select required id="companies" value={ companySelected } onChange={ ({ target }) => setCompanySelected(target.value) }>
            <option value="" >Selecione a empresa</option>
            { data.companies.map(({ nomeFantasia, CNPJ }) => (
              <option key={ CNPJ } value={ nomeFantasia }>{ nomeFantasia }</option>
            )) }
          </select>
        </label>

        <label htmlFor="name">
          Nome:
        <input required id="name" value={ name } onChange={ ({ target }) => setName(target.value) } type="text" />
        </label>

        <label htmlFor="person">
          Tipo de Pessoa:
          <select value={ person } onChange={ ({ target }) => setPerson(target.value) } id="person">
            <option hidden value="">Selecione</option>
            <option value="Jurídica">Jurídica</option>
            <option value="Física">Física</option>
          </select>
        </label>

        <label htmlFor="cpfOrCnpj">
          CPF ou CNPJ:
        <input id="cpfOrCnpj" type="text" value={ register } onChange={ ({ target }) => setRegister(target.value) } />
        </label>

        { person === 'Física' && (
          <label htmlFor="document">
            RG:
            <input id="document" value={ document } onChange={ ({ target }) => setDocument(target.value) } type="text" />
          </label>)
        }

        { person === 'Física' && (
          <label htmlFor="bornDate">
            Data Nascimento:
            <input id="bornDate" type="text" value={ bornDate } onChange={ ({ target }) => setBornDate(target.value) } />
            {menor && <span>Menor de idade</span> }
          </label>)
        }
        <label htmlFor="telephone">
          Telefone:
        <input id="telephone" type="tel" value={ telephone } onChange={ ({ target }) => setTelephone(target.value) } />
        </label>

        <button disabled={menor} className="btn-create" onClick={ saveProvider } type="button">Cadastrar</button>
      </form>
    </main>
  );
}