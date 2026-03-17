<?php 
session_start();
header("Content-Type: application/json");
include "database.php";

 if ($_SERVER["REQUEST_METHOD"] == "POST") {
   $data = json_decode(file_get_contents("php://input"), true);
         $email = $data['email'];
         $password = $data['password'];
        
         $result = mysqli_query($conn,"SELECT user_id,password FROM user WHERE email='$email' ");

         $user = mysqli_fetch_assoc($result);

           if ($user && password_verify($password, $user['password'])) {
            echo json_encode(["message" => "success","id"=>$user['user_id']]);
           }else{
            echo json_encode(["message" => "login failed."]);
           }
 }
 ?>