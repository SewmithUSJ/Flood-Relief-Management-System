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


<?php include "../config/user-footer.php" ?>