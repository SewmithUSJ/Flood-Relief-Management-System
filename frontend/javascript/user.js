//URL variables
const requestURL="../../backend/user/request.php";

let path = window.location.pathname;
let fileName = path.substring(path.lastIndexOf('/') + 1);

const user_id=2;//tempary user id

setActive();

function setActive() {
    
    if (fileName == "user_request.php") {
        document.getElementById("nav-request").classList.add('active');
       
    } else {
         document.getElementById("nav-view").classList.add('active');
         allRequestLoad(); 
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
                   <button class="btn btn-outline-dark btn-sm w-100 mb-3" 
                        onclick="openDetails('${request.request_id}', '${request.district}', '${request.gn_division}', '${request.div_secretariat}', ${request.family_members}, '${request.description}', '${request.contact_number}')">
                        View More Details
                    </button>
                    <div class="d-flex gap-2">
                        <button class="btn btn-secondary btn-sm flex-fill"
                        onclick="loadDetails('${request.relief_type}','${request.flood_severity}','${request.contact_name}','${request.request_id}', '${request.district}', '${request.gn_division}', '${request.div_secretariat}', ${request.family_members}, '${request.description}', '${request.contact_number}','${request.address}')"> 
                            <i class="fas fa-edit"></i> Update
                        </button>
                       <button class="btn btn-danger btn-sm flex-fill" onclick="deleteReq('${request.request_id}')">
                            <i class="fas fa-trash"></i> Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>  
        `;});
    document.getElementById("cards").innerHTML =cards;
}
function loadDetails(relief_type,flood_severity,name,request_id,district,gn_division,div_secretariat,family_members,description,contact_number,address) {
        const modal = document.getElementById('updateModal');
        console.log(relief_type);
        document.getElementById('edit_id').value = request_id;
        document.getElementById('edit_relief').value = relief_type;
        document.getElementById('edit_district').value = district;
        document.getElementById('edit_div_secretariat').value=div_secretariat;
        document.getElementById('edit_gn_division').value=gn_division;
        document.getElementById('edit_name').value=name;
        document.getElementById('edit_contact_number').value=contact_number;
        document.getElementById('edit_address').value=address;
        document.getElementById('edit_family_members').value=family_members;
        document.getElementById('edit_flood_severity').value=flood_severity;
        document.getElementById('edit_description').value = description;

        modal.classList.remove('d-none');
        modal.classList.add('d-flex');    
}
function closeUpdate() {
    const modal = document.getElementById('updateModal');
    modal.classList.add('d-none');
    modal.classList.remove('d-flex');
}

function saveUpdate() {

    const request_id = document.getElementById('edit_id').value ;
    const relief_type = document.getElementById('edit_relief').value ;
    const district = document.getElementById('edit_district').value ;
    const div_secretariat = document.getElementById('edit_div_secretariat').value ;
    const gn_division = document.getElementById('edit_gn_division').value ;
    const name = document.getElementById('edit_name').value;
    const contact_number = document.getElementById('edit_contact_number').value ;
    const address = document.getElementById('edit_address').value;
    const family_members = document.getElementById('edit_family_members').value;
    const flood_severity = document.getElementById('edit_flood_severity').value;
    const description = document.getElementById('edit_description').value ;
   

    fetch(requestURL, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({request_id,relief_type,district,div_secretariat,gn_division,name,contact_number,address,family_members,flood_severity,description }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        closeUpdate();
        allRequestLoad();
      });
}
function openDetails( request_id,district,gn_division,div_secretariat,family_members,description,contact_number) {
    const modal = document.getElementById('customModal');
    const modalBody = document.getElementById('modalData');

    modalBody.innerHTML = `
        <div class="mb-2"><strong>Reference ID:</strong> ${request_id}</div>
        <div class="mb-2"><strong>Location:</strong> ${district} District</div>
        <div class="mb-2"><strong>Divisional Secretariat:</strong> ${div_secretariat}</div>
        <div class="mb-2"><strong>GN Division:</strong> ${gn_division}</div>
        <div class="mb-2"><strong>Contact:</strong> ${contact_number}</div>
        <div class="mb-2"><strong>Household:</strong> ${family_members} Family Members</div>
        <hr>
        <div><strong>Description:</strong> ${description}</div>
    `;

    modal.style.display = 'flex'; 
}
function closeDetails() {
    document.getElementById('customModal').style.display = 'none';
}
function deleteReq(id) {
    
    if(confirm("Are you sure you want to permanently delete Request #" + id + "?")) {
        fetch(requestURL, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
        })
        .then(res => res.json())
        .then(() => {
            alert("Request " + id + " deleted successfully.");
            location.reload(); 
        });
        
    }
}