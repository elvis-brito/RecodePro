import { Form, Button } from 'react-bootstrap';
import './Pedido.css';
import { useHistory } from 'react-router-dom';

export default function Pedido() {

    const history = useHistory();

    function calcular(){
        let n1 = document.getElementById('valor_produto').value
        let n2 = document.getElementById('quantidade').value
        let total = 0

        if(n1 === '' || n2 === ''){
            n1 = 0
            n2 = 0
        }

        total = parseFloat(n1)*parseFloat(n2);
        document.getElementById('valor_total').value = total;
    } 
    async function registrarPedido(evento) {
        evento.preventDefault();

        const formData = new FormData(evento.target);
        const url = 'http://localhost:5000/registrar-pedido';

       await fetch(url, {
            body: JSON.stringify(Object.fromEntries(formData)), 
            method: 'POST', 
            headers: new Headers({'content-type': 'application/json'})
        });
        var nome = document.getElementById('nome_cliente').value
        alert(nome + ", recebemos seu pedido! Obrigado por comprar conosco!")
        history.push("/");
    }
    return (
        <div className="mx-auto col-lg-">
            <Form id="formReset" onSubmit={registrarPedido}>
                <h4>Fazer Pedidos</h4>
                <div class="border border-info p-4 rounded">
                    <div class="form-group">
                        <label htmlFor="nome_cliente">Nome</label>
                        <input type="text" id="nome_cliente" name="nome_cliente" class="form-control" />
                    </div>
                    <div class="campo">
                        <label htmlFor="endereco">Endereço</label>
                        <input type="text" id="endereco" name="endereco" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label htmlFor="telefone">Telefone</label>
                        <input type="text" id="telefone" name="telefone" class="form-control" />
                    </div>
                </div>
                <div class="border border-info p-4 rounded my-2" >
                    <div class="form-group">
                        <label htmlFor="nome_do_produto">Produto</label>
                        <input type="text" id="nome_do_produto" name="nome_do_produto" required class="form-control" />
                    </div>
                    <div class="form-group">
                        <label htmlFor="valor_produto">Valor do Produto</label>
                        <input type="text" id="valor_produto" onChange={calcular} name="valor_produto" required class="form-control" />
                    </div>
                    <div class="form-group">
                        <label htmlFor="quantidade">Quantidade</label>
                        <input type="number" id="quantidade" name="quantidade" onChange={calcular} required class="form-control" />
                    </div>
                    <div class="form-group">
                        <label htmlFor="valor_total">Valor Total</label>
                        <input type="text" id="valor_total" name="valor_total" readOnly class="form-control" />
                    </div>
                </div>
                <Button variant="primary" type="submit">
                    Cadastrar
                </Button>
            </Form>
        </div>

    )
}
