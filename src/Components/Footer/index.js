import { Navbar, Nav } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import './Footer.css'

function BaseFooter(props) {
    const { location } = props

    return (
        <div class="rodape">
            <p>Todos direitos reservados. Projeto Recode&lt;<small id="pro">Pro</small>&gt;</p>
        </div>
    )
}

const Footer = withRouter(BaseFooter);

export default Footer;