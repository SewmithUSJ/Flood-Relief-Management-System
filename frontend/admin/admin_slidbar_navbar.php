<?php include "../config/admin-header.php"; ?>
<div class="sidebar bg-dark">
    <div class="sidebar-header text-center">
        <img src="../images/logo.png" alt="Admin Logo" class="img-fluid p-3" style="max-height: 200px;">
    </div>

    <ul class="nav flex-column mt-4">
        <li class="nav-item">
            <a class="nav-link" href="admin_details.php" id="admin-details">
                <i class="fas fa-users"></i> Details
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="admin_summary.php" id="admin-summary">
                <i class="fas fa-chart-line"></i> Summary
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="admin_search.php" id="admin-search">
                <i class="fas fa-search"></i> Search
            </a>
        </li>
    </ul>

    <div class="logout-wrapper">
        <a href="../login&registration/login.html" class="btn btn-danger w-100 logout-btn"href="../login&register/login.html">
            <i class="fas fa-sign-out-alt"></i> Logout
        </a>
    </div>
</div>

