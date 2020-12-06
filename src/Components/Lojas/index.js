import Rio from './img/rio-de-janeiro.jpg'
import SaoPaulo from './img/sao-paulo.jpg'
import Rgdn from './img/rio-grande-sul.jpg'
import './Lojas.css';


export default function Lojas(props) {
    return (
        <section class="container">
            <div class="row">

                <div class="card my-2 mx-auto loja">
                    <img class="card-img-top" src={Rio} alt="Imagem de capa do card"></img>
                    <div class="card-body">
                        <h3 class="card-title">Rio de Janeiro</h3>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Avenida Brasil, 5.555</li>
                            <li class="list-group-item">25 º andar</li>
                            <li class="list-group-item">Centro</li>
                            <li class="list-group-item">(21) 2222-2222</li>
                        </ul>
                    </div>
                </div>
                <div class="card my-2 mx-auto loja">
                    <img class="card-img-top" src={SaoPaulo} alt="Imagem de capa do card"></img>
                    <div class="card-body">
                        <h4 class="card-title">São Paulo</h4>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Avenida Aricanduva, 5.555</li>
                            <li class="list-group-item">Loja 54</li>
                            <li class="list-group-item">Jardim Aricanduva</li>
                            <li class="list-group-item">(21) 2222-2222</li>
                        </ul>
                    </div>
                </div>

                <div class="card my-2 mx-auto loja">
                    <img class="card-img-top" src={Rgdn} alt="Imagem de capa do card"></img>
                    <div class="card-body">
                        <h4 class="card-title">Rio Grande Do Norte</h4>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Avenida Alguma Coisa, Natal</li>
                            <li class="list-group-item">10 &ordm; andar</li>
                            <li class="list-group-item">Centro</li>
                            <li class="list-group-item">(21) 2222-2222</li>
                        </ul>
                    </div>
                </div>
            </div >
        </section >
    )
}