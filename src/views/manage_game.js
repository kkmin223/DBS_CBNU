const store = require('store')

exports.HTML = (approved_game_list,unapproved_game_list, summary,menubar)=> {
        return `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="description" content="">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <!-- The above 4 meta tags *must* come first in the head; any other head content must come *after* these tags -->
        
            <!-- Title  -->
            <title>Amado - Furniture Ecommerce Template | Cart</title>
        
            <!-- Favicon  -->
            <link rel="icon" href="img/core-img/favicon.ico">
        
            <!-- Core Style CSS -->
            <link rel="stylesheet" href="css/core-style.css">
            <link rel="stylesheet" href="style.css">
        
        </head>
        
        <body>
            <!-- Search Wrapper Area Start -->
            <div class="search-wrapper section-padding-100">
                <div class="search-close">
                    <i class="fa fa-close" aria-hidden="true"></i>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="search-content">
                                <form action="#" method="get">
                                    <input type="search" name="search" id="search" placeholder="Type your keyword...">
                                    <button type="submit"><img src="img/core-img/search.png" alt=""></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Search Wrapper Area End -->
        
            <!-- ##### Main Content Wrapper Start ##### -->
            <div class="main-content-wrapper d-flex clearfix">
        
                <!-- Mobile Nav (max width 767px)-->
                <div class="mobile-nav">
                    <!-- Navbar Brand -->
                    <div class="amado-navbar-brand">
                        <a href="index.html"><img src="img/core-img/logo.png" alt=""></a>
                    </div>
                    <!-- Navbar Toggler -->
                    <div class="amado-navbar-toggler">
                        <span></span><span></span><span></span>
                    </div>
                </div>
        
                <!-- Header Area Start -->
                <header class="header-area clearfix">
                    <!-- Close Icon -->
                    <div class="nav-close">
                        <i class="fa fa-close" aria-hidden="true"></i>
                    </div>
                    <!-- Logo -->
                    <div class="logo">
                        <a href="index.html"><img src="img/core-img/logo.png" alt=""></a>
                    </div>
                    <!-- Amado Nav -->
                    <nav class="amado-nav">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/shop">Shop</a></li>
                            <li><a href="/cart?user_id=${store.get('key').id}">Cart</a></li>
                            <li><a href="/logout">Logout</a></li>
                            <li class="active"><a href="/mypage">My Page</a></li>
                        </ul>
                    </nav>
                    <!-- Button Group -->
                    <div class="amado-btn-group mt-30 mb-100">
                    </div>
                    <!-- Cart Menu -->
                    <div class="cart-fav-search mb-100">
                        <a href="#" class="search-nav"><img src="img/core-img/search.png" alt=""> Search</a>
                    </div>
                    <!-- Social Button -->
                    <div class="social-info d-flex justify-content-between">
                        <a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a>
                        <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                        <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                        <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                    </div>
                </header>
                <!-- Header Area End -->
        
                <div class="cart-table-area section-padding-100">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12 col-lg-8">
                                <div class="cart-title mt-50">
                                    <h2>Approved Game List <a href="/mypage" class="btn btn-info" style=>Mypage</a></h2>
                                </div>
                                <div class="cart-table clearfix">
                                    <table class="table table-responsive">
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>Name</th>
                                                <th>Price</th>
                                                <th>Description</th>
                                                <th>System Requirements</th>
                                                <th>Rating</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                           ${approved_game_list}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="col-12 col-lg-4">
                                <div class="cart-summary">
                                    <h5>Game Total</h5>
                                        ${summary}
                                </div>
                            </div>
                            <div class="col-12 col-lg-8">
                                <div class="cart-title mt-50">
                                    <h2>UnApproved Game List</h2>
                                </div>
                                <div class="cart-table clearfix">
                                    <table class="table table-responsive">
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>Name</th>
                                                <th>Price</th>
                                                <th>Description</th>
                                                <th>System Requirements</th>
                                                <th>Rating</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                           ${unapproved_game_list}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- ##### Main Content Wrapper End ##### -->
        
            <!-- ##### Footer Area Start ##### -->
            <footer class="footer_area clearfix">
                <div class="container">
                    <div class="row align-items-center">
                    <!-- Single Widget Area -->
                    <div class="col-12 col-lg-4">
                        <div class="single_widget_area">
                            <!-- Logo -->
                            <div class="footer-logo mr-50">
                                <a href="/"><img src="img/core-img/logo2.png" alt=""></a>
                            </div>
                            <!-- Copywrite Text -->
                            <p class="copywrite"><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a> & Re-distributed by <a href="https://themewagon.com/" target="_blank">Themewagon</a>
    <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p>
                        </div>
                    </div>
    
                    <!-- Single Widget Area -->
                        <div class="col-12 col-lg-8">
                            <div class="single_widget_area">
                                <!-- Footer Menu -->
                                <div class="footer_menu">
                                    <nav class="navbar navbar-expand-lg justify-content-end">
                                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#footerNavContent" aria-controls="footerNavContent" aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-bars"></i></button>
                                        <div class="collapse navbar-collapse" id="footerNavContent">
                                            
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <!-- ##### Footer Area End ##### -->
        
            <!-- ##### jQuery (Necessary for All JavaScript Plugins) ##### -->
            <script src="js/jquery/jquery-2.2.4.min.js"></script>
            <!-- Popper js -->
            <script src="js/popper.min.js"></script>
            <!-- Bootstrap js -->
            <script src="js/bootstrap.min.js"></script>
            <!-- Plugins js -->
            <script src="js/plugins.js"></script>
            <!-- Active js -->
            <script src="js/active.js"></script>
        </body>
        
        </html>
        `
}

exports.approved_game_list = (games) => {
    let approved_game_list = '';
    for(let i=0; i<games.length; i++){
        approved_game_list += `<tr>
        <td class="del">
        <a href="/modify_game?company_id=${games[i].company_id}&game_name=${games[i].name}" class="btn btn-warning active">Modify</a>
        </td>
        <td class="name">
        <a href='/user_game_detail?company_id=${games[i].company_id}&game_name=${games[i].name}'><h5>${games[i].name}</h5></a>
    </td>
    <td class="price">
        <span>${games[i].price}</span>
    </td>
    <td class="description">
        <span>${games[i].description}</span>
    </td>
    <td class="requirements">
        <span>${games[i].system_requirements}</span>
    </td>
    <td class="rating">
        <span>${games[i].rating}</span>
    </td>
    <tr>`
    }
    return approved_game_list    
}

exports.unapproved_game_list = (games) => {
    let unapproved_game_list = '';
    for(let i=0; i<games.length; i++){
        unapproved_game_list += `<tr>
        <td class="del">
        <a href="/modify_game?company_id=${games[i].company_id}&game_name=${games[i].name}" class="btn btn-warning active">Modify</a>
        </td>
        <td class="name">
        <h5>${games[i].name}</h5>
    </td>
    <td class="price">
        <span>${games[i].price}</span>
    </td>
    <td class="description">
        <span>${games[i].description}</span>
    </td>
    <td class="requirements">
        <span>${games[i].system_requirements}</span>
    </td>
    <td class="rating">
        <span>${games[i].rating}</span>
    </td>
    <tr>`
    }
    return unapproved_game_list    
}

exports.summary = (approve_games, unapprove_games,company_id) => {
    let approval = approve_games.length;
    let unapproval = unapprove_games.length;
    console.log(`ID: ${company_id}`);
    console.log(`game: ${unapproval}   ${approval}`);
    return `<ul class="summary-table">
    <li><span>Company:</span> <span>${company_id}</span></li>
    <li><span>Approval Count:</span> <span>${approval}</span></li>
    <li><span>Unapproved Count:</span> <span>${unapproval}</span></li>
    </ul>`
}