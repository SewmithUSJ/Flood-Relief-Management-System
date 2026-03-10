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

<?php include "../config/user-footer.php" ?>
