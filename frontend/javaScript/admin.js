//URL
const requestURL="../../backend/admin/request.php";
const userURL="../../backend/admin/user.php";

//sidedbar
let path = window.location.pathname;
let fileName = path.substring(path.lastIndexOf('/') + 1);

setActive();

function setActive() {
    
    if (fileName == "admin_details.php") {
        document.getElementById("admin-details").classList.add('active');
        viewMembers();
        viewReq();
       
    } else if (fileName == "admin_summary.php"){
        document.getElementById("admin-summary").classList.add('active');
        calcDiscrictCounts();
        calSeverityLevel();
        calReliefType();
    }else{
        document.getElementById("admin-search").classList.add('active');
        searchReq();
    }
   
}

//badge colors
const severityColor = {
    High: "bg-danger",
    Medium: "bg-warning text-dark",
    Low: "bg-success"
};
const statusColor = {
    Rejected: "bg-danger",
    Pending: "bg-warning text-dark",
    Accepted: "bg-success"
};

function users() {
    return fetch(userURL)
        .then(res => res.json());
}

function request() {
    return fetch(requestURL)
        .then(res => res.json());
}

//status 

function viewStatus(type) {
    request().then(data => {
        document.getElementById("modal-table-head").innerHTML = `
        <tr>
            <th>Member Id</th>
            <th>Relief Type</th>
            <th>Flood Level</th>
            <th>Status</th>
            <th>Action</th>
        </tr>`;
        let table = "";
        data.forEach(request => {
            if(request.status==type ){
                if (type == 'Pending') {  
                    table += `
                        <tr>
                            <td>M0${request.user_id}</td>
                            <td>${request.relief_type}</td>
                            <td>
                                <span class="badge ${severityColor[request.flood_severity]}">
                                    ${request.flood_severity}
                                </span></br>
                            </td>
                            <td>
                                <span class="badge ${statusColor[request.status]}">
                                    ${request.status}
                                </span>
                            </td>
                            <td>
                            <button class="btn btn-outline-dark btn-sm" onclick="openDetails('${request.request_id}','${request.contact_name}','${request.address}','${request.contact_number}',' ${request.family_members}','${request.description}')">View More Details</button>
                            <button class="btn btn-sm btn-success" onclick="statusUpdate('${request.request_id}','Accepted')">Accept</button>
                            <button class="btn btn-sm btn-danger" onclick="statusUpdate('${request.request_id}','Rejected')">Reject</button>
                            </td>
                        </tr>
                    `;
                }else{
                    table += `
                        <tr>
                            <td>M0${request.user_id}</td>
                            <td>${request.relief_type}</td>
                            <td>
                                <span class="badge ${severityColor[request.flood_severity]}">
                                    ${request.flood_severity}
                                </span></br>
                            </td>
                            <td>
                                <span class="badge ${statusColor[request.status]}">
                                    ${request.status}
                                </span>
                            </td>
                            <td>
                            <button class="btn btn-outline-dark btn-sm" onclick="openDetails('${request.request_id}','${request.contact_name}','${request.address}','${request.contact_number}',' ${request.family_members}','${request.description}')">View More Details</button>
                            </td>
                        </tr>
                    `;
                }
            }
        });
        document.getElementById("modalHead").innerHTML=type+' Requests';
        document.getElementById("modal-table-body").innerHTML = table;
        document.getElementById("adminModal-A").style.display = 'flex';
    });
    
}

function statusUpdate(request_id,status) {
    const action = "status";
    fetch(requestURL, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({request_id,status,action}),
    })
    .then(res  => res .json())
    .then(data => {
        viewStatus('Pending');
    });
}

//display 5 members in dash board
function viewMembers() {
    users().then(data => {
    let table = "";
      let count = 1;
      let memberCount = 0;
      data.forEach(user => {
        if (count<=5) {
            table += `
          <tr>
            <td>M0${user.user_id}</td>
            <td>${user.name}</td>
            <td>${user.NIC}</td>
            <td>${user.email}</td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="viewUserReq(${user.user_id})">View request</button>
                <button class="btn btn-sm btn-danger" onclick="deleteUser(${user.user_id})">Delete</button>
            </td>
          </tr>
            `;
            count +=1;
        }
        memberCount +=1;
      });
      document.getElementById("all_users").innerHTML=memberCount;
      document.getElementById("user-table-body").innerHTML = table;});   
   
}

function viewReq(){
    request()
    .then(data => {
        let table = "";
        data.forEach(request => {
            table += `
                <tr>
                    <td>R0${request.request_id}</td>
                    <td>${request.relief_type}</td>
                    <td>
                        <span class="badge ${severityColor[request.flood_severity]}">
                            ${request.flood_severity}
                        </span></br>
                    </td>
                    <td>
                        <span class="badge ${statusColor[request.status]}">
                            ${request.status}
                        </span>
                    </td>
                    <td>
                    <button class="btn btn-outline-dark btn-sm" onclick="openDetails('${request.request_id}','${request.contact_name}','${request.address}','${request.contact_number}',' ${request.family_members}','${request.description}')">View More Details</button>
                    </td>
                </tr>
                
            `;          
            
        });
        calculation(data);
        document.getElementById('relief-table-body').innerHTML=table;
    });
}
//dashboard calculations
function calculation(requests) {
    let pending=0;
    let accepted=0;
    let rejected=0;
    let food=0;
    let water=0;
    let medicine=0;
    let shelter=0;
    let high_water=0;

    requests.forEach(request =>{
        if (request.status==='Pending') {
            pending +=1;
        }
        if (request.status==='Accepted') {
            accepted +=1;
        }
        if (request.status==='Rejected') {
            rejected +=1;
        }
        if (request.relief_type==='Food') {
            food +=1;
        }
        if (request.relief_type==='Water') {
            water +=1;
        }
        if (request.relief_type==='Medicine') {
            medicine +=1;
        }
        if (request.relief_type==='Shelter') {
            shelter +=1;
        }
        if (request.flood_severity==='High') {
            high_water +=1;
        }
    })

    document.getElementById('pending').innerHTML=pending;
    document.getElementById('accepted').innerHTML=accepted;
    document.getElementById('rejected').innerHTML=rejected;
    document.getElementById('food_count').innerHTML=food;
    document.getElementById('water_count').innerHTML=water;
    document.getElementById('medicine_count').innerHTML=medicine;
    document.getElementById('shelter_count').innerHTML=shelter;
    document.getElementById('high').innerHTML=high_water;
    
}

// card shifted table
function showSection(type) {
    const tableTitle = document.getElementById('relief-table-title');
    const membersSec = document.getElementById('members-section');
    
    if(type === 'members') {
        location.reload();
    } else {
        
        membersSec.style.display = 'none';
        tableTitle.innerText = type.charAt(0).toUpperCase() + type.slice(1).replace('-', ' ') + " Details Table";
        
        viewFiltReq(type);
    }
}

function viewFiltReq(type) {
    request()
    .then(data => {
        let table = "";
        data.forEach(request => {
            if (request.relief_type === type || request.flood_severity === type) {
                table += `
                    <tr>
                        <td>R0${request.request_id}</td>
                        <td>${request.relief_type}</td>
                        <td>
                            <span class="badge ${severityColor[request.flood_severity]}">
                                ${request.flood_severity}
                            </span></br>
                        </td>
                        <td>
                            <span class="badge ${statusColor[request.status]}">
                                ${request.status}
                            </span>
                        </td>
                        <td>
                        <button class="btn btn-outline-dark btn-sm" onclick="openDetails('${request.request_id}','${request.contact_name}','${request.address}','${request.contact_number}',' ${request.family_members}','${request.description}')">View More Details</button>
                        </td>
                    </tr>
                
                `;
            }          
            
        });
        document.getElementById('relief-table-body').innerHTML=table;
    });
}

// modal functions
function viewAllMembers() {
    const modal = document.getElementById('adminModal-A');
    users()
    .then(data => {
      let table = "";
      document.getElementById("modal-table-head").innerHTML = `
      <tr>
            <th>Member ID</th>
            <th>Name</th>
            <th>NIC</th>
            <th>Email</th>
            <th>Action</th>
        </tr>`;
      data.forEach(user => {
        table += `
          <tr>
            <td>M0${user.user_id}</td>
            <td>${user.name}</td>
            <td>${user.NIC}</td>
            <td>${user.email}</td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="viewUserReq(${user.user_id})">View request</button>
                <button class="btn btn-sm btn-danger" onclick="deleteUser(${user.user_id})">Delete</button>
            </td>
          </tr>
        `;
      });
      
      document.getElementById("modalHead").innerHTML='ALL Members';
      document.getElementById("modal-table-body").innerHTML = table;
      modal.style.display = 'flex';
    });
}
function viewUserReq(user_id){
    const modal = document.getElementById('adminModal-A');
    console.log(user_id);
    request().then(data =>{
        let table = "";
        document.getElementById("modal-table-head").innerHTML = `
        <tr>
            <th>Date & Time</th>
            <th>Relief Type</th>
            <th>Flood Level</th>
            <th>Status</th>
            <th>Action</th>
        </tr>`;
        data.forEach(request => {
        if (request.user_id==user_id) {
            console.log(request);
            table += `
             <tr>
                <td>${request.created_at} </td>
                <td>${request.relief_type}</td>
                <td>
                    <span class="badge ${severityColor[request.flood_severity]}">
                        ${request.flood_severity}
                    </span></br>
                </td>
                <td>
                    <span class="badge ${statusColor[request.status]}">
                        ${request.status}
                    </span>
                </td>
                <td>
                    <button class="btn btn-outline-dark btn-sm" onclick="openDetails('${request.request_id}','${request.contact_name}','${request.address}','${request.contact_number}',' ${request.family_members}','${request.description}')">View More Details</button>
                </td>
            </tr>
        
        `;
        }
    });
    document.getElementById("modal-table-body").innerHTML = table;
    document.getElementById("modalHead").innerHTML='User All requests';
    modal.style.display = 'flex';

    });
}

function openDetails(id,name,address,contact_number,family_members,description) {
    const modal = document.getElementById('adminModal-B');
    const content = document.getElementById('modalContent');
    
    content.innerHTML = `
        <h6>Request Details for ID: #${id}</h6>
        <hr>
        <p><strong>Member Name:</strong> ${name}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Contact:</strong> ${contact_number}</p>
        <p><strong>Family Members:</strong> ${family_members}</p>
        <p><strong>Description:</strong> ${description}</p>
    `;
    modal.style.display = 'flex';
}

function closeModal_A() {
    document.getElementById('adminModal-A').style.display = 'none';
    document.getElementById('modalHead').innerHTML='';
    document.getElementById('modal-table-head').innerHTML='';
    document.getElementById('modal-table-body').innerHTML='';
}
function closeModal_B() {
    document.getElementById('adminModal-B').style.display = 'none';
    document.getElementById('modalContent').innerHTML='';
}
function deleteUser(id) {
    if(confirm("Are you sure you want to delete member " + id + "?")) {
        fetch(userURL, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
        })
        .then(res => res.json())
        .then(() => {
            alert("Member " + id + " has been removed from the system.");
            location.reload();
        });
        
    }
}

//search
function searchReq() {
 
    const district = document.getElementById('district').value;
    const flood_severity = document.getElementById('flood_severity').value;
    const relief_type = document.getElementById('relief_type').value;

    let title = "";

    if (district == "All" && flood_severity == "All" && relief_type == "All") {
        title = "All request";
    }else if (district != "All" && flood_severity == "All" && relief_type == "All") {
        title = district+" district request ";
    } else if (district == "All" && flood_severity != "All" && relief_type == "All") {
        title = flood_severity+" sevirity level request";
    }else if(district == "All" && flood_severity == "All" && flood_severity != "All"){
        title = relief_type+" requests";
    }else if(district != "All" && flood_severity != "All" && relief_type == "All"){
        title = district+" district "+flood_severity+ " sevirity level request  ";
    }else if(district != "All" && flood_severity == "All" && relief_type != "All"){
        title = district+" district "+relief_type+"  request  ";
    }else if(district == "All" && flood_severity != "All" && relief_type != "All"){
        title = flood_severity+" sevirity level "+relief_type+" request  ";
    }else {
        title = district+" district "+flood_severity+" sevirity level "+relief_type+" request  " ;
    }
     
    let table ="";
    request().then(data => {
    data.forEach(request => {
        if (
            (district === "All" || request.district === district) &&
            (flood_severity === "All" || request.flood_severity === flood_severity) &&
            (relief_type === "All" || request.relief_type === relief_type)
        ) {
            table += `
             <tr>
                <td>M0${request.user_id} </td>
                <td>${request.district} </td>
                <td>${request.relief_type}</td>
                <td>
                    <span class="badge ${severityColor[request.flood_severity]}">
                        ${request.flood_severity}
                    </span></br>
                </td>
                <td>
                    <span class="badge ${statusColor[request.status]}">
                        ${request.status}
                    </span>
                </td>
                <td>
                    <button class="btn btn-outline-dark btn-sm" onclick="openDetails('${request.request_id}','${request.contact_name}','${request.address}','${request.contact_number}',' ${request.family_members}','${request.description}')">View More Details</button>
                </td>
            </tr>
        
        `;
        }
    });
    document.getElementById('relief-table-body').innerHTML=table;
    });

    document.getElementById('request-table-title').innerHTML=title;
    
}
// summary
function switchReport(section) {
    
    const sections = ['area-report-section', 'relief-report-section', 'severity-report-section'];
    sections.forEach(s => document.getElementById(s).classList.remove('active-report'));
    
    document.getElementById(section + '-report-section').classList.add('active-report');
    
    closeDetails('area');
    closeDetails('relief');

    window.scrollTo({ top: 400, behavior: 'smooth' });
}
  
function calcDiscrictCounts() {
    const counts = {};
    const districts = ["Ampara", "Anuradhapura", "Badulla", "Batticaloa", "Colombo", "Galle", "Gampaha", "Hambantota", "Jaffna", "Kalutara", "Kandy", "Kegalle", "Kilinochchi", "Kurunegala", "Mannar", "Matale", "Matara", "Moneragala", "Mullaitivu", "Nuwara Eliya", "Polonnaruwa", "Puttalam", "Ratnapura", "Trincomalee", "Vavuniya"];
    districts.forEach(district => {
        counts[district] = 0;
    });
     fetch(requestURL)
        .then(res => res.json())
        .then(data => {
        data.forEach(req => {
            counts[req.district] += 1;
        });
        let table = "";
        for (let district in counts) {
            if (counts[district]>0) {
                table += `
                <tr>
                    <td>${district}</td>
                    <td>${counts[district]}</td>
                    <td>
                        <button class="btn btn-sm btn-primary" onclick="showDistrictDetails('${district}')">
                            View More
                        </button>
                    </td>
                </tr>
                `;
            }
        }
        document.getElementById('district-total-table').innerHTML = table;
    });
}

function showDistrictDetails(district) {
    document.getElementById('district-main-card').classList.add('d-none');
    document.getElementById('district-detail-card').classList.remove('d-none');
    document.getElementById('dist-detail-title').innerText = district + " - Relief Breakdown";
    let counts = {
        Food :{ High: 0, Medium: 0, Low: 0 },
        Water :{ High: 0, Medium: 0, Low: 0 },
        Medicine :{ High: 0, Medium: 0, Low: 0 },
        Shelter :{ High: 0, Medium: 0, Low: 0 }
    };

     fetch(requestURL)
        .then(res => res.json())
        .then(data => {

        data.forEach(req => {

        if(req.district == district){

            let relief = req.relief_type;       
            let severity = req.flood_severity; 
            
            counts[relief][severity] += 1;

        }

    });
    
        document.getElementById("district-card").innerHTML = `
            <tr><td rowspan="3" class="fw-bold align-middle">Food</td>
            <td>High</td><td>${counts['Food']['High'] || 0}</td></tr>
            <tr><td>Medium</td><td>${counts['Food']['Medium'] || 0}</td></tr>
            <tr><td>Low</td><td>${counts['Food']['Low'] || 0}</td></tr>

            <tr><td rowspan="3" class="fw-bold align-middle">Water</td>
            <td>High</td><td>${counts['Water']['High'] || 0}</td></tr>
            <tr><td>Medium</td><td>${counts['Water']['Medium'] || 0}</td></tr>
            <tr><td>Low</td><td>${counts['Water']['Low'] || 0}</td></tr>

            <tr><td rowspan="3" class="fw-bold align-middle">Medicine</td>
            <td>High</td><td>${counts['Medicine']['High'] || 0}</td></tr>
            <tr><td>Medium</td><td>${counts['Medicine']['Medium'] || 0}</td></tr>
            <tr><td>Low</td><td>${counts['Medicine']['Low'] || 0}</td></tr>

            <tr><td rowspan="3" class="fw-bold align-middle">Shelter</td>
            <td>High</td><td>${counts['Shelter']['High'] || 0}</td></tr>
            <tr><td>Medium</td><td>${counts['Shelter']['Medium'] || 0}</td></tr>
            <tr><td>Low</td><td>${counts['Shelter']['Low'] || 0}</td></tr>
        `;
    });

}

function calReliefType(){
    let counts = {'Food' : 0,'Water': 0, 'Medicine' : 0 , 'Shelter' : 0};
     fetch(requestURL)
        .then(res => res.json())
        .then(data => {
        data.forEach(req =>{
            counts[req.relief_type] +=1;
        });
        document.getElementById('relief-table').innerHTML = `
        <tr><td><i class="fas fa-utensils"></i></td><td>Food</td><td>${counts['Food']}</td><td><button class="btn btn-sm btn-success" onclick="showReliefDetails('Food')">View More</button></td></tr>
        <tr><td><i class="fas fa-tint"></i></td><td>Water</td><td>${counts['Water']}</td><td><button class="btn btn-sm btn-success" onclick="showReliefDetails('Water')">View More</button></td></tr>
        <tr><td><i class="fas fa-pills"></i></td><td>Medicine</td><td>${counts['Medicine']}</td><td><button class="btn btn-sm btn-success" onclick="showReliefDetails('Medicine')">View More</button></td></tr>
        <tr><td><i class="fas fa-home"></i></td><td>Shelter</td><td>${counts['Shelter']}</td><td><button class="btn btn-sm btn-success" onclick="showReliefDetails('Shelter')">View More</button></td></tr>
        `;
    });
}

function showReliefDetails(type) {
    document.getElementById('relief-main-card').classList.add('d-none');
    document.getElementById('relief-detail-card').classList.remove('d-none');
    document.getElementById('relief-detail-title').innerText = type + " - Severity Analysis";
    let counts = {'High' : 0,'Medium': 0, 'Low' : 0};
     fetch(requestURL)
        .then(res => res.json())
        .then(data => {
        data.forEach(req => {
            if (req.relief_type==type) {
                counts[req.flood_severity] += 1;
            }
        });
        document.getElementById("relief-card").innerHTML = `
        <tr><td>High</td><td>Critical</td><td>${counts['High']}</td></tr>
        <tr><td>Medium</td><td>Moderate</td><td>${counts['Medium']}</td></tr>
        <tr><td>Low</td><td>Stable</td><td>${counts['Low']}</td></tr>
        `;
    });
}

function calSeverityLevel() {
    let counts = {'High' : 0,'Medium': 0, 'Low' : 0};
     fetch(requestURL)
        .then(res => res.json())
        .then(data => {
        data.forEach(req => {
            counts[req.flood_severity] += 1;
        });
        document.getElementById("severity-table").innerHTML = `
        <tr><td><span class="badge bg-danger">High</span></td><td>Critical</td><td>${counts['High']}</td></tr>
        <tr><td><span class="badge bg-warning text-dark">Medium</span></td><td>Moderately Affected</td><td>${counts['Medium']}</td></tr>
        <tr><td><span class="badge bg-success">Low</span></td><td>Monitoring Required</td><td>${counts['Low']}</td></tr>
        `;
    });
}

function closeDetails(type) {
    if(type === 'area') {
        document.getElementById('district-main-card').classList.remove('d-none');
        document.getElementById('district-detail-card').classList.add('d-none');
    } else if(type === 'relief') {
        document.getElementById('relief-main-card').classList.remove('d-none');
        document.getElementById('relief-detail-card').classList.add('d-none');
    }
}