//URL variables
const registerURL = "../../backend/user.php";

let validPassword = false;
let validNIC = false;

function validatePassword() {

    let password = document.getElementById("password").value;
    let message = document.getElementById("passwordMsg");
    
    let hasUpper = 0;
    let hasNumber =  0;

    
    if (password.length < 8) {
        message.innerText = "Password must be at least 8 characters";
        message.classList.remove('text-success');
        message.classList.add('text-danger');
        return;
    }

    
    for (let i = 0; i < password.length; i++) {

        let ch = password[i];

        if (ch >= 'A' && ch <= 'Z') {
            hasUpper = 1;
        }

        if (ch >= '0' && ch <= '9') {
            hasNumber = 1;
        }
    }

    if (hasUpper && hasNumber) {
        message.innerText = "Valid Password ";
        message.classList.add('text-success');
        message.classList.remove('text-danger');
        validPassword = true;
    } else {
        message.innerText = "Password must contain uppercase letter and number ";
        message.classList.remove('text-success');
        message.classList.add('text-danger');
        validPassword = false;
    }
}

function validateNIC() {

    let nic = document.getElementById("NIC").value;
    let message = document.getElementById("nicMsg");

    if (nic.length == 10) {

        let lastChar = nic[9];

        if (lastChar == 'V' || lastChar == 'v' || lastChar == 'X' || lastChar == 'x') {
            message.innerHTML = "Valid Old NIC";
            message.classList.add('text-success');
            message.classList.remove('text-danger');
            validNIC = true;
        } else {
            message.innerHTML = "Invalid NIC";
            message.classList.remove('text-success');
            message.classList.add('text-danger');
            validNIC = false;
        }

    }
    
    else if (nic.length == 12) {
        message.innerHTML = "Valid New NIC";
        message.classList.add('text-success');
        message.classList.remove('text-danger');
        validNIC = true;
    }
    else {
        message.innerHTML = "Invalid NIC";
        message.classList.remove('text-success');
        message.classList.add('text-danger');
        validNIC = false;
    }
}

function registration(){

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const NIC = document.getElementById("NIC").value;

    if(name == "" || email == "" || password == "" || NIC == "" ){
        alert("All required fields must be filled");
        return;
    }

    if(validNIC == true && validPassword == true){
        fetch(registerURL, {
     
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password, NIC }),
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert(data); 
        });   
    } else {
        alert("validation failed");
    }
}
