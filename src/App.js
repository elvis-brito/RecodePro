import Menu from './Components/Menu/index'
import Footer from './Components/Footer/index'
import Rotas from './rotas';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './Components/Menu/Menu.css';
import './Components/Footer/Footer.css'
import './App.css';

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
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
