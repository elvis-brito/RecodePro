import { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Produto from '../Components/Produto'

export default function Produtos (){
    const [produtos, setProdutos] = useState([]);

    useEffect(async () => {
        const resposta = await fetch ("http://localhost:5000/produtos");
        const dados = await resposta.json();
        setProdutos(dados);
    }, [])
    return(
        <Container>
            <Row>
                {produtos && produtos.map(item => <Produto imagem = {item.imagem} nome = {item.nome}  valor = {item.preco}/>)}
            </Row>
        </Container>

        
    )
}