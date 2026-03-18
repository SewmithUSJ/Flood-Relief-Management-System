<?php include "admin_slidbar_navbar.php"; ?>
<div class="main-wrapper">
    <nav class="navbar navbar-dark bg-dark px-4">
        <span class="navbar-brand mb-0 h1">Admin Dashboard</span>
        <div class="ms-auto text-white">Welcome!</div>
    </nav>

    <!-- dashboad -->
    <div class="container-fluid p-4">

        <div class="row g-3 mb-3">
           <div class="col-md-4">
                <div class="stat-card d-flex align-items-center gap-3 p-3 shadow-sm border" onclick="viewStatus('Pending')" >
                    <i class="fa fa-eye-slash fa-2x text-warning"></i>
                    <h6 class="mb-0">Pending request</h6>
                    <h5 class="mb-0 " id="pending"></h3>
                </div>
            </div>
            <div class="col-md-4">
                <div class="stat-card d-flex align-items-center gap-3 p-3 shadow-sm border" onclick="viewStatus('Accepted')">
                    <i class="fa fa-check-circle fa-2x text-success"></i>
                    <h6 class="mb-0">Accepted request</h6>
                    <h5 class="mb-0" id="accepted"></h3>
                </div>
            </div>
            <div class="col-md-4">
                <div class="stat-card d-flex align-items-center gap-3 p-3 shadow-sm border" onclick="viewStatus('Rejected')">
                    <i class="fa fa-times-circle fa-2x text-danger"></i>
                    <h6 class="mb-0">Rejected request</h6>
                    <h5 class="mb-0" id="rejected"></h3>
                </div>
            </div>
        </div>
    
        <div class="row g-3 mb-5">
            <div class="col-md-2">
                <div class="stat-card text-center p-3 shadow-sm border" onclick="showSection('members')">
                    <i class="fas fa-users fa-2x text-primary mb-2"></i>
                    <h6>Registered Users</h6>
                    <h3 id="all_users"></h3>
                </div>
            </div>
            <div class="col-md-2">
                <div class="stat-card text-center p-3 shadow-sm border" onclick="showSection('Food')">
                    <i class="fas fa-utensils fa-2x text-success mb-2"></i>
                    <h6>Food Requests</h6>
                    <h3 id="food_count">45</h3>
                </div>
            </div>
            <div class="col-md-2">
                <div class="stat-card text-center p-3 shadow-sm border" onclick="showSection('Water')">
                    <i class="fas fa-tint fa-2x text-info mb-2"></i>
                    <h6>Water Requests</h6>
                    <h3 id="water_count"></h3>
                </div>
            </div>
            <div class="col-md-2">
                <div class="stat-card text-center p-3 shadow-sm border" onclick="showSection('Medicine')">
                    <i class="fas fa-pills fa-2x text-danger mb-2"></i>
                    <h6>Medicine Requests</h6>
                    <h3 id="medicine_count"></h3>
                </div>
            </div>
            <div class="col-md-2">
                <div class="stat-card text-center p-3 shadow-sm border" onclick="showSection('Shelter')">
                    <i class="fas fa-home fa-2x text-warning mb-2"></i>
                    <h6>Shelter Requests</h6>
                    <h3 id="shelter_count"></h3>
                </div>
            </div>
            <div class="col-md-2">
                <div class="stat-card text-center p-3 shadow-sm border bg-light-red" onclick="showSection('high')">
                    <i class="fas fa-exclamation-triangle fa-2x text-danger mb-2"></i>
                    <h6>High Severity HH</h6>
                    <h3 id="high"></h3>
                </div>
            </div>
        </div>
        <!-- all members view -->
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
                                
                            </tbody>
                        </table>
                    </div>
                    <div class="card-footer bg-white">
                        <button class="btn btn-outline-dark btn-sm" onclick="viewAllMembers()">View All Members</button>
                    </div>
                </div>
            </div>
            <!-- request  view-->
            <div class="col-12" id="relief-section">
                <div class="card shadow-sm">
                    <div class="card-header bg-white fw-bold" id="relief-table-title">Recent Relief Requests</div>
                    <div class="card-body p-0">
                        <table class="table table-hover mb-0">
                            <thead class="table-light" id="relief-table-head">
                                <tr>
                                    <th>Request ID</th>
                                    <th>Relief Type</th>
                                    <th>Flood Level</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody  id="relief-table-body">
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- details modal -->
<div id="adminModal-A" class="custom-modal-overlay">
    <div class="custom-modal-content">
        <div class="custom-modal-header bg-dark text-white">
            <h5 class="m-0" id="modalHead"></h5>
            <span class="close-modal" onclick="closeModal_A()">&times;</span>
        </div>
        <div class="table-responsive overflow-auto flex-grow-1 p-0">
            <table class="table table-hover mb-0">
                <thead class="table-light sticky-top" id="modal-table-head"></thead>
                <tbody id="modal-table-body" ></tbody>
            </table>
        </div>
        <div class="custom-modal-footer ">
            <button class="btn btn-secondary" onclick="closeModal_A()">Close</button>
        </div>
    </div>
</div>
<div id="adminModal-B" class="custom-modal-overlay">
    <div class="custom-modal-content">
        <div class="custom-modal-header bg-dark text-white">
            <h5 class="m-0" id="modalHead">Full Request Information</h5>
            <span class="close-modal" onclick="closeModal_B()">&times;</span>
        </div>
        <div id="modalContent" class="custom-modal-body">
        </div>
        <div class="custom-modal-footer ">
            <button class="btn btn-secondary" onclick="closeModal_B()">Close</button>
        </div>
    </div>
</div>

<?php include "../config/admin-footer.php"; ?>