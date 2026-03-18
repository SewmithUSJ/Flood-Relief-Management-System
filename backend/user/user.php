<?php
session_start();
header("Content-Type: application/json");
include "../database.php";

$method=$_SERVER["REQUEST_METHOD"];

if ($method === "POST") {
        $data = json_decode(file_get_contents("php://input"), true);

         $name = $data['name'];
         $email = $data['email'];
         $password = $data['password'];
         $NIC = $data['NIC'];

         if(  $name == "" || $password == "" || $email == "" || $NIC == ""){
            echo json_encode (["All required fields must be filled."]);
            exit();
         }

         $hashed_password = password_hash($password, PASSWORD_DEFAULT);

         $sql = "INSERT INTO user(name,email,password,NIC)
            VALUES ('$name', '$email', '$hashed_password', '$NIC')";

            $result = mysqli_query($conn, $sql);

            if ($result){
                
                echo json_encode(["message" => "success"]);
            } else {
                
                echo json_encode(["message" => "failed.","error" => mysqli_error($conn)]);
            }

    }
?>