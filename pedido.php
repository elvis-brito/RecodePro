<?php
		include_once('conexaobd.php');
		include_once('header.html');
    ?>	
        <?php
        if(isset($_POST['nome_cliente'])){
        $nome_cliente = $_POST['nome_cliente'];
        $endereco = $_POST['endereco'];
        $telefone = $_POST['telefone'];
        $nome_do_produto = $_POST['nome_do_produto'];
        $valor_produto = $_POST['valor_produto'];
        $quantidade = $_POST['quantidade'];
        $valor_total = $_POST['valor_total'];

        $sql = "insert into pedidos (nome_cliente, endereco, telefone, nome_do_produto, valor_produto, quantidade, valor_total)
        values ('$nome_cliente', '$endereco', '$telefone', '$nome_do_produto', '$valor_produto', '$quantidade', '$valor_total')";
        $result = $conn->query($sql);
      }
     ?>
            <h1>Faça seu Pedido</h1> <br> <br>
            <section>
            <div class="container">
                <form action="" method="post">
                    <div class="campo">
                                <label for="nome_cliente">Nome</label>
                                <input type="text" id="nome_cliente" name="nome_cliente" style="width: 10em" value="">
                            </div>
                            <div class="campo">
                            <label for="endereco">Endereço</label>
                            <input type="text" id="endereco" name="endereco" style="width: 20em" value="">
                        </div>
                        <div class="campo">
                            <label for="telefone">Telefone</label>
                            <input type="text" id="telefone" name="telefone" style="width: 10em" value="">
                        </div>
                        <div class="campo">
                        <label for="nome_do_produto">Produto</label>
                        <input type="text" id="nome_do_produto" name="nome_do_produto" class="input" required />
                        </div>
                        <div class="campo">
                        <label for="valor_produto">Valor do Produto</label>
                        <input type="text" id="valor_produto" name="valor_produto" class="input" required />
                        </div>
                        <div class="campo">
                        <label for="quantidade">Quantidade</label>
                        <input type="number" id="quantidade" name="quantidade" class="input" required />
                        </div>
                        <div class="campo">
                        <label for="valor_total">Valor Total</label>
                        <input type="text" id="valor_total" name="valor_total" class="input" required />
                        </div>
                        <button class= "botao" type="submit" name="submit">Enviar</button>
                </form>
    </div>
            </section>
        <?php
        include_once('footer.html')
        ?>