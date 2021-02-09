import { Container, Row } from 'react-bootstrap'
//import Pedido from '../Components/Pedido'
import { lazy, Suspense} from 'react';

const Pedido = lazy(() => import ('../Components/Pedido'))

export default function Pedidos() {
    return (   
        <Container fluid>
            <Row>
                <Suspense fallback={<p>Carregando...</p>}>
                    <Pedido />  
                </Suspense>
            </Row>
        </Container>
    )
}