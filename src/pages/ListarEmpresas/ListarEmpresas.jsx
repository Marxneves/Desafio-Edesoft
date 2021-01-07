import data from '../../mock/data';

export default function ListarEmpresas() {
  const header = ["UF", "Nome Fantasia","CNPJ"];
  
  return (
    <main className="form-container">
      <h1>Lista de Empresas</h1>
      <table border='1'>
          <thead>
            <tr>
              { header.map((head) => <th key={ head }>{ head }</th>) }
            </tr>
          </thead>
          <tbody>
            { data.companies.map((companie, index) => (
                <tr key={ index }>
                  {Object.values(companie).map((item, index) => <td key={ index }>{ item }</td>) }
                </tr>
              ))
            }
          </tbody>
        </table>
    </main>
  );
}
