<?php include "user_sidebar_navbar.php";?>
<div class="main-wrapper">
    <nav class="navbar navbar-light bg-dark border-bottom">
        <div class="container-fluid justify-content-end">
            <span class="navbar-text fw-bold text-light d-flex">Hello, <div id="user_name">Name</div></span>
        </div>
    </nav>

    <div class="container mt-4 mb-5">
        <h3 class="mb-4">My Previous Requests</h3>
        
        <div class="row g-4" id="cards">
              
        </div>
    </div>
</div>
<div id="customModal" class="custom-modal-overlay">
    <div class="custom-modal-content">
        <div class="custom-modal-header bg-dark text-white">
            <h5 class="m-0">Full Request Details</h5>
            <span class="close-modal" onclick="closeDetails()">&times;</span>
        </div>
        <div id="modalData" class="custom-modal-body">
            </div>
        <div class="custom-modal-footer">
            <button class="btn btn-secondary" onclick="closeDetails()">Close</button>
        </div>
    </div>
</div>
        <div class="modal fad  d-none custom-modal-overlay top-20" id="updateModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable w-100 h-75">
            <div class="modal-content ">
            <div class="modal-header bg-dark text-white">
                <h5 class="modal-title">Update Request</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" onclick="closeUpdate()"></button>
            </div>
            <div class="modal-body">
                <input type="hidden" id="edit_id">
                <div class="mb-3">
                <label class="form-label">Relief Type</label>
                <select id="edit_relief" class="form-select">
                    <option value="Food">Food</option>
                    <option value="Water">Water</option>
                    <option value="Medicine">Medicine</option>
                    <option value="Shelter">Shelter</option>
                </select>
                </div>
                <div class="mb-3">
                    <label class="form-label">District</label>
                    <select id="edit_district" class="form-select" name="district" required>
                    <option value="" selected disabled>Select District</option>
                    <?php
                        $districts = ["Ampara", "Anuradhapura", "Badulla", "Batticaloa", "Colombo", "Galle", "Gampaha", "Hambantota", "Jaffna", "Kalutara", "Kandy", "Kegalle", "Kilinochchi", "Kurunegala", "Mannar", "Matale", "Matara", "Moneragala", "Mullaitivu", "Nuwara Eliya", "Polonnaruwa", "Puttalam", "Ratnapura", "Trincomalee", "Vavuniya"];
                        foreach($districts as $d) { echo "<option value='$d'>$d</option>"; }
                        ?>
                    </select>
                </div>
                <div class="mb-3">
                <label class="form-label">Divisional Secretariat</label>
                <input id="edit_div_secretariat" class="form-control">
                </div>
                <div class="mb-3">
                <label class="form-label">GN Division</label>
                <input id="edit_gn_division" class="form-control">
                </div>
                <div class="mb-3">
                <label class="form-label">Contact Person Name</label>
                <input id="edit_name" class="form-control">
                </div>
                <div class="mb-3">
                <label class="form-label">Contact Number</label>
                <input id="edit_contact_number" class="form-control">
                </div>
                <div class="mb-3">
                <label class="form-label">Address</label>
                <input id="edit_address" class="form-control">
                </div>
                <div class="mb-3">
                <label class="form-label">No. of Family Members</label>
                <input id="edit_family_members" class="form-control">
                </div>
                <div class="mb-3">
                <label class="form-label">Flood Severity Level</label>
                <select id="edit_flood_severity" class="form-select">
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
                </div>
                <div class="mb-3">
                <label class="form-label">Description</label>
                <textarea id="edit_description" class="form-control"></textarea>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onclick="closeUpdate()">Close</button>
                <button type="button" class="btn btn-primary" onclick="saveUpdate()">Save Changes</button>
            </div>
            </div>
        </div>
        </div>

<?php include "../config/user-footer.php" ?>
