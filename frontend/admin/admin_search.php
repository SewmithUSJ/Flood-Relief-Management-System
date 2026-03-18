<?php include "admin_slidbar_navbar.php"; ?>
<div class="main-wrapper">
    <nav class="navbar navbar-dark bg-dark px-4">
        <span class="navbar-brand mb-0 h1">Search Requests</span>
    </nav>

    <div class="container-fluid p-4">

         <div class="filter-card ">
            <div class="row g-3 ">
                <div class="col-md-3 ">
                    <label class="form-label fw-bold small text-muted">DISTRICT</label>
                    <select id="district" class="form-select" name="district" required>
                        <option value="All" >Select District</option>
                        <?php
                        $districts = ["Ampara", "Anuradhapura", "Badulla", "Batticaloa", "Colombo", "Galle", "Gampaha", "Hambantota", "Jaffna", "Kalutara", "Kandy", "Kegalle", "Kilinochchi", "Kurunegala", "Mannar", "Matale", "Matara", "Moneragala", "Mullaitivu", "Nuwara Eliya", "Polonnaruwa", "Puttalam", "Ratnapura", "Trincomalee", "Vavuniya"];
                        foreach($districts as $d) { echo "<option value='$d'>$d</option>"; }
                        ?>
                    </select>
                </div>

                <div class="col-md-3">
                    <label class="form-label fw-bold small text-muted">RELIEF TYPE</label>
                    <select class="form-select custom-select" id="relief_type">
                        <option value="All" >Select Relief</option>
                        <option value="Food">Food</option>
                        <option value="Water">Water</option>
                        <option value="Medicine">Medicine</option>
                        <option value="Shelter">Shelter</option>
                    </select>
                </div>

                <div class="col-md-3">
                    <label class="form-label fw-bold small text-muted">SEVERITY LEVEL</label>
                    <select class="form-select custom-select" id="flood_severity">
                        <option value="All" >Select Severity</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>

                <div class="col-md-3 d-flex align-items-end">
                    <button type="submit" class="btn btn-primary" onclick="searchReq()">
                        <i class="fa fa-search me-2"></i> Search
                    </button>
                </div>
                <br>
            </div>
        </div>
        <br>    
        <div class="col-12" >
                <div class="card shadow-sm">
                    <div class="card-header bg-white fw-bold" id="request-table-title"></div>
                    <div class="card-body p-0">
                        <table class="table table-hover mb-0">
                            <thead class="table-light" id="request-table-head">
                                <tr>
                                    <th>Member ID</th>
                                    <th>District</th>
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
