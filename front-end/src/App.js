import Menu from './Components/Menu/index'
//import Footer from './Components/Footer/index'
import Rotas from './rotas';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './Components/Menu/Menu.css';
import './Components/Footer/Footer.css'
import './App.css';
import {lazy, Suspense} from 'react';

const Footer = lazy(() => import('./Components/Footer/index'));

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
            <Menu />
        </header>
        <main>
          <Container fluid>
            <Rotas />
          </Container>
        </main>
        <footer>
        <Suspense fallback={<p>Carregando ...</p>}>
          <Footer />
        </Suspense>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
