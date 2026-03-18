<?php
session_start();
header("Content-Type: application/json");
include "../database.php";

$method=$_SERVER["REQUEST_METHOD"];


if ($method === "GET") {
    $result = $conn->query("SELECT * FROM request");
    $requets = [];

    while ($row = $result->fetch_assoc()) {
        $requets[] = $row;
    }

    echo json_encode($requets);
    exit;
}

if ($method === "PUT") {
    $data = json_decode(file_get_contents("php://input"), true);

            $request_id       = $data["request_id"];
            $status           = $data["status"];

            $sql ="UPDATE request SET status='$status' WHERE request_id='$request_id'";
            $result=mysqli_query($conn,$sql);

            if($result){
                echo json_encode(["message" => "Request Updated"]);
                exit;
            }else {
                echo json_encode(["message" => "Error"]);
                exit;
            }
        
}


?>