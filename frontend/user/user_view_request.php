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
                <div class="col-md-4">
            <div class="card h-100 shadow-sm border-0 request-card">
                 <div class="card-body">
                    <h6 class="text-muted small mb-2">
                        <i class="far fa-calendar-alt"></i>  2026-02-20  04:00:00 
                    </h6>
                    <h5 class="card-title fw-bold">food  Relief</h5>
                    <p class="card-text">
                        <span class="badge text-bg-danger">
                            Severity: High
                        </span></br>
                        <span class="badge text-bg-warning">
                            Status: Pending
                        </span>
                    </p>        
                    <button class="btn btn-outline-dark btn-sm w-100 mb-3" >
                        View More Details
                    </button>

                    <div class="d-flex gap-2">
                        <button class="btn btn-secondary btn-sm flex-fill" >
                            <i class="fas fa-edit"></i> Update
                        </button>
                        <button class="btn btn-danger btn-sm flex-fill" >
                            <i class="fas fa-trash"></i> Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</div>


<?php include "../config/user-footer.php" ?>