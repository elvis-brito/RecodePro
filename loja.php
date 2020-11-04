	<?php
		include_once('conexaobd.php');
		include_once('header.html');
    ?>	
			<section class="produtos">
				<div class="container">
			<div class="row">
				<?php
				$sql = "select * from mydb.produtos";
				$result = $conn->query($sql);
				
				if ($result->num_rows > 0){
					while ($rows = $result->fetch_assoc()){
			?>
			<div class="produto" id="<?php echo $rows["categoria"]; ?>">
					<img src="<?php echo $rows["imagem"]; ?>" alt=" " onclick="destaque(this)">
					<h1><?php echo $rows["nome"]; ?></h1>
					<p>Valor: <span>R$<?php echo $rows["preco"]; ?></span></p>
					<a href="#">Adicionar ao carrinho</a>
				</div>
			<?php
					}
				}else{
					echo "Nenhum produto cadastrado!";
				}
			?>
			</div>
			</div>
			</section>
			<?php
			include_once('footer.html');
			?>