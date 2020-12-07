import { Switch, Route } from 'react-router-dom';
import  Produtos from './Pages/Produtos'
import  Pedidos from './Pages/Pedidos'
import  Lojas from './Pages/Lojas'
import Home from './Pages/Home'
import Sobre from './Pages/Sobre'

function Rotas () {
    return (
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/sobre" component={ Sobre } />
            <Route exact path="/pedidos" component={ Pedidos } />
            <Route exact path="/produtos" component={ Produtos } />
            <Route exact path="/lojas" component={ Lojas } />
        </Switch>
    )
}

export default Rotas;