<!DOCTYPE html>
<html lang="pt-br">

<head>
	<meta charset="utf-8">
	<link rel="stylesheet" href="lib/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="css/estilo.css">
	<link rel="stylesheet" href="css/font-awesome-4.7.0/css/font-awesome.min.css">

	<title>Home - Full stack</title>
</head>
<div class="cabecalho">
			<div class="linha">
				<div class="container">
				<a href="#" onclick="toggle()" class="lg"><i class="fa fa-user-o fa-2x"></i></a>
				<a href="#" class="btn2" id=""><i class="fa fa-shopping-cart fa-2x"></i></a>
			</div>
			</div>
</div>
<header id="menu">
            <div class="container">
                <nav class="navbar navbar-expand-lg">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#inicial" aria-controls="inicial" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fa fa-bars"></i>
                    </button>
                <div class="collapse navbar-collapse" id="inicial">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item"><a class="nav-link" href="index.php">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="sobre.php">Sobre</a></li>
                        <li class="nav-item"><a class="nav-link" href="loja.php">Loja</a></li>
                        <li class="nav-item"><a class="nav-link" href="pedido.php">Pedidos</a></li> 
                    </ul>
                </div>
                </nav>
            </div>
        </header>
			<div id="banner">
			</div>
			<div class="menu-acao">
				<a href="loja.php">Clique aqui!</a>
			</div>
			<div class="popup">
				<div class="popup-content">
					<a href="#" onclick="closed()"><i class="fa fa-times-circle-o" id="close"></i></a>
					<input type="text" placeholder="Usuário">
					<input type="text" placeholder="Senha">
					<a href="#" id="entrar">Login</a>
				</div>
			</div>
		</section>
		<footer>
  		<div class="container">
   			 <div class="row">
     			 <div class="col-md-12 text-center">
          		<p>Todos direitos reservados. Projeto Recode&lt;<small id="pro">Pro</small>&gt;</p>
      			</div>
   		 	</div>
  		</div>
		</footer>
		</div>
	<script src="lib/jquery/jquery-3.5.1.min.js"></script>
		<script src="lib/bootstrap/js/bootstrap.min.js"></script>
		<script type="text/javascript" src="js/javascript.js"></script>
</body>

</html>