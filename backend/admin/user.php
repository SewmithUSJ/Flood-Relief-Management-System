<?php
session_start();
header("Content-Type: application/json");
include "../database.php";

$method=$_SERVER["REQUEST_METHOD"];


if ($method === "GET") {
    $result = $conn->query("SELECT * FROM user");
    $users = [];

    while ($row = $result->fetch_assoc()) {
        $users[] = $row;
    }

    echo json_encode($users);
    exit;
}

if ($method === "DELETE") {
    $data = json_decode(file_get_contents("php://input"), true);
    $id = $data["id"];

    $sql = "DELETE FROM user WHERE user_id='$id'";
    $result=mysqli_query($conn,$sql);

    if($result){
        echo json_encode(["message" => "Request Deleted"]);
        exit;
    }else {
        echo json_encode(["message" => "Error"]);
        exit;
    }
}
?>