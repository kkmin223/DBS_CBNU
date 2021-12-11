const store = require('store')

exports.HTML = (game_list, category_set, menubar)=> {
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
            <title>Amado - Furniture Ecommerce Template | Shop</title>

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
                            ${menubar}
                        </ul>
                    </nav>
                    <!-- Button Group -->
                    <div class="amado-btn-group mt-30 mb-100">
                        <a href="#" class="btn amado-btn mb-15">%Discount%</a>
                        <a href="#" class="btn amado-btn active">New this week</a>
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

                <div class="shop_sidebar_area">

                    <!-- ##### Single Widget ##### -->
                    <div class="widget catagory mb-50">
                        <!-- Widget Title -->
                        <h6 class="widget-title mb-30">Catagories</h6>

                        <!--  Catagories  -->
                        <div class="catagories-menu">
                            ${category_set}
                        </div>
                    </div>
                </div>

                <div class="amado_product_area section-padding-100">
                    <div class="container-fluid">

                        <div class="row">
                            <div class="col-12">
                                <div class="product-topbar d-xl-flex align-items-end justify-content-between">
                                    <!-- Total Products -->
                                    <div class="total-products">
                                        <p>Games</p>
                                    </div>
                                    <!-- Sorting -->
                                    <div class="product-sorting d-flex">
                                        <div class="sort-by-date d-flex align-items-center mr-15">
                                            <p>Sort by</p>
                                            <form action="#" method="get">
                                                <select name="select" id="sortBydate">
                                                    <option value="value">Date</option>
                                                    <option value="value">Newest</option>
                                                    <option value="value">Popular</option>
                                                </select>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">

                            <!-- Single Product Area -->
                            ${game_list}
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
        <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
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

exports.game_list = (games) => {
    let game_list = '';
    for(let i=0; i<games.length; i++){
        const buffer = Buffer.from(games[i].img);
        const image = buffer.toString('base64');
        game_list += `<tr>
    <div class="col-12 col-sm-6 col-md-12 col-xl-6">
        <div class="single-product-wrapper">
            <!-- Product Image -->
            <div class="product-img">
                <img src="data:image/png;base64,${image}" alt="">
                <!-- Hover Thumb -->
                <img class="hover-img" src="data:image/png;base64,${image}" alt="">
            </div>

            <!-- Product Description -->
            <div class="product-description d-flex align-items-center justify-content-between">
                <!-- Product Meta Data -->
                <div class="product-meta-data">
                    <div class="line"></div>
                    <p class="product-price">${games[i].price}</p>
                    <a href="/user_game_detail?company_id=${games[i].company_id}&game_name=${games[i].name}">
                        <h6>${games[i].name}</h6>
                    </a>
                </div>
                <!-- Ratings & Cart -->
                <div class="ratings-cart text-right">
                    <div class="ratings">
                        <h6>${games[i].description}</h6>
                    </div>
                <div class="cart">
                    <a href="/cartplus?user_id=${store.get('key').id}&company_id=${games[i].company_id}&game_name=${games[i].name}&amount=${games[i].price}" data-toggle="tooltip" data-placement="left" title="Add to Cart"><img src="img/core-img/cart.png" alt=""></a>
                </div>
            </div>
        </div>
    </div>
</div>
    <tr>`
}
    return game_list    
}

exports.category_set = (category) => {
    let game_list = '';
    if(category == 'Action'){
        game_list += `<tr>
        <ul>
            <li><a href="/shop">All</a></li>
            <li class="active"><a href="/shop_category?category=${'Action'}">Action</a></li>
            <li><a href="/shop_category?category=${'Arcade'}">Arcade</a></li>
            <li><a href="/shop_category?category=${'Role Playing'}">Role Playing</a></li>
            <li><a href="/shop_category?category=${'Adventure'}">Adventure</a></li>
            <li><a href="/shop_category?category=${'Casual'}">Casual</a></li>
            <li><a href="/shop_category?category=${'Horror'}">Horror</a></li>
            <li><a href="/shop_category?category=${'Indie'}">Indie</a></li>
            <li><a href="/shop_category?category=${'MMO'}">MMO</a></li>
            <li><a href="/shop_category?category=${'Simulation'}">Simulation</a></li>
            <li><a href="/shop_category?category=${'Strategy'}">Strategy</a></li>
            <li><a href="/shop_category?category=${'FPS'}">FPS</a></li>
            <li><a href="/shop_category?category=${'Sports'}">Sports</a></li>
        </ul>
        <tr>`
    }
    else if(category == 'Arcade'){
        game_list += `<tr>
        <ul>
            <li><a href="/shop">All</a></li>
            <li><a href="/shop_category?category=${'Action'}">Action</a></li>
            <li class="active"><a href="/shop_category?category=${'Arcade'}">Arcade</a></li>
            <li><a href="/shop_category?category=${'Role Playing'}">Role Playing</a></li>
            <li><a href="/shop_category?category=${'Adventure'}">Adventure</a></li>
            <li><a href="/shop_category?category=${'Casual'}">Casual</a></li>
            <li><a href="/shop_category?category=${'Horror'}">Horror</a></li>
            <li><a href="/shop_category?category=${'Indie'}">Indie</a></li>
            <li><a href="/shop_category?category=${'MMO'}">MMO</a></li>
            <li><a href="/shop_category?category=${'Simulation'}">Simulation</a></li>
            <li><a href="/shop_category?category=${'Strategy'}">Strategy</a></li>
            <li><a href="/shop_category?category=${'FPS'}">FPS</a></li>
            <li><a href="/shop_category?category=${'Sports'}">Sports</a></li>
        </ul>
        <tr>`
    }
    else if(category == 'Role Playing'){
        game_list += `<tr>
        <ul>
            <li><a href="/shop">All</a></li>
            <li><a href="/shop_category?category=${'Action'}">Action</a></li>
            <li><a href="/shop_category?category=${'Arcade'}">Arcade</a></li>
            <li class="active"><a href="/shop_category?category=${'Role Playing'}">Role Playing</a></li>
            <li><a href="/shop_category?category=${'Adventure'}">Adventure</a></li>
            <li><a href="/shop_category?category=${'Casual'}">Casual</a></li>
            <li><a href="/shop_category?category=${'Horror'}">Horror</a></li>
            <li><a href="/shop_category?category=${'Indie'}">Indie</a></li>
            <li><a href="/shop_category?category=${'MMO'}">MMO</a></li>
            <li><a href="/shop_category?category=${'Simulation'}">Simulation</a></li>
            <li><a href="/shop_category?category=${'Strategy'}">Strategy</a></li>
            <li><a href="/shop_category?category=${'FPS'}">FPS</a></li>
            <li><a href="/shop_category?category=${'Sports'}">Sports</a></li>
        </ul>
        <tr>`
    }
    else if(category == 'Adventure'){
        game_list += `<tr>
        <ul>
            <li><a href="/shop">All</a></li>
            <li><a href="/shop_category?category=${'Action'}">Action</a></li>
            <li><a href="/shop_category?category=${'Arcade'}">Arcade</a></li>
            <li><a href="/shop_category?category=${'Role Playing'}">Role Playing</a></li>
            <li class="active"><a href="/shop_category?category=${'Adventure'}">Adventure</a></li>
            <li><a href="/shop_category?category=${'Casual'}">Casual</a></li>
            <li><a href="/shop_category?category=${'Horror'}">Horror</a></li>
            <li><a href="/shop_category?category=${'Indie'}">Indie</a></li>
            <li><a href="/shop_category?category=${'MMO'}">MMO</a></li>
            <li><a href="/shop_category?category=${'Simulation'}">Simulation</a></li>
            <li><a href="/shop_category?category=${'Strategy'}">Strategy</a></li>
            <li><a href="/shop_category?category=${'FPS'}">FPS</a></li>
            <li><a href="/shop_category?category=${'Sports'}">Sports</a></li>
        </ul>
        <tr>`
    }
    else if(category == 'Casual'){
        game_list += `<tr>
        <ul>
            <li><a href="/shop">All</a></li>
            <li><a href="/shop_category?category=${'Action'}">Action</a></li>
            <li><a href="/shop_category?category=${'Arcade'}">Arcade</a></li>
            <li><a href="/shop_category?category=${'Role Playing'}">Role Playing</a></li>
            <li><a href="/shop_category?category=${'Adventure'}">Adventure</a></li>
            <li class="active"><a href="/shop_category?category=${'Casual'}">Casual</a></li>
            <li><a href="/shop_category?category=${'Horror'}">Horror</a></li>
            <li><a href="/shop_category?category=${'Indie'}">Indie</a></li>
            <li><a href="/shop_category?category=${'MMO'}">MMO</a></li>
            <li><a href="/shop_category?category=${'Simulation'}">Simulation</a></li>
            <li><a href="/shop_category?category=${'Strategy'}">Strategy</a></li>
            <li><a href="/shop_category?category=${'FPS'}">FPS</a></li>
            <li><a href="/shop_category?category=${'Sports'}">Sports</a></li>
        </ul>
        <tr>`
    }
    else if(category == 'Horror'){
        game_list += `<tr>
        <ul>
            <li><a href="/shop">All</a></li>
            <li><a href="/shop_category?category=${'Action'}">Action</a></li>
            <li><a href="/shop_category?category=${'Arcade'}">Arcade</a></li>
            <li><a href="/shop_category?category=${'Role Playing'}">Role Playing</a></li>
            <li><a href="/shop_category?category=${'Adventure'}">Adventure</a></li>
            <li><a href="/shop_category?category=${'Casual'}">Casual</a></li>
            <li class="active"><a href="/shop_category?category=${'Horror'}">Horror</a></li>
            <li><a href="/shop_category?category=${'Indie'}">Indie</a></li>
            <li><a href="/shop_category?category=${'MMO'}">MMO</a></li>
            <li><a href="/shop_category?category=${'Simulation'}">Simulation</a></li>
            <li><a href="/shop_category?category=${'Strategy'}">Strategy</a></li>
            <li><a href="/shop_category?category=${'FPS'}">FPS</a></li>
            <li><a href="/shop_category?category=${'Sports'}">Sports</a></li>
        </ul>
        <tr>`
    }
    else if(category == 'Indie'){
        game_list += `<tr>
        <ul>
            <li><a href="/shop">All</a></li>
            <li><a href="/shop_category?category=${'Action'}">Action</a></li>
            <li><a href="/shop_category?category=${'Arcade'}">Arcade</a></li>
            <li><a href="/shop_category?category=${'Role Playing'}">Role Playing</a></li>
            <li><a href="/shop_category?category=${'Adventure'}">Adventure</a></li>
            <li><a href="/shop_category?category=${'Casual'}">Casual</a></li>
            <li><a href="/shop_category?category=${'Horror'}">Horror</a></li>
            <li class="active"><a href="/shop_category?category=${'Indie'}">Indie</a></li>
            <li><a href="/shop_category?category=${'MMO'}">MMO</a></li>
            <li><a href="/shop_category?category=${'Simulation'}">Simulation</a></li>
            <li><a href="/shop_category?category=${'Strategy'}">Strategy</a></li>
            <li class="active"><a href="/shop_category?category=${'FPS'}">FPS</a></li>
            <li><a href="/shop_category?category=${'Sports'}">Sports</a></li>
        </ul>
        <tr>`
    }
    else if(category == 'MMO'){
        game_list += `<tr>
        <ul>
            <li><a href="/shop">All</a></li>
            <li><a href="/shop_category?category=${'Action'}">Action</a></li>
            <li><a href="/shop_category?category=${'Arcade'}">Arcade</a></li>
            <li><a href="/shop_category?category=${'Role Playing'}">Role Playing</a></li>
            <li><a href="/shop_category?category=${'Adventure'}">Adventure</a></li>
            <li><a href="/shop_category?category=${'Casual'}">Casual</a></li>
            <li><a href="/shop_category?category=${'Horror'}">Horror</a></li>
            <li><a href="/shop_category?category=${'Indie'}">Indie</a></li>
            <li class="active"><a href="/shop_category?category=${'MMO'}">MMO</a></li>
            <li><a href="/shop_category?category=${'Simulation'}">Simulation</a></li>
            <li><a href="/shop_category?category=${'Strategy'}">Strategy</a></li>
            <li><a href="/shop_category?category=${'FPS'}">FPS</a></li>
            <li><a href="/shop_category?category=${'Sports'}">Sports</a></li>
        </ul>
        <tr>`
    }
    else if(category == 'Simulation'){
        game_list += `<tr>
        <ul>
            <li><a href="/shop">All</a></li>
            <li><a href="/shop_category?category=${'Action'}">Action</a></li>
            <li><a href="/shop_category?category=${'Arcade'}">Arcade</a></li>
            <li><a href="/shop_category?category=${'Role Playing'}">Role Playing</a></li>
            <li><a href="/shop_category?category=${'Adventure'}">Adventure</a></li>
            <li><a href="/shop_category?category=${'Casual'}">Casual</a></li>
            <li><a href="/shop_category?category=${'Horror'}">Horror</a></li>
            <li><a href="/shop_category?category=${'Indie'}">Indie</a></li>
            <li><a href="/shop_category?category=${'MMO'}">MMO</a></li>
            <li class="active"><a href="/shop_category?category=${'Simulation'}">Simulation</a></li>
            <li><a href="/shop_category?category=${'Strategy'}">Strategy</a></li>
            <li><a href="/shop_category?category=${'FPS'}">FPS</a></li>
            <li><a href="/shop_category?category=${'Sports'}">Sports</a></li>
        </ul>
        <tr>`
    }
    else if(category == 'Strategy'){
        game_list += `<tr>
        <ul>
            <li><a href="/shop">All</a></li>
            <li><a href="/shop_category?category=${'Action'}">Action</a></li>
            <li><a href="/shop_category?category=${'Arcade'}">Arcade</a></li>
            <li><a href="/shop_category?category=${'Role Playing'}">Role Playing</a></li>
            <li><a href="/shop_category?category=${'Adventure'}">Adventure</a></li>
            <li><a href="/shop_category?category=${'Casual'}">Casual</a></li>
            <li><a href="/shop_category?category=${'Horror'}">Horror</a></li>
            <li><a href="/shop_category?category=${'Indie'}">Indie</a></li>
            <li><a href="/shop_category?category=${'MMO'}">MMO</a></li>
            <li><a href="/shop_category?category=${'Simulation'}">Simulation</a></li>
            <li class="active"><a href="/shop_category?category=${'Strategy'}">Strategy</a></li>
            <li><a href="/shop_category?category=${'FPS'}">FPS</a></li>
            <li><a href="/shop_category?category=${'Sports'}">Sports</a></li>
        </ul>
        <tr>`
    }
    else if(category == 'FPS'){
        game_list += `<tr>
        <ul>
            <li><a href="/shop">All</a></li>
            <li><a href="/shop_category?category=${'Action'}">Action</a></li>
            <li><a href="/shop_category?category=${'Arcade'}">Arcade</a></li>
            <li><a href="/shop_category?category=${'Role Playing'}">Role Playing</a></li>
            <li><a href="/shop_category?category=${'Adventure'}">Adventure</a></li>
            <li><a href="/shop_category?category=${'Casual'}">Casual</a></li>
            <li><a href="/shop_category?category=${'Horror'}">Horror</a></li>
            <li><a href="/shop_category?category=${'Indie'}">Indie</a></li>
            <li><a href="/shop_category?category=${'MMO'}">MMO</a></li>
            <li><a href="/shop_category?category=${'Simulation'}">Simulation</a></li>
            <li><a href="/shop_category?category=${'Strategy'}">Strategy</a></li>
            <li class="active"><a href="/shop_category?category=${'FPS'}">FPS</a></li>
            <li><a href="/shop_category?category=${'Sports'}">Sports</a></li>
        </ul>
        <tr>`
    }
    else if(category == 'Sports'){
        game_list += `<tr>
        <ul>
            <li><a href="/shop">All</a></li>
            <li><a href="/shop_category?category=${'Action'}">Action</a></li>
            <li><a href="/shop_category?category=${'Arcade'}">Arcade</a></li>
            <li><a href="/shop_category?category=${'Role Playing'}">Role Playing</a></li>
            <li><a href="/shop_category?category=${'Adventure'}">Adventure</a></li>
            <li><a href="/shop_category?category=${'Casual'}">Casual</a></li>
            <li><a href="/shop_category?category=${'Horror'}">Horror</a></li>
            <li><a href="/shop_category?category=${'Indie'}">Indie</a></li>
            <li><a href="/shop_category?category=${'MMO'}">MMO</a></li>
            <li><a href="/shop_category?category=${'Simulation'}">Simulation</a></li>
            <li><a href="/shop_category?category=${'Strategy'}">Strategy</a></li>
            <li><a href="/shop_category?category=${'FPS'}">FPS</a></li>
            <li class="active"><a href="/shop_category?category=${'Sports'}">Sports</a></li>
        </ul>
        <tr>`
    }

    return game_list    
}

//로그인 안한 상태로, 사이드바 메뉴에 Login이 있다.
//로그인 한 상태로, 사이드 메뉴에 Login 대신 Logout이 있다.
exports.menubar = () =>{
    let menubar = '';
    if(store.get('key').id == null){
        menubar += `                          
        <li><a href="/">Home</a></li>
        <li class="active"><a href="/shop">Shop</a></li>
        <li><a href="/cart">Cart</a></li>
        <li><a href="/login_user">Login</a></li>`
    }
    else{
        menubar += `                            
        <li><a href="/">Home</a></li>
        <li class="active"><a href="/shop">Shop</a></li>
        <li><a href="/cart?user_id=${store.get('key').id}">Cart</a></li>
        <li><a href="/logout">Logout</a></li>
        <li><a href="/mypage">My Page</a></li>`
    }

    return menubar
}