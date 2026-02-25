<?php
session_start();
header("Content-Type: application/json");
include "database.php";

$method=$_SERVER["REQUEST_METHOD"];

if ($method === "POST") {
    $data = json_decode(file_get_contents("php://input"), true);
 
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
	

    $sql = "INSERT INTO request (user_id,relief_type,district,div_secretariat,gn_division,contact_name,contact_number,address,family_members,flood_severity,status,description	) VALUES
     ('$user_id','$relief_type','$district','$div_secretariat','$gn_division','$contact_name','$contact_number','$address','$family_members','$flood_severity','$status','$description'	)";
    $stmt = mysqli_query($conn,$sql);
    
    if ($stmt) {
        echo json_encode(["status" => "Success","message" => "Request Added"]);
    } else {
        echo json_encode(["status" => "error",
        "message" => "Database error",
        "debug" => mysqli_error($conn)]);
    }
}
?>