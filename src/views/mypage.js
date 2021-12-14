const store = require('store');

exports.HTML = (show_info)=>{
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="description" content="">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <!-- The above 4 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    
        <!-- Title  -->
        <title>DBS_projct | SignUp</title>
    
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
                    <a href="/"><img src="img/core-img/logo.png" alt=""></a>
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
                    <a href="/"><img src="img/core-img/logo.png" alt=""></a>
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
                            ${show_info}
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
    
    </html>`
}

exports.show_info = (info,date) => {
    let show_info = "";
    

            if(store.get('key').type=='user'){
                show_info += 
                `<div class="login_details_area mt-50 clearfix">
    <div class="login-title">
        <h2>My Page</h2>
    </div>
    <div>
        <h5>Welcom, ${info[0].name}!</h5>
    </div>
        <div class="row">
            <div class="col-12 mb-3">
            </br><label>ID</label>
                <input type="text" class="form-control" name="id" id="id" value="${info[0].id}"  readonly>
            </div>
            <div class="col-12 mb-3">
                <label>Password</label>
                <input type="text" class="form-control" name="password" id="password" value="${info[0].password}"  readonly>
            </div>
            <div class="col-12 mb-3">
                <label>Name</label>
                <input type="text" class="form-control" name="name" id="name" value="${info[0].name}"  readonly>
            </div> 
                <div class="col-12 mb-3">
                    <label>Birthdate</label>
                    <input type="text" class="form-control" name="birthdate" id="birthdate" value="${date[0].simple_date}"  readonly>
                </div>
                <div class="col-12 mb-3">
                    <label>Email</label>
                    <input type="email" class="form-control" name="email" id="email" value="${info[0].email}"  readonly>
                </div>
                <div class="col-md-6 mb-3">
                    <label>Phone Number</label>
                    <input type="text" class="form-control" name="phone" id="phone" min="0" value="${info[0].phone}"  readonly>
                </div>
                `}
            else{
                show_info +=
                `<div class="login_details_area mt-50 clearfix">
    <div class="login-title">
        <h2>My Page</h2>
    </div>
    <div>
        <h5>Welcom, ${info[0].name}!  <a href="/regist_game" class="btn btn-info" style=>Regist Game</a> <a href="/manage_game" class="btn btn-info" style=>Manage Game</a></h5>
    </div>
        <div class="row">
            <div class="col-12 mb-3">
            </br><label>ID</label>
                <input type="text" class="form-control" name="id" id="id" value="${info[0].id}"  readonly>
            </div>
            <div class="col-12 mb-3">
                <label>Password</label>
                <input type="text" class="form-control" name="password" id="password" value="${info[0].password}"  readonly>
            </div>
            <div class="col-12 mb-3">
                <label>Name</label>
                <input type="text" class="form-control" name="name" id="name" value="${info[0].name}"  readonly>
            </div>
                <div class="col-md-6 mb-3">
                    <label>Hompage</label>
                    <input type="text" class="form-control" name="homepage" id="homepage" value="${info[0].homepage}"  readonly>
                </div>
                <div class="col-md-6 mb-3">
                    <label>Phone Number</label>
                    <input type="text" class="form-control" name="phone" id="phone" min="0" value="${info[0].phone}"  readonly>
                </div>`}
                
            show_info += `</div>
            <div class="col-12">
                Address
            </div>
            <div class="col-4" style ="float:left">
                <input type="text" class="form-control" name="city" id="city" value="${info[0].city}"  readonly>
            </div>
            <div class="col-4" style ="float:left">
                <input type="text" class="form-control" name="ku" id="ku" value="${info[0].ku}"  readonly>
            </div>
            <div class="col-4" style ="float:left">
                <input type="text" class="form-control" name="dong" id="dong" value="${info[0].dong}"  readonly>
            </div>
        </div>
    </div> `

    return show_info
}