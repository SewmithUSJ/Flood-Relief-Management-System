//URL variables
const requestURL="../../backend/user-request.php";

let path = window.location.pathname;
let fileName = path.substring(path.lastIndexOf('/') + 1);

const user_id=2;//tempary user id

setActive();

function setActive() {
    
    if (fileName == "user_request.php") {
        document.getElementById("nav-request").classList.add('active');
       
    } else {
         document.getElementById("nav-view").classList.add('active');
        
    }
   
}

function request() {
    
    const action = "add";
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
      body: JSON.stringify({user_id, relief_type, district, div_secretariat, gn_division, contact_name, contact_number, address, family_members, flood_severity, description,status,action}),
    })
    .then(res  => res .json())
    .then(data => {
        console.log(data);  
        location.reload();
    });
}

//view all request

function allRequestLoad() {
    const action = "view";
    fetch(requestURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({user_id,action}),
    })
    .then(res  => res .json())
    .then(data => {
        userRequest(data);
    });
}

function userRequest(request) {
    const severityColor = {
        high: "bg-danger",
        medium: "bg-warning text-dark",
        low: "bg-success"
    };
     const statusColor = {
        Rejected: "bg-danger",
        Pending: "bg-warning text-dark",
        Accepted: "bg-success"
    };
    let cards = "";
      request.forEach(request => {
        cards += `
        <div class="col-md-4">
            <div class="card h-100 shadow-sm border-0 request-card">
                 <div class="card-body">
                    <h6 class="text-muted small mb-2">
                        <i class="far fa-calendar-alt"></i>  ${request.created_at}
                    </h6>
                    <h5 class="card-title fw-bold">${request.relief_type}  Relief</h5>
                   <p class="card-text">
                        <span class="badge ${severityColor[request.flood_severity]}">
                            Severity: ${request.flood_severity}
                        </span></br>
                        <span class="badge ${statusColor[request.status]}">
                            Status: ${request.status}
                        </span>
                    </p>
                    <button class="btn btn-outline-dark btn-sm w-100 mb-3" >
                        View More Details
                    </button>

                    <div class="d-flex gap-2">
                        <button class="btn btn-secondary btn-sm flex-fill" >
                            <i class="fas fa-edit"></i> Update
                        </button>
                        <button class="btn btn-danger btn-sm flex-fill" >
                            <i class="fas fa-trash"></i> Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>  
        `;});
    document.getElementById("cards").innerHTML =cards;
}