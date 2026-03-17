<?php include "user_sidebar_navbar.php";?>
<div class="main-wrapper">
    <nav class="navbar navbar-light bg-dark border-bottom">
        <div class="container-fluid justify-content-end">
            <span class="navbar-text fw-bold text-light d-flex">
                Hello, <div id="user_name">Test Name</div>
            </span>
        </div>
    </nav>

    <div class="container mt-4 mb-5">
        <div class="card shadow-sm border-0">
            <div class="card-header bg-dark text-white">
                <h4 class="mb-0">Relief Request Form</h4>
            </div>
            <div class="card-body p-4">
                    
                    <div class="mb-4">
                        <label class="form-label fw-bold">Type of Relief Needed</label>
                        <select id="relief_type" class="form-select" name="relief_type" required>
                            <option value="" selected disabled>Choose one...</option>
                            <option value="food">Food</option>
                            <option value="water">Water</option>
                            <option value="medicine">Medicine</option>
                            <option value="shelter">Shelter</option>
                        </select>
                    </div>

                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label class="form-label fw-bold">District</label>
                            <select id="district" class="form-select" name="district" required>
                                <option value="" selected disabled>Select District</option>
                                <?php
                                $districts = ["Ampara", "Anuradhapura", "Badulla", "Batticaloa", "Colombo", "Galle", "Gampaha", "Hambantota", "Jaffna", "Kalutara", "Kandy", "Kegalle", "Kilinochchi", "Kurunegala", "Mannar", "Matale", "Matara", "Moneragala", "Mullaitivu", "Nuwara Eliya", "Polonnaruwa", "Puttalam", "Ratnapura", "Trincomalee", "Vavuniya"];
                                foreach($districts as $d) { echo "<option value='$d'>$d</option>"; }
                                ?>
                            </select>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label fw-bold">Divisional Secretariat</label>
                            <input type="text" id="div_secretariat" class="form-control" name="ds_division" placeholder="Enter DS Division" required>
                        </div>
                    </div>

                    <div class="mb-4">
                        <label class="form-label fw-bold">GN Division</label>
                        <input type="text" id="gn_division" class="form-control" name="gn_division" placeholder="Enter Grama Niladhari Division" required>
                    </div>

                    <div class="card bg-light mb-4">
                        <div class="card-body">
                            <h6 class="card-title fw-bold mb-3 text-secondary">Household Details</h6>
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Contact Person Name</label>
                                    <input type="text" id="name" class="form-control" name="contact_name" required>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Contact Number (10 digits)</label>
                                    <input type="tel" id="contact_number" class="form-control" name="contact_no" id="contact_no" pattern="[0-9]{10}" maxlength="10" placeholder="07XXXXXXXX" required>
                                </div>
                                <div class="col-md-8 mb-3">
                                    <label class="form-label">Address</label>
                                    <input type="text" id="address" class="form-control" name="address" required>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <label class="form-label">No. of Family Members</label>
                                    <input type="number" id="family_members" class="form-control" name="family_count" min="1" required>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mb-4">
                        <label class="form-label fw-bold">Flood Severity Level</label>
                        <select id="flood_severity" name="flood_severity" class="form-select" required>
                            <option value="" selected disabled>Choose one...</option>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                    </div>

                    <div class="mb-4">
                        <label class="form-label fw-bold">Additional Description</label>
                        <textarea id="description" class="form-control" name="description" rows="3" placeholder="Add any other details..."></textarea>
                    </div>

                    <button class="btn btn-danger w-100 py-2 fw-bold" onclick=" request()">SUBMIT REQUEST</button>

            </div>
        </div>
    </div>
</div>

<?php include "../config/user-footer.php" ?>