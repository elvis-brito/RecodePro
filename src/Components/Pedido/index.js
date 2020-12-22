import { Form, Button } from 'react-bootstrap';
import './Pedido.css';
import { useHistory } from 'react-router-dom';

export default function Produto() {

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

        let formData = new FormData(evento.target);
        const url = 'http://webservicejedi.ddns.net/back-end/api/pedidos-guarda.php';

        fetch(url, {
            method: "POST", 
            body: formData
        }).then((response) => console.log(response.json())).then((dados) => {

            console.log("euu", "dados");
        });
        var nome = document.getElementById('nome_cliente').value
        alert(nome + ", recebemos seu pedido! Obrigado por comprar conosco!")
        history.push("/");
    }
    return (
        <div className="mx-auto col-lg-8">
            <Form id="formReset" onSubmit={registrarPedido}>
                <h4>Fazer Pedidos</h4>
                <div class="border border-info p-4 rounded">
                    <div class="form-group">
                        <label for="nome_cliente">Nome</label>
                        <input type="text" id="nome_cliente" name="nome_cliente" class="form-control" />
                    </div>
                    <div class="campo">
                        <label for="endereco">Endereço</label>
                        <input type="text" id="endereco" name="endereco" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="telefone">Telefone</label>
                        <input type="text" id="telefone" name="telefone" class="form-control" />
                    </div>
                </div>
                <div class="border border-info p-4 rounded my-2" >
                    <div class="form-group">
                        <label for="nome_do_produto">Produto</label>
                        <input type="text" id="nome_do_produto" name="nome_do_produto" required class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="valor_produto">Valor do Produto</label>
                        <input type="text" id="valor_produto" onChange={calcular} name="valor_produto" required class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="quantidade">Quantidade</label>
                        <input type="number" id="quantidade" name="quantidade" onChange={calcular} required class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="valor_total">Valor Total</label>
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
