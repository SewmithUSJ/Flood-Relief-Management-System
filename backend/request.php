<?php
session_start();
header("Content-Type: application/json");
include "database.php";

$method=$_SERVER["REQUEST_METHOD"];

if ($method === "POST") {
    $data = json_decode(file_get_contents("php://input"), true);
 
   
    if ($data["action"] == "view"  ) {
        $user_id = $data["user_id"];
        $sql = "SELECT * FROM request WHERE user_id='$user_id'";
        $result = mysqli_query($conn,$sql);
        $requets = [];

        while ($row = $result->fetch_assoc()) {
            $requets[] = $row;
        }

        echo json_encode($requets);
        exit;
    } else if ($data["action"] == "add"  ){

        $user_id          = $data["user_id"];
        $relief_type      = $data["relief_type"];
        $district         = $data["district"];
        $div_secretariat  = $data["div_secretariat"];
        $gn_division      = $data["gn_division"];
        $contact_name     = $data["contact_name"];
        $contact_number   = $data["contact_number"];
        $address          = $data["address"];
        $family_members   = $data["family_members"];
        $flood_severity   = $data["flood_severity"];
        $status           = $data["status"];
        $description      = $data["description"];

        $sql = "INSERT INTO request (user_id,relief_type,district,div_secretariat,gn_division,contact_name,contact_number,
        address,family_members,flood_severity,status,description	) VALUES
        ('$user_id','$relief_type','$district','$div_secretariat','$gn_division','$contact_name','$contact_number',
        '$address','$family_members','$flood_severity','$status','$description'	)";
        $stmt = mysqli_query($conn,$sql);
        
        if ($stmt) {
            echo json_encode(["status" => "Success","message" => "Request Added"]);
        } else {
            echo json_encode(["status" => "error",
            "message" => "Database error",
            "debug" => mysqli_error($conn)]);
        }
    }else {
        echo json_encode(["status" => "error",
        "message" => "Empty error"]);
    }
}
if ($method === "PUT") {
    $data = json_decode(file_get_contents("php://input"), true);

            $request_id       = $data["request_id"];
            $relief_type      = $data["relief_type"];
            $district         = $data["district"];
            $div_secretariat  = $data["div_secretariat"];
            $gn_division      = $data["gn_division"];
            $contact_name     = $data["name"];
            $contact_number   = $data["contact_number"];
            $address          = $data["address"];
            $family_members   = $data["family_members"];
            $flood_severity   = $data["flood_severity"];
            $description      = $data["description"];

            $sql ="UPDATE request SET relief_type='$relief_type',district='$district',div_secretariat='$div_secretariat',gn_division='$gn_division',contact_name='$contact_name',
            contact_number='$contact_number',address='$address',family_members='$family_members',flood_severity='$flood_severity',description='$description' WHERE request_id='$request_id'";
            $result=mysqli_query($conn,$sql);

            if($result){
                echo json_encode(["message" => "Request Updated"]);
                exit;
            }else {
                echo json_encode(["message" => "Error"]);
                exit;
            }
}
if ($method === "DELETE") {
    $data = json_decode(file_get_contents("php://input"), true);
    $id = $data["id"];

    $sql = "DELETE FROM request WHERE request_id='$id'";
    $result=mysqli_query($conn,$sql);

    if($result){
        echo json_encode(["message" => "Request Deleted"]);
        exit;
    }else {
        echo json_encode(["message" => "Error"]);
        exit;
    }
}

if ($method === "GET") {
    $result = $conn->query("SELECT * FROM request");
    $requets = [];

    while ($row = $result->fetch_assoc()) {
        $requets[] = $row;
    }

    echo json_encode($requets);
    exit;
}
?>