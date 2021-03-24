import Rio from './img/rio-de-janeiro.jpg'
import SaoPaulo from './img/sao-paulo.jpg'
import Rgdn from './img/rio-grande-sul.jpg'
import './Lojas.css';


export default function Lojas(props) {
    return (
        <section className="container corpo">
            <div className="row">

                <div className="card my-2 mx-auto loja">
                    <img className="card-img-top" src={Rio} alt="Imagem de capa do card"></img>
                    <div className="card-body">
                        <h3 className="card-title">Rio de Janeiro</h3>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Avenida Brasil, 5.555</li>
                            <li className="list-group-item">25 º andar</li>
                            <li className="list-group-item">Centro</li>
                            <li className="list-group-item">(21) 2222-2222</li>
                        </ul>
                    </div>
                </div>
                <div className="card my-2 mx-auto loja">
                    <img className="card-img-top" src={SaoPaulo} alt="Imagem de capa do card"></img>
                    <div className="card-body">
                        <h4 className="card-title">São Paulo</h4>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Avenida Aricanduva, 5.555</li>
                            <li className="list-group-item">Loja 54</li>
                            <li className="list-group-item">Jardim Aricanduva</li>
                            <li className="list-group-item">(21) 2222-2222</li>
                        </ul>
                    </div>
                </div>

                <div className="card my-2 mx-auto loja">
                    <img className="card-img-top" src={Rgdn} alt="Imagem de capa do card"></img>
                    <div className="card-body">
                        <h4 className="card-title">Rio Grande Do Norte</h4>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Avenida Alguma Coisa, Natal</li>
                            <li className="list-group-item">10 &ordm; andar</li>
                            <li className="list-group-item">Centro</li>
                            <li className="list-group-item">(21) 2222-2222</li>
                        </ul>
                    </div>
                </div>
            </div >
        </section >
    )
}