<?php include "../config/user-header.php"; ?>

<div class="sidebar bg-dark">
    <div class="sidebar-header text-center">
        <img src="../images/logo.png" alt="Logo" class="img-fluid p-3" style="max-height: 200px;">
    </div>

    <ul class="nav flex-column mt-4">
    
        <li class="nav-item">
    <a id="nav-request" class="nav-link" href="user_request.php">
        <i class="fas fa-plus-circle"></i> Request
    </a>
</li>
<li class="nav-item">
    <a id="nav-view" class="nav-link" href="user_view_request.php" >
        <i class="fas fa-eye"></i> View Request
    </a>
</li>
    </ul>

    <div class="logout-wrapper">
        <a href="logout.php" class="btn btn-danger w-100 logout-btn">
            <i class="fas fa-sign-out-alt"></i> Logout
        </a>
    </div>
</div>

