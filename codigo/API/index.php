<?php
 require_once('conet.php');
 $con = new Conexion();
// ejemplo de json
// {
    // 	"nombre": "alex",
    // 	"apellidos": "pered",
    // 	"nombreUsu": "alex2001",
    // 	"correo": "alejandro",
    // 	"pass": "alex",
    // 	"altura": "190",
    // 	"peso": "90"
    // 	"fechNac": "2023-01-27",
    // 	"listaActividades": "senderismo,pozas",
// }
<<<<<<< HEAD
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    try {
        $sql = "SELECT * FROM usuario WHERE 1 ";
        if(isset($_GET['nombreUsu'])){
            $nomUsu = $_GET['nombreUsu'];
            $sql .= "AND nomUsu = '$nomUsu'";
            // echo "<p>$sql</p>";
        }
        if(isset($_GET['nombreUsu']) && isset($_GET['pass'])){
            $nomUsu = $_GET['nombreUsu'];
            $pass = $_GET['pass'];
            $sql .= "AND nomUsu = '$nomUsu' AND password = '$pass'";
            // echo "<p>$sql</p>";
        }
        $result = $con->query($sql);
        $usuario = $result->fetch_all(MYSQLI_ASSOC);
        header("HTTP/1.1 200 OK");
        echo json_encode($usuario);
    } catch (mysqli_sql_exception $e) {
        header("HTTP/1.1 404 Not Found");
    }
    exit;
}
if($_SERVER['REQUEST_METHOD'] == 'POST'){
   $json = file_get_contents('php://input');
   if(isset($json)){
    $user = json_decode($json);
   //creamos las variables de los datos de los usarios
    $nombre = $user->nombre;
    $apellidos = $user->apellidos;
    $nombreUsu = $user->nombre;
    $correo = $user->correo;
    $pass = $user->pass;
    $altura = $user->altura;
    $peso = $user->peso;
    $fechNac = $user->fechNac;
    $listaActividades = $user->listaActividades;
    try{
        $sql = "INSERT INTO `usuario` (`id`, `nombre`, `apellido`, `nomUsu`,`password`,
         `correo`, `altura`, `peso`, `fechNac`, `listaActividades`)
        VALUES (NULL, '$nombre', '$apellidos', '$nombreUsu', '$pass',
        '$correo', '$altura', '$peso', '$fechNac', '$listaActividades')";
        $con->query($sql);
        header("HTTP/1.1 201 Created");
        echo json_encode($con->insert_id);
    }catch(mysqli_sql_exception){
        header("HTTP/1.1 400 Bad Request");
    }
=======
if($_SERVER['REQUEST_METHOD'] == 'POST'){
   $json = file_get_contents('php://input');
   if(isset($json)){
    $user = json_decode($json);
   //creamos las variables de los datos de los usarios
    $nombre = $user->nombre;
    $apellidos = $user->apellidos;
    $nombreUsu = $user->nombre;
    $correo = $user->correo;
    $pass = $user->pass;
    $altura = $user->altura;
    $peso = $user->peso;
    $fechNac = $user->fechNac;
    $listaActividades = $user->listaActividades;
    try{
        $sql = "INSERT INTO `usuario` (`id`, `nombre`, `apellido`, `nomUsu`,`password`,
         `correo`, `altura`, `peso`, `fechNac`, `listaActividades`)
        VALUES (NULL, '$nombre', '$apellidos', '$nombreUsu', '$pass',
        '$correo', '$altura', '$peso', '$fechNac', '$listaActividades')";
        $con->query($sql);
        header("HTTP/1.1 201 Created");
        echo json_encode($con->insert_id);
    }catch(mysqli_sql_exception){
        header("HTTP/1.1 400 Bad Request");
    }
>>>>>>> 1b61558b602a67955baaad462e1184abcf01582d
  }else {
    header("HTTP/1.1 400 Bad Request");
 }
}else{
    echo "esto no es post";
}
    
?>