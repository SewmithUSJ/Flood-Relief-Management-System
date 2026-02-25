//URL variables
const requestURL="../../backend/user-request.php";

const user_id=2;//tempary user id

function request() {
    
    const relief_type=document.getElementById("relief_type").value;
    const district= document.getElementById("district").value;
    const div_secretariat= document.getElementById("div_secretariat").value;
    const gn_division= document.getElementById("gn_division").value;
    const contact_name = document.getElementById("name").value;
    const contact_number = document.getElementById("contact_number").value;
    const address= document.getElementById("address").value;
    const family_members= document.getElementById("family_members").value;
    const description= document.getElementById("description").value;
    const flood_severity= document.getElementById("flood_severity").value;
    const status="Pending";
    
    fetch(requestURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({user_id, relief_type, district, div_secretariat, gn_division, contact_name, contact_number, address, family_members, flood_severity, description,status}),
    })
    .then(res  => res .json())
    .then(data => {
        console.log(data);  
       
    });
}