<?php 
	include __DIR__ . '/vendor/autoload.php';

	$wonnovaClient = new \Wonnova\SDK\Connection\Client(new \Wonnova\SDK\Auth\Credentials(['key' => 'private key']));
	$usersList = $wonnovaClient->getUsers();
	error_reporting(E_ALL);
	ini_set('display_erors', 1);

    $uid = '';
    if(isset($_GET['id'])){

        $uid = $_GET['id'];

    }

	$client = new GuzzleHttp\Client();
	$res = $client->post('https://secure.wonnova.com/rest/auth', ['json' => ['key' => 'private key']]);
    $resData = json_decode($res->getBody(), true);
    $token = $resData['token'];


 ?>
<html>
<head>
	<title>API Calls</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
	<link rel="stylesheet" type="text/css" href="css/styles.css">
    <script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
    <script type="text/javascript" src="js/third.js"></script>
</head>
<body>
	<div class="container">

		<div class="row">

            <div class="col-md-6 margen" id="listaU">
                <span class="titles">Users</span>
                <table class="table table-condensed margen">
                    <tr>

                        <th>Full name</th>
                        <th>Username</th>
                        <th></th>

                    </tr>
                    <?php foreach ($usersList as $user){?>
                        <tr>

                            <td>
                                <?php echo $user->getUsername(); ?>
                            </td>

                            <td>
                                <?php echo $user->getFullName(); ?>
                            </td>

                            <td>
                                <button class="btn btn-primary" onclick="getInfo('<?php echo $user->getUserId(); ?>')">Info</button>
                            </td>

                        </tr>
                    <?php } //fin foreach?>
                </table>
            </div>
            <div class="col-md-6 margen">
                <span class="titles">Informacion</span><br>
                <?php
                    $userBadges = $wonnovaClient->getUserBadges($uid);
                    $user = $wonnovaClient->getUser($uid);
                    $userData = $wonnovaClient->getUserData($uid);
                    $res = $client->get('https://secure.wonnova.com/rest/users/'.$uid.'/last-updates?minCount=5',['headers' => ['Auth-Token' => $token]]);
                    $resData = json_decode($res->getBody(),true);
                    $lastUpdates = $resData['lastUpdates'];
                ?>
                <img src="<?php echo $user->getAvatar(); ?>" alt="" width="50" height="50">
                <p><strong>Nombre: </strong><?php echo $user->getUsername(); ?></p>
                <p><strong>Email: </strong><?php echo $user->getEmail(); ?></p>
                <p><strong>Direccion: </strong><?php echo $user->getAddress(); ?></p>
                <p><strong>Ciudad: </strong><?php echo $user->getCity(); ?></p>
                <p><strong>Puntos: </strong><?php echo $userData->getScore(); ?></p>
                <?php
                    if(!count($userBadges) > 0){
                        echo '<p class="titles">No badges</p>';
                    }else{
                        echo '<p class="titles">Badges</p>';
                        foreach($userBadges as $badge){
                            echo '<p><strong>'.$badge->getName().'</strong> | '.$badge->getDescription().'</p>';
                        }
                    }
                ?>
                <span class="titles">Last Updates (API REST)</span><br>
                <?php
                foreach($lastUpdates as $update){
                    echo '<p><strong>'.$update["date"].'</strong> | '.$update["text"].'</p>';
                }
                ?>
            </div>
		</div>
	</div>
</body>
</html>