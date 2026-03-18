//URL
const requestURL="../../backend/request.php";

function request() {
    return fetch(requestURL)
        .then(res => res.json());
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
        Food :{ high: 0, medium: 0, low: 0 },
        Water :{ high: 0, medium: 0, low: 0 },
        Medicine :{ high: 0, medium: 0, low: 0 },
        Shelter :{ high: 0, medium: 0, low: 0 }
    };

     fetch(requestURL)
        .then(res => res.json())
        .then(data => {

        data.forEach(req => {

        if(req.district == district){

            let relief = req.relief_type;       
            let severity = req.flood_severity.toLowerCase(); 
            
            counts[relief][severity] += 1;

        }

    });

        document.getElementById("district-card").innerHTML = `
            <tr><td rowspan="3" class="fw-bold align-middle">Food</td>
            <td>High</td><td>${counts['Food']?.['high'] || 0}</td></tr>
            <tr><td>Medium</td><td>${counts['Food']?.['medium'] || 0}</td></tr>
            <tr><td>Low</td><td>${counts['Food']?.['low'] || 0}</td></tr>

            <tr><td rowspan="3" class="fw-bold align-middle">Water</td>
            <td>High</td><td>${counts['Water']?.['high'] || 0}</td></tr>
            <tr><td>Medium</td><td>${counts['Water']?.['medium'] || 0}</td></tr>
            <tr><td>Low</td><td>${counts['Water']?.['low'] || 0}</td></tr>

            <tr><td rowspan="3" class="fw-bold align-middle">Medicine</td>
            <td>High</td><td>${counts['Medicine']?.['high'] || 0}</td></tr>
            <tr><td>Medium</td><td>${counts['Medicine']?.['medium'] || 0}</td></tr>
            <tr><td>Low</td><td>${counts['Medicine']?.['low'] || 0}</td></tr>

            <tr><td rowspan="3" class="fw-bold align-middle">Shelter</td>
            <td>High</td><td>${counts['Shelter']?.['high'] || 0}</td></tr>
            <tr><td>Medium</td><td>${counts['Shelter']?.['medium'] || 0}</td></tr>
            <tr><td>Low</td><td>${counts['Shelter']?.['low'] || 0}</td></tr>
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
    let counts = {'high' : 0,'medium': 0, 'low' : 0};
     fetch(requestURL)
        .then(res => res.json())
        .then(data => {
        data.forEach(req => {
            if (req.relief_type==type) {
                counts[req.flood_severity] += 1;
            }
        });
        document.getElementById("relief-card").innerHTML = `
        <tr><td>High</td><td>Critical</td><td>${counts['high']}</td></tr>
        <tr><td>Medium</td><td>Moderate</td><td>${counts['medium']}</td></tr>
        <tr><td>Low</td><td>Stable</td><td>${counts['low']}</td></tr>
        `;
    });
}

function calSeverityLevel() {
    let counts = {'high' : 0,'medium': 0, 'low' : 0};
     fetch(requestURL)
        .then(res => res.json())
        .then(data => {
        data.forEach(req => {
            counts[req.flood_severity] += 1;
        });
        document.getElementById("severity-table").innerHTML = `
        <tr><td><span class="badge bg-danger">High</span></td><td>Critical</td><td>${counts['high']}</td></tr>
        <tr><td><span class="badge bg-warning text-dark">Medium</span></td><td>Moderately Affected</td><td>${counts['medium']}</td></tr>
        <tr><td><span class="badge bg-success">Low</span></td><td>Monitoring Required</td><td>${counts['low']}</td></tr>
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