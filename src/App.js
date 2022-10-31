import './styles.css';
import Footer from './components/Footer.js';
import Aside from './components/Aside.js';

function App() {

  const countryURL = "https://amazon-api.sellead.com/country";
  const cityURL = "https://amazon-api.sellead.com/city";

  // Requisição para obter os dados da api de países.
  fetch(countryURL)
    .then(response => response.json())
    .then(data => {
      data.forEach(create)

      function create(value) {
        let option = document.createElement("option");
        option.innerHTML = value.name;
        document.getElementById("pais").appendChild(option);
      }
    })

  // Requisição para obter os dados da api de cidades.  
  fetch(cityURL)
    .then(response => response.json())
    .then(data => {
      data.forEach(create)

      function create(value) {
        let option = document.createElement("option");
        option.innerHTML = value.name;
        document.getElementById("cidade").appendChild(option);
      }
    })

  // Criação das máscaras e da entrada de apenas números para os formulários. 

  function mascaraTel() {
    let element = document.getElementById("tel");
    let i = element.value.length;
    let valor = element.value; 
    let x = 0;
    x = valor[i - 1].match(/[^0-9]/);

    if (x) {
      let novoValor = valor.substring(0, (i-1));
      document.getElementById("tel").value = novoValor;
    } else {
      
      if(i === 1) {
        let novoValor = "(" + valor;
        document.getElementById("tel").value = novoValor;
      }
      if(i === 3) {
        let novoValor = valor + ") ";
        document.getElementById("tel").value = novoValor;
      }
      if(i === 10) {
        let novoValor = valor + "-";
        document.getElementById("tel").value = novoValor;
      } 
  }
  }
    
  function mascaraCPF() {
    let element = document.getElementById("cpf");
    let i = element.value.length;
    let valor = element.value; 
    let x = 0;
    x = valor[i - 1].match(/[^0-9]/);
    
    if (x) {
      let novoValor = valor.substring(0, (i-1));
      document.getElementById("cpf").value = novoValor;
    } else {

      if(i === 3 || i === 7) {
      let novoValor = valor + ".";
      document.getElementById("cpf").value = novoValor;
      }
      if(i === 11) {
        let novoValor = valor + "-";
      document.getElementById("cpf").value = novoValor;
      }

    }
  }

  return (
    <div>

      <nav>
        <a className="nav-links" href="http://localhost:3000/">Home</a>
        <a className="nav-links" href="http://localhost:3000/">Página 1</a>
        <a className="nav-links" href="http://localhost:3000/">Página 2</a>
        <a className="nav-links" href="http://localhost:3000/">Página 3</a>
        <a className="last-nav-links" href="http://localhost:3000/">Página 4</a>
      </nav>
      <header>
        <h1 className="title">Site de viagens</h1>

        <p>Com disciplina e determinação, todo sonho pode ser realizado.</p>

      </header>

      <div className="principal">

        <div className="form">
          <div className="form-header">
            <h1>Digite suas informações e escolha <br></br> o seu destino</h1>
          </div>
          <form action="#">
            <div className="input-group">
              <div className="user-info">
                <label htmlFor="name">Nome completo*</label> <br></br>
                <input type="text" id="nome" name="nome" required></input> <br></br><br></br>
                <label htmlFor="email">Email*</label> <br></br>
                <input type="email" id="email" name="email" placeholder="exemplo@gmail.com" required></input> <br></br><br></br>
                <label htmlFor="tel">Telefone*</label> <br></br>
                <input type="tel" id="tel" name="tel" maxLength="15" 
                  placeholder="Apenas números são permitidos" required onChange={mascaraTel}></input> <br></br><br></br>
                <label htmlFor="cpf">CPF*</label> <br></br>
                <input type="tel" id="cpf" name="cpf" maxLength="14" 
                  placeholder="Apenas números são permitidos" required onChange={mascaraCPF}></input> <br></br><br></br>
              </div>

              <div className="api-info">
                <label htmlFor="pais">País*</label> <br></br>
                <select id="pais" name="pais" required>

                </select> <br></br><br></br>

                <label htmlFor="cidade">Cidade*</label><br></br>
                <select id="cidade" name="cidade" required>

                </select> <br></br><br></br>

                <input type="submit" name="submit" id="button" value="Enviar"></input>
              </div>

            </div>
          </form>
        </div>

        <Aside />
      </div>

      <Footer />
    </div>
  );
}

export default App;
