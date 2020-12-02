import './Produto.css';

export	default function Produto (props) {
    return (
		<figure className={props.categoria + "produto ml-3"}>
		<img src={require(`./img/${props.imagem}`).default} alt="Imagem de Produto"></img>
	<h1>{props.nome}</h1>
		<p><strong>{props.pecas}</strong> pçs</p>
		<p>Valor: <span>{props.valor}</span></p>
		<a href="#">Adicionar ao carrinho</a>
		</figure> 
    )
}
