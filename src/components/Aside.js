import '../styles.css';
import cristo from '../img/cristo.jpg';
import convento from '../img/convento.jpg';
import galinhas from '../img/porto-de-galinhas.jpg';
import camburi from '../img/camburi.jpg';

function Aside() {

    return (
        <aside>
        <div className="img-container">
          <img src={cristo} alt="Crito Redentor - Rio de Janeiro/RJ"></img>
          <div className="img-description">Crito Redentor - Rio de Janeiro/RJ</div>
        </div>

        <div className="img-container">
          <img src={convento} alt="Convento da Penha - Vila Velha/ES"></img>
          <div className="img-description">Convento da Penha - Vila Velha/ES</div>
        </div>

        <div className="img-container">
          <img src={galinhas} alt="Porto de Galinhas - Recife/PE"></img>
          <div className="img-description">Porto de Galinhas - Recife/PE</div>
        </div>

        <div className="img-container">
          <img src={camburi} alt="Praia de Cambur - Vitória/ES"></img>
          <div className="img-description">Praia de Cambur - Vitória/ES</div>
        </div>
      </aside>
    )
}

export default Aside;