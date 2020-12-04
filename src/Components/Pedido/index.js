import { Form, Button } from 'react-bootstrap';
import './Pedido.css';

export default function Produto() {
    async function registrarPedido(evento) {
        evento.preventDefault();

        let formData = new FormData(evento.target);
        const url = 'http://localhost/recode/back-end/api/pedidos-guarda.php';

        fetch(url, {
            method: "POST",
            body: formData
        }).then((response) => console.log(response.json())).then((dados) => {

            console.log("euu", "dados");
        });
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
                        <input type="text" id="valor_produto" name="valor_produto" required class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="quantidade">Quantidade</label>
                        <input type="number" id="quantidade" name="quantidade" required class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="valor_total">Valor Total</label>
                        <input type="text" id="valor_total" name="valor_total" required class="form-control" />
                    </div>
                </div>
                <Button variant="primary" type="submit">
                    Cadastrar
                </Button>
            </Form>
        </div>

    )
}
