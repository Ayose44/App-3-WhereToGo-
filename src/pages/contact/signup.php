<?php
    header("Content-Type: application/json; charset=UTF-8");
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST');

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $email = $request->email;
    $password = $request->password;
    $username = $request->username;
    $edad = $request->edad;

    $con = mysql_connect("https://cuneate-beacon.000webhostapp.com/","id529417_root",'paco1234') or die ("Failed to connect to MySQL: " . mysql_error());;
    mysql_select_db('myDb', $con);

    $qry_em = 'select count(*) as cnt from users where email="' . $email . '"';
    $qry_res = mysql_query($qry_em);
    $res = mysql_fetch_assoc($qry_res);

    if($res['cnt']==0){
    $qry = 'INSERT INTO Usu (nom,pass,email,edad) values ("' . $username . '","' . $password . '","' . $email . '","' . $edad . '")';
    $qry_res = mysql_query($qry);  
        if ($qry_res) {
            echo "1";
        } else {
            echo "2";;
        }
    }
    else
    {
        echo "0";
    }
?>