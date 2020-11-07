<?php
		include('conexaobd.php');
        include_once('header.html');
        include_once('menu.html');
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
            
            <section>
            <div class="container my-5">
            <h1>Faça seu Pedido</h1> <br> <br>
                <form action="" method="post">
                <div class="border border-info p-4 rounded">
                    <div class="form-group">
                                <label for="nome_cliente">Nome</label>
                                <input type="text" id="nome_cliente" name="nome_cliente" value="" class="form-control">
                            </div>
                            <div class="campo">
                            <label for="endereco">Endereço</label>
                            <input type="text" id="endereco" name="endereco" value="" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="telefone">Telefone</label>
                            <input type="text" id="telefone" name="telefone" value="" class="form-control">
                        </div>
                        </div>
                      <div class="row"></div>
                        <div class="border border-info p-4 rounded my-2">
                        <div class="form-group">
                        <label for="nome_do_produto">Produto</label>
                        <input type="text" id="nome_do_produto" name="nome_do_produto" required class="form-control" />
                        </div>
                        <div class="form-group">
                        <label for="valor_produto">Valor do Produto</label>
                        <input type="text" id="valor_produto" name="valor_produto" required  class="form-control"/>
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
                <div class="my-5">
                <button class= "botao"  type="submit" name="submit">Enviar</button> 
                </div>                       
                </form>
    </div>
            </section>
        <?php
        include_once('footer.html')
        ?>