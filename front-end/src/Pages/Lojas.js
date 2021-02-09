//import Lojas from '../Components/Lojas';
import { Container, Row } from 'react-bootstrap';

import {lazy, Suspense} from 'react';

const Lojas = lazy(() => import('../Components/Lojas'));

export default function Loja() {
    return (
        <Container>
            <Row>
            <Suspense fallback={<p>Carregando ...</p>}>
                <Lojas />
            </Suspense>
            </Row>
        </Container>
    )
}