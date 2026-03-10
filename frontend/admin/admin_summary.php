<?php include "admin_slidbar_navbar.php"; ?>

<div class="main-wrapper">
    <nav class="navbar navbar-dark bg-dark px-4">
        <span class="navbar-brand mb-0 h1">System Reports</span>
        <div class="ms-auto text-white">Administrator Access</div>
    </nav>

    <div class="container-fluid p-4">
        <h4 class="mb-4 text-secondary">Analytical Reports</h4>

        <div class="row g-4 mb-5">
            <div class="col-md-4">
                <div class="report-selector-card shadow-sm p-4 text-center" >
                    <i class="fas fa-map-marked-alt fa-3x text-primary mb-3"></i>
                    <h5>Area Wise Analysis</h5>
                    <p class="small text-muted">District Reports</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="report-selector-card shadow-sm p-4 text-center" >
                    <i class="fas fa-hands-helping fa-3x text-success mb-3"></i>
                    <h5>Relief Type Analysis</h5>
                    <p class="small text-muted">Resource Requirements</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="report-selector-card shadow-sm p-4 text-center" >
                    <i class="fas fa-house-damage fa-3x text-danger mb-3"></i>
                    <h5>Severity Analysis</h5>
                    <p class="small text-muted">Impact Summary</p>
                </div>
            </div>
        </div>

        <hr>

        <div id="area-report-section" class="report-content active-report">
            <div id="district-main-card" class="card shadow-sm border-0 mx-auto" style="max-width: 850px;">
                <div class="card-header bg-primary text-white">District Wise Summary</div>
                <div class="card-body p-0">
                    <table class="table table-hover mb-0 text-center">
                        <thead class="table-light">
                            <tr><th>District</th><th>Total Requests</th><th>Action</th></tr>
                        </thead>
                        <tbody id="district-total-table">
                            <tr>
                                <td>Kandy</td>
                                <td>20</td>
                                <td>
                                    <button class="btn btn-sm btn-primary" >
                                        View More
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>Colombo</td>
                                <td>20</td>
                                <td>
                                    <button class="btn btn-sm btn-primary" >
                                        View More
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>Gampaha</td>
                                <td>20</td>
                                <td>
                                    <button class="btn btn-sm btn-primary" >
                                        View More
                                    </button>
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </div>
</div>

<?php include "../config/admin-footer.php"; ?>