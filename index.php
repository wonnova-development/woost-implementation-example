
<!DOCTYPE html>
<html lang="es">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Gestion - Iniciar sesion</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
    <script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
    <script type="text/javascript" src="js/login.js"></script>
    
</head>

<body>

    

            <div class="container">

                <article class="lienzo">
                    <div class="row text-center enca">
                        <h1><span class="glyphicon glyphicon-user" aria-hidden="true"></span> Login</h1>
                    </div>
                    <form action="index.php" method="post" id="login">

                        <div id="loginDiv"></div>
                        
                        <div class="form-group">
                            <label for="nombre">Nombre</label>
                            <input type="text" class="form-control" name="nombre" id="nombre" placeholder="Nombre" value="<?php echo $nombre;?>">
                        </div>
                        <div class="form-group">
                            <label for="pass">Contrase&ntilde;a</label>
                            <input type="password" class="form-control" name="pass" id="pass" placeholder="Password" value="<?php echo $pass;?>">
                        </div>
                        <button type="submit" class="btn btn-primary" name="entrar">Entrar</button>
                    </form>
                </article>

            </div>

            
</body>

</html>
