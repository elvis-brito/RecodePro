import { withRouter } from 'react-router-dom';
import './Footer.css'

function BaseFooter() {
    return (
        <div className="rodape">
            <p>Todos direitos reservados. Projeto Recode&lt;<span id="pro">Pro</span>&gt;</p>
        </div>
    )
}

const Footer = withRouter(BaseFooter);

export default Footer;