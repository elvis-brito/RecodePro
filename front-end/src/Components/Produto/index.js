import './Produto.css';
import { Col } from 'react-bootstrap'

export default function Produto(props) {

	return (

			<figure className={props.categoria + "produto ml-3 lg-3 mx-auto"}>
				<img src={require(`./img/${props.imagem}`).default} alt="imagem do produto"></img>
				<h1>{props.nome}</h1>
				<p><strong>150</strong> pçs</p>
				<p>Valor: <span>{props.valor}</span></p>
				<a href="#">Adicionar ao carrinho</a>
			</figure>
	
	)
}
