exports.HTML = () => {
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
    <title>Amado - Furniture Ecommerce Template | Checkout</title>

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
                    <li><a href="index.html">Home</a></li>
                    <li><a href="shop.html">Shop</a></li>
                    <li><a href="product-details.html">Product</a></li>
                    <li><a href="cart.html">Cart</a></li>
                    <li class="active"><a href="checkout.html">Checkout</a></li>
                </ul>
            </nav>
            <!-- Button Group -->
            <div class="amado-btn-group mt-30 mb-100">
                <a href="#" class="btn amado-btn mb-15">%Discount%</a>
                <a href="#" class="btn amado-btn active">New this week</a>
            </div>
            <!-- Cart Menu -->
            <div class="cart-fav-search mb-100">
                <a href="cart.html" class="cart-nav"><img src="img/core-img/cart.png" alt=""> Cart <span>(0)</span></a>
                <a href="#" class="fav-nav"><img src="img/core-img/favorites.png" alt=""> Favourite</a>
                <a href="#" class="search-nav"><img src="img/core-img/search.png" alt=""> Search</a>
            </div>
            <!-- Social Button -->
            <div class="social-info d-flex justify-content-between">
                <a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>no
            </div>
        </header>
        <!-- Header Area End -->

        <div class="cart-table-area section-padding-100">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 col-lg-8">
                        <div class="checkout_details_area mt-50 clearfix">
                            <div class="cart-title">
                                <h2>Register Game</h2>
                            </div>
                            <form action="/regist_game" method="post"  enctype="multipart/form-data">
                                <div class="row">
                                    <div class="col-md-12 mb-3">
                                        <label>Game Image</label><br>
                                        <input type="file" name="game_img" id="game_img" accept="image/*">
                                    </div>
                                    <div class="col-md-12 mb-3">
                                        <label>Game Name</label>
                                        <input type="text" class="form-control" name="name" id="game_name" value="" placeholder="Game Name" required>
                                    </div>
                                    <div class="col-12 mb-3">
                                        <label>Category</label>
                                        <table width="100%">
                                            <tr>
                                                <td><input type="checkbox" name="category" value="Action">Action</input></td>
                                                <td><input type="checkbox" name="category" value="Arcade">Arcade</input></td>
                                                <td><input type="checkbox" name="category" value="Role Playing">Role Playing</input></td>
                                            </tr>
                                            <tr>
                                                <td> <input type="checkbox" name="category" value="Adventure">Adventure</input></td>
                                                <td> <input type="checkbox" name="category" value="Casual">Casual</input></td>
                                                <td><input type="checkbox" name="category" value="Horror">Horror</input></td>
                                            </tr>
                                            <tr>
                                                <td> <input type="checkbox" name="category" value="Indie">Indie</input></td>
                                                <td><input type="checkbox" name="category" value="MMO">MMO</input></td>
                                                <td><input type="checkbox" name="category" value="Simulation">Simulation</input></td>
                                            </tr>
                                            <tr>
                                                <td> <input type="checkbox" name="category" value="Strategy">Strategy</input></td>
                                                <td><input type="checkbox" name="category" value="FPS">FPS</input></td>
                                                <td><input type="checkbox" name="category" value="Sports">Sports</input></td>
                                            </tr>
                                        </table> 
                                    </div>
                                    <div class="col-12 mb-3">
                                        <label>Language</label>
                                        <table width="100%">
                                            <tr>
                                                <td> <input type="checkbox" name="language" value="korean">Korean</input></td>
                                                <td> <input type="checkbox" name="language" value="english">English</input></td>
                                            </tr>
                                            <tr>
                                                <td> <input type="checkbox" name="language" value="chinese">Chinese</input></td>
                                                <td>  <input type="checkbox" name="language" value="japanese">Japanese</input></td>

                                            </tr>
                                            <tr>
                                                <td>  <input type="checkbox" name="language" value="french">French</input></td>
                                                <td> <input type="checkbox" name="language" value="german">German</input></td>
                                            </tr>
                                        </table>    
                                    </div>
                                    <div class="col-6 mb-3">
                                    </div>
                                    <div class="col-6 mb-3">
                                    </div>
                                    <div class="col-md-4 mb-3">
                                        <label>Release Date</label>
                                        <input type="date" class="form-control" name="release_date" id="release_date" value="2021-12-05" required>
                                    </div>
                                    <div class="col-4 mb-3">
                                        <label>Price</label>
                                        <input type="text" class="form-control"  name="price" id="price" placeholder="Price" value=""> 
                                    </div>
                                    <div class="col-4 mb-3">
                                        <label>Rating</label>
                                        <select class="w-100" name="rating" id="rating">
                                        <option value="R">전체 이용가</option>
                                        <option value="12">12세 이상 이용가능</option>
                                        <option value="15">15세 이상 이용가능</option>
                                        <option value="19">19세 이상 이용가능</option>
                                        </select>
                                    </div>
                                    <div class="col-12 mb-3">
                                        <label>System Requirements</label>
                                        <textarea name="system_requirements" class="form-control w-100" id="system_requirements" cols="30" rows="5" placeholder="Leave a system requirements about your game"></textarea>
                                    </div>
                                    <div class="col-12 mb-3">
                                        <label>Description</label>
                                        <textarea name="description" class="form-control w-100" id="description" cols="30" rows="10" placeholder="Leave a description about your game"></textarea>
                                    </div>
                                    <div class="cart-btn mt-100">
                                        <input type="submit" value="Register" class="btn amado-btn">
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- ##### Main Content Wrapper End ##### -->

    <!-- ##### Newsletter Area Start ##### -->
    <section class="newsletter-area section-padding-100-0">
        <div class="container">
            <div class="row align-items-center">
                <!-- Newsletter Text -->
                <div class="col-12 col-lg-6 col-xl-7">
                    <div class="newsletter-text mb-100">
                        <h2>Subscribe for a <span>25% Discount</span></h2>
                        <p>Nulla ac convallis lorem, eget euismod nisl. Donec in libero sit amet mi vulputate consectetur. Donec auctor interdum purus, ac finibus massa bibendum nec.</p>
                    </div>
                </div>
                <!-- Newsletter Form -->
                <div class="col-12 col-lg-6 col-xl-5">
                    <div class="newsletter-form mb-100">
                        <form action="#" method="post">
                            <input type="email" name="email" class="nl-email" placeholder="Your E-mail">
                            <input type="submit" value="Subscribe">
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- ##### Newsletter Area End ##### -->

    <!-- ##### Footer Area Start ##### -->
    <footer class="footer_area clearfix">
        <div class="container">
            <div class="row align-items-center">
                <!-- Single Widget Area -->
                <div class="col-12 col-lg-4">
                    <div class="single_widget_area">
                        <!-- Logo -->
                        <div class="footer-logo mr-50">
                            <a href="index.html"><img src="img/core-img/logo2.png" alt=""></a>
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
                                    <ul class="navbar-nav ml-auto">
                                        <li class="nav-item active">
                                            <a class="nav-link" href="index.html">Home</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="shop.html">Shop</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="product-details.html">Product</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="cart.html">Cart</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="checkout.html">Checkout</a>
                                        </li>
                                    </ul>
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