let validPassword = false;
let validNIC = false;

function validatePassword() {

    let password = document.getElementById("password").value;
    let message = document.getElementById("passwordMsg");

    let hasUpper = 0;
    let hasNumber =  0;

    
    if (password.length < 8) {
        message.innerText = "Password must be at least 8 characters";
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
        validPassword = true;
    } else {
        message.innerText = "Password must contain uppercase letter and number ";
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
            validNIC = true;
        } else {
            message.innerHTML = "Invalid NIC";
            validNIC = false;
        }

    }
    
    else if (nic.length == 12) {
        message.innerHTML = "Valid New NIC";
        validNIC = true;
    }
    else {
        message.innerHTML = "Invalid NIC";
        validNIC = false;
    }
}

function registration(){
    if(validNIC == true && validPassword == true){
        alert("validation successful");   
    } else {
        alert("validation failed");
    }
}
