<?php include "admin_slidbar_navbar.php"; ?>
<div class="main-wrapper">
    <nav class="navbar navbar-dark bg-dark px-4">
        <span class="navbar-brand mb-0 h1">Admin Dashboard</span>
        <div class="ms-auto text-white">Welcome!</div>
    </nav>

    <div class="container-fluid p-4">

        <div class="row g-3 mb-3">
           <div class="col-md-4">
                <div class="stat-card d-flex align-items-center gap-3 p-3 shadow-sm border"  >
                    <i class="fa fa-eye-slash fa-2x text-warning"></i>
                    <h6 class="mb-0">Pending request</h6>
                    <h5 class="mb-0 " id="pending">20</h3>
                </div>
            </div>
            <div class="col-md-4">
                <div class="stat-card d-flex align-items-center gap-3 p-3 shadow-sm border" >
                    <i class="fa fa-check-circle fa-2x text-success"></i>
                    <h6 class="mb-0">Accepted request</h6>
                    <h5 class="mb-0" id="accepted">10</h3>
                </div>
            </div>
            <div class="col-md-4">
                <div class="stat-card d-flex align-items-center gap-3 p-3 shadow-sm border" >
                    <i class="fa fa-times-circle fa-2x text-danger"></i>
                    <h6 class="mb-0">Rejected request</h6>
                    <h5 class="mb-0" id="rejected">5</h3>
                </div>
            </div>
        </div>
    
        <div class="row g-3 mb-5">
            <div class="col-md-2">
                <div class="stat-card text-center p-3 shadow-sm border" >
                    <i class="fas fa-users fa-2x text-primary mb-2"></i>
                    <h6>Registered Users</h6>
                    <h3 id="all_users">37</h3>
                </div>
            </div>
            <div class="col-md-2">
                <div class="stat-card text-center p-3 shadow-sm border" >
                    <i class="fas fa-utensils fa-2x text-success mb-2"></i>
                    <h6>Food Requests</h6>
                    <h3 id="food_count">45</h3>
                </div>
            </div>
            <div class="col-md-2">
                <div class="stat-card text-center p-3 shadow-sm border" >
                    <i class="fas fa-tint fa-2x text-info mb-2"></i>
                    <h6>Water Requests</h6>
                    <h3 id="water_count">20</h3>
                </div>
            </div>
            <div class="col-md-2">
                <div class="stat-card text-center p-3 shadow-sm border" >
                    <i class="fas fa-pills fa-2x text-danger mb-2"></i>
                    <h6>Medicine Requests</h6>
                    <h3 id="medicine_count">10</h3>
                </div>
            </div>
            <div class="col-md-2">
                <div class="stat-card text-center p-3 shadow-sm border" >
                    <i class="fas fa-home fa-2x text-warning mb-2"></i>
                    <h6>Shelter Requests</h6>
                    <h3 id="shelter_count">5</h3>
                </div>
            </div>
            <div class="col-md-2">
                <div class="stat-card text-center p-3 shadow-sm border bg-light-red" >
                    <i class="fas fa-exclamation-triangle fa-2x text-danger mb-2"></i>
                    <h6>High Severity </h6>
                    <h3 id="high">20</h3>
                </div>
            </div>
        </div>
        
        <div class="row">
            <div class="col-12 mb-5" id="members-section">
                <div class="card shadow-sm">
                    <div class="card-header bg-white fw-bold">Registered Members (Recent 5)</div>
                    <div class="card-body p-0">
                        <table class="table table-hover mb-0">
                            <thead class="table-light">
                                <tr>
                                    <th>Member ID</th>
                                    <th>Name</th>
                                    <th>NIC</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody id="user-table-body">
                                <tr>
                                    <td>M05</td>
                                    <td>Kamala</td>
                                    <td>2000342367</td>
                                    <td>kamal@gmail.com</td>
                                    <td>
                                        <button class="btn btn-sm btn-primary" >View request</button>
                                        <button class="btn btn-sm btn-danger" >Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>M07</td>
                                    <td>nimal</td>
                                    <td>2000342367</td>
                                    <td>nimal@gmail.com</td>
                                    <td>
                                        <button class="btn btn-sm btn-primary" >View request</button>
                                        <button class="btn btn-sm btn-danger" >Delete</button>
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                    <div class="card-footer bg-white">
                        <button class="btn btn-outline-dark btn-sm" >View All Members</button>
                    </div>
                </div>
            </div>
            
            <div class="col-12" id="relief-section">
                <div class="card shadow-sm">
                    <div class="card-header bg-white fw-bold" id="relief-table-title">Recent Relief Requests</div>
                    <div class="card-body p-0">
                        <table class="table table-hover mb-0">
                            <thead class="table-light" id="relief-table-head">
                                <tr>
                                    <th>Member ID</th>
                                    <th>Relief Type</th>
                                    <th>Flood Level</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody  id="relief-table-body">
                                <tr>
                                    <td>M05</td>
                                    <td>Food</td>
                                    <td>
                                        <span class="badge bg-danger">
                                            high
                                        </span></br>
                                    </td>
                                    <td>
                                        <span class="badge bg-warning text-dark">
                                            Pending
                                        </span>
                                    </td>
                                    <td>
                                    <button class="btn btn-outline-dark btn-sm" >View More Details</button>
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<?php include "../config/admin-footer.php"; ?>
