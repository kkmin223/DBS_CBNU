const store = require('store')

exports.HTML = (game_detail,menubar) => {
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
    <title>Amado - Furniture Ecommerce Template | Product Details</title>

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

        <!-- Product Details Area Start -->
            ${game_detail}
        <!-- Product Details Area End -->
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

exports.game_detail = (game, category, language) =>{
    const buffer = Buffer.from(game[0].img);
    const image = buffer.toString('base64');
    return `
    <div class="single-product-area section-padding-100 clearfix">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mt-50">
                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                        <li class="breadcrumb-item"><a href="/shop">Shop</a></li>
                        <li class="breadcrumb-item active" aria-current="page">${game[0].name}</li>
                    </ol>
                </nav>
            </div>
        </div>

        <div class="row">
            <div class="col-12 col-lg-7">
                <div class="single_product_thumb">
                    <div id="product_details_slider" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <a class="gallery_img" href="data:image/png;base64,${image}">
                                    <img class="d-block w-100" src="data:image/png;base64,${image}" alt="First slide">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-5">
                <div class="single_product_desc">
                    <!-- Product Meta Data -->
                    <div class="product-meta-data">
                        <div class="line"></div>
                            <p class="product-price">${game[0].price} ￦</p>
                            <h6>${game[0].name}</h6>
                            
                    <!-- Ratings & Review -->
                    <div class="ratings-review mb-15 d-flex align-items-center justify-content-between">
                        <div class="ratings">
                            Rating : ${game[0].rating}
                        </div>
                        </br>
                    </div>
                    <div class="release_date">
                            Release Date : ${game[0].release_date}</br>
                        </div>
                    <div class="mb-15 d-flex">
                        <div class="category">
                            Category
                                ${category}
                        </div>
                        <div class="language ml-5">
                            Language
                                ${language}
                        </div>
                    </div>
                    <div class="system_requirements mb-15  align-items-center">
                        System Requirements
                        <ol>${game[0].system_requirements}</ol>
                    </div>
                </div>
                <!-- Add to Cart Form -->
                <form class="cart clearfix" action="approve_game" method="post">
                <input type="text" style="display:none;" class="form-control" name="name" id="game_name" value="${game[0].name}" placeholder="Game Name" readonly>
                <input type="text" style="display:none;" class="form-control" name="company_id" id="company_id" value="${game[0].company_id}" placeholder="Game Name" readonly>
                <button type="submit" name="addtocart" value="5" class="btn amado-btn">APPROVE</button>
                </form>
                </div>
            </div>
        </div>
    </div>
</div>
    `
}

exports.category = (categories) => {
    let result = ''
    for(let i = 0; i< categories.length; i++){
        result += `<li>${categories[i].category}</li>`
    }
    return result;
}

exports.language = (languages) => {
    let result = ''
    for(let i = 0; i< languages.length; i++){
        result += `<li>${languages[i].language}</li>`
    }
    return result;
}

//로그인 안한 상태로, 사이드바 메뉴에 Login이 있다.
//로그인 한 상태로, 사이드 메뉴에 Login 대신 Logout이 있다.
exports.menubar = () =>{
    let menubar = '';
    if(store.get('key').id == null){
        menubar += `                          
        <li><a href="/">Home</a></li>
        <li><a href="/shop">Shop</a></li>
        <li><a href="#">Product</a></li>
        <li><a href="/cart">Cart</a></li>
        <li><a href="/login_user">Login</a></li>`
    }
    else{
        menubar += `                            
        <li><a href="/">Home</a></li>
        <li><a href="/shop">Shop</a></li>
        <li ><a href="#">Product</a></li>
        <li><a href="/cart?user_id=${store.get('key').id}">Cart</a></li>
        <li><a href="/logout">Logout</a></li>
        <li class="active"><a href="/mypage">My Page</a></li>`
    }

    return menubar
}