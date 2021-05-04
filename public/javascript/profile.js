function profile_setup_page() {
  cnsole = document.getElementById("console");
  body_page = document.getElementById("body_page");

  cnsole.innerHTML = "";
  body_page.innerHTML = "";

    cnsole.insertAdjacentHTML('afterbegin', "<button type='button' class='nav-link btn dropdown-toggle' data-bs-toggle='dropdown'aria-expanded='false'>     <img src='"+user_now.img_url+"' class='rounded-circle' alt='profile_pic' />     <span class='name'>"+ user_now.display_name +"</span>     <i class='fas fa-chevron-down'></i> </button> <div class='dropdown-menu dropdown-menu-end'>     <a class='dropdown-item' href='#'><i class='fas fa-user-alt'></i> Profile <br /><button             class='btn success'>View Profile</button></a><div class='dropdown-divider'></div> <a class='dropdown-item' href='#' onclick='home_setup_page()'><i class='fas fa-home'></i> Home</a> <div class='dropdown-divider'> </div> <a class='dropdown-item' href='#'><i class='fas fa-history'></i> History</a><div class='dropdown-divider'></div><a class='dropdown-item' href='#'><i class='fas fa-cog'></i> Settings</a><div class='dropdown-divider'></div><a class='dropdown-item' id='logout' href='#'><i class='fas fa-sign-out-alt'></i> Logout</a></div>");

    body_page.insertAdjacentHTML("afterbegin", `
    <!-- section 1 -->
    <section id="Profile" class="container overflow-hidden">
        <div class="col-md-8 p-lg-5 mx-auto my-5">
            <div class="mx-auto block position-relative">
                <div class="avatar-upload">
                    <div class="avatar-preview rounded-circle">
                        <div class="rounded-circle" id="imagePreview"
                            style="background-image: url(http://i.pravatar.cc/500?img=7);"></div>
                    </div>
                </div>
                <!-- <img id="imagePreview" src="/pictures/_MG_8982.jpg" class="rounded-circle d-block img_proflie" /> -->
                <!-- Button trigger modal -->
                <button class="btn avatar-edit default rounded-circle position-absolute bottom-0 end-0">
                    <!-- type="button" data-bs-toggle="modal" data-bs-target="#uploadimageModal" -->
                    <i class="fas fa-camera"></i>
                    <input type="file" id="imageUpload" accept=".png, .jpg, .jpeg" />
                </button>

            </div>

            <div class="container">
                <div id="input-name" class="row row-cols-2 justify-content-md-center justify-content-end mt-4 mx-auto">
                    <!-- <div class="col-sm-5 col-md-4 p-0"> -->
                    <div class="col-10">
                        <input id="fname" type="text" class="form-control name-profile text-center fs-4"
                            value="Sunisa Chanbang" readonly />
                    </div>
                    <!-- <div class="col-5 col-md-4 p-0"> -->
                    <!-- <input id="lname" type="text" class="form-control fs-4" size="ma" value="Chanbang" readonly /> -->
                    <!-- </div> -->
                    <!-- <span class="name-profile">Sunisa Chanbang</span> -->
                    <!-- <div class="col-2 col-md-1 p-0"> -->
                    <div class="col-2">
                        <button class="btn default">
                            <i class="fa fa-edit" onclick="editName(this)"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Challenge week -->
        <div class="card w-75 mx-auto mb-5">
            <div class="row row-cols-2 card-body justify-content-between">
                <h5 class="card-title col-12">Challenge Week</h5>
                <p class="card-text col-8">ลดแก้วพลาสติก 3 ชิ้น</p>
                <p class="card-text col-auto text-danger text-end">0/2</p>
            </div>
            <div class="card-footer bg-transparent">
                <small>สิ้นสุด 31/01/2564 23:59 น.</small>
            </div>
        </div>
        </div>
    </section>
    <!-- section 2 -->
    <section id="award" class="container position-relative overflow-hidden bg-image d-flex p-5">
        <div class="col-md-6 p-lg-5 mx-auto my-auto text-center">
            <div class="col-6 mx-auto">
                <img src="/public/IMG/recycle.png" class="card-img" alt="...">
            </div>
            <h1>Rank Gold</h1>
            <h1 class="display-4 mt-4">15 Challenge</h1>
        </div>
    </section>
    <!-- section 3 -->
    <section id="gallery" class="container overflow-hidden d-flex justify-content-center align-content-center p-0">
        <!-- grid image -->
        <div class="container-fluid p-0 position-relative">
            <div class="bg-overay h-100 w-100 position-absolute"></div>
            <div class="row row-cols-4 row-cols-sm-4 row-cols-md-4 g-0">
                <div class="col">
                    <img src="/public/IMG/_MG_8982.jpg" class="card-img" alt="...">
                </div>
                <div class="col">
                    <img src="/public/IMG/_MG_8982.jpg" class="card-img" alt="...">
                </div>
                <div class="col">
                    <img src="/public/IMG/_MG_8982.jpg" class="card-img" alt="...">
                </div>
                <div class="col">
                    <img src="/public/IMG/_MG_8982.jpg" class="card-img" alt="...">
                </div>
            </div>
            <div class="row row-cols-4 row-cols-sm-4 row-cols-md-4 g-0">
                <div class="col">
                    <img src="/public/IMG/_MG_8982.jpg" class="card-img" alt="...">
                </div>
                <div class="col">
                    <img src="/public/IMG/_MG_8982.jpg" class="card-img" alt="...">
                </div>
                <div class="col">
                    <img src="/public/IMG/_MG_8982.jpg" class="card-img" alt="...">
                </div>
                <div class="col">
                    <img src="/public/IMG/_MG_8982.jpg" class="card-img" alt="...">
                </div>
            </div>
            <div class="row row-cols-4 row-cols-sm-4 row-cols-md-4 g-0">
                <div class="col">
                    <img src="/public/IMG/_MG_8982.jpg" class="card-img" alt="...">
                </div>
                <div class="col">
                    <img src="/public/IMG/_MG_8982.jpg" class="card-img" alt="...">
                </div>
                <div class="col">
                    <img src="/public/IMG/_MG_8982.jpg" class="card-img" alt="...">
                </div>
                <div class="col">
                    <img src="/public/IMG/_MG_8982.jpg" class="card-img" alt="...">
                </div>
            </div>
        </div>
        <div class="outer-ring rounded-circle position-absolute align-self-center shadow"></div>
        <div class="middle-ring rounded-circle position-absolute align-self-center"></div>
        <div class="inner-ring rounded-circle position-absolute align-self-center"></div>
        <div class="text-center position-absolute align-self-center my-auto mx-auto">
            <h1 class="display-2">30,000</h1>
            <h1>Piece</h1>
        </div>
    </section>
    <!-- section 4 -->
    <section id="equal" class="container position-relative overflow-hidden bg-image d-flex p-5">
        <div class="container">
            <div class="row text-center">
                    <!-- Weight of plastic -->
                    <div class="card col-6 mx-auto ">
                        <div class="card-body mx-auto">
                            <h5 class="card-title">You've reduced plastic</h5>
                            <img src="/public/IMG/weight.png" class="card-img w-50 m-2" alt="...">
                           
                            <div class="col text-center">
                                <h1 class="display-2"><span>15</span> Kg.</h1>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </section>
    <!-- section 5 -->
    <section id="equal2" class="container position-relative overflow-hidden bg-image d-flex p-5">
        <div class="container">
            <div class="row row-cols-1 row-cols-md-3 mx-auto text-center">
                <div class="col">
                    <!-- Weight of plastic -->
                    <div class="card">
                        <div class="card-body">
                            <img src="/public/IMG/plastic type/005-bottle.png" class="card-img btn-type">
                            <br class="">
                            <p class="card-text">
                            <h1 class="display-1">1</h1>
                            <h1>Plastic bottle</h1>
                            </p>
                        </div>
                    </div>
                </div>
                <!-- icon equal -->
                <div class="col align-self-center my-5">
                    <h1>Save enough energy</h1>
                    
                </div>
                <!-- something equal weight -->
                <div class="col mx-auto">
                    <img src="/public/IMG/battery.png" class="card-img w-50" alt="...">
                    <!-- <i class="fas fa-bolt fa-9x"></i> -->
                    <div class="col text-center">
                        <h1>to power a</h1>
                        <h1 class="display-1"><span>60</span> Watt</h1>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- section 6 -->
    <section id="equal3" class="container position-relative overflow-hidden bg-image d-flex p-5">
        <div class="container">
            <div class="row row-cols-1 row-cols-md-3 mx-auto text-center">
                <div class="col">
                    <!-- Weight of plastic -->
                    <div class="card">
                        <div class="card-body">
                            <img src="/public/IMG/plastic type/005-bottle.png" class="card-img btn-type">
                            <br class="">
                            <p class="card-text">
                            <h1 class="display-1">1</h1>
                            <h1>Plastic bottle</h1>
                            </p>
                        </div>
                    </div>
                </div>
                <!-- icon equal -->
                <div class="col align-self-center my-5">
                    <i class="fas fa-equals fa-5x"></i>
                </div>
                <!-- something equal weight -->
                <div class="col mx-auto">
                    <img src="/public/IMG/lightbulb.png" class="card-img w-50" alt="...">
                    <!-- <i class="fas fa-lightbulb fa-9x"></i> -->
                    <div class="col text-center">
                        <h1>Light bulb for</h1>
                        <h1 class="display-1"><span>6</span> Hours</h1>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-add shadow-sm fixed-bottom ms-auto m-4" data-bs-toggle="modal"
        data-bs-target="#staticBackdrop">
        <i class="fas fa-plus fa-lg"></i>
    </button>
    <!-- Modal add -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Add item</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <!-- start modal body -->
                <div class="modal-body">
                    <div class="container overflow-hidden">
                        <div class="row">
                            <div class="col-sm-12 col-lg-6">
                                <div class="p-0">
                                    <!-- button plastic type -->
                                    <div id="plastic-type" class="row g-2 p-md-4">
                                        <!-- colum-1 -->
                                        <div class="d-grid gap-4 col-5 mx-auto">
                                            <button class="btn btn-plastic shadow" type="button"
                                                onclick="add_plastics_reduction_list('straw')">
                                                <img src="/public/IMG/plastic type/001-straw.png"
                                                    class="card-img btn-type">
                                                <br class="">
                                                <p>Straw</p>
                                            </button>
                                            <button class="btn btn-plastic shadow" type="button"
                                                onclick="add_plastics_reduction_list('package')">
                                                <img src="/public/IMG/plastic type/002-packaging.png"
                                                    class="card-img btn-type">
                                                <br class="">
                                                <p>Package</p>
                                            </button>
                                            <button class="btn btn-plastic shadow" type="button"
                                                onclick="add_plastics_reduction_list('bag')">
                                                <img src="/public/IMG/plastic type/003-bag.png"
                                                    class="card-img btn-type">
                                                <br class="">
                                                <p>Bag</p>
                                            </button>
                                        </div>
                                        <!-- colum-2 -->
                                        <div class="d-grid gap-4 col-5 mx-auto">
                                            <button class="btn btn-plastic shadow" type="button"
                                                onclick="add_plastics_reduction_list('cup')">
                                                <img src="/public/IMG/plastic type/004-cup.png"
                                                    class="card-img btn-type">
                                                <br class="">
                                                <p>Cup</p>
                                            </button>
                                            <button class="btn btn-plastic shadow" type="button"
                                                onclick="add_plastics_reduction_list('bottle')">
                                                <img src="/public/IMG/plastic type/005-bottle.png"
                                                    class="card-img btn-type">
                                                <br class="">
                                                <p>Bottle</p>
                                            </button>
                                            <button class="btn btn-plastic shadow" type="button"
                                                onclick="add_plastics_reduction_list('cutlery')">
                                                <img src="/public/IMG/plastic type/006-cutlery.png"
                                                    class="card-img btn-type">
                                                <br class="">
                                                <p>Cutlery</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12 col-lg-6 mt-4 p-0 p-md">
                                <div class="p-md-3" id="list">
                                    <h1>List</h1>
                                    <!-- start list item -->
                                    <!-- item -->
                                    <li class="list-group-item p-0">
                                        <div class="card mb-3 shadow">
                                            <div class="row row-cols-3 g-0 d-flex justify-content-between">
                                                <!-- upload image -->
                                                <div id="framePreview" class="col-md-4 position-relative">
                                                    <div class="col p-0 card-img-overlay">
                                                        <img id="imageAddPreview" class="card-img-start"
                                                            src="/public/IMG/_MG_8982.jpg" alt="...">
                                                    </div>
                                                    <input type="file" id="imageAddUpload" accept=".png, .jpg, .jpeg" />
                                                </div>
                                                <!-- Name type -->
                                                <div class="col-md-6 p ps-md-4">
                                                    <div class="card-body p-0">
                                                        <h5 class="card-title my-1">Package</h5>
                                                        <!-- quantity of plastic -->
                                                        <p class="card-text">
                                                        <div class="align-self-center">
                                                            <div class="w-100 btn-group shadow rounded-3" role="group">
                                                                <button class="btn" onclick="minusFunction()">-</button>
                                                                <input type="number" step="1" id="quantity"
                                                                    name="quantity" min="1" max="10" value="1" slot="2">
                                                                <button class="btn" onclick="plusFunction()">+</button>
                                                            </div>
                                                        </div>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="col-2 my-auto">
                                                    <!-- <button class="btn btn-remove btn-outline-primary" data-bs-toggle="modal" data-bs-target="#delete">
                                                        <i class="fas fa-trash-alt"></i>
                                                    </button> -->
                                                    <a class="btn btn-remove btn-outline-primary" data-bs-toggle="modal"
                                                        href="#delete" role="button"><i
                                                            class="fas fa-trash-alt"></i></a>

                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <!-- end list item -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end modal body -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-outline-primary align-text-center">Continue <i
                            class="fas fa-long-arrow-alt-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal delete -->
    <div class="modal fade" id="delete" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="deleteLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-sm">
            <div class="modal-content shadow-lg">
                <div class="modal-header">
                    <h5 class="modal-title" id="deleteLabel">Delete Item</h5>
                </div>
                <div class="modal-body">
                    คุณต้องการลบ item ออกจากรายการใช่หรือไม่
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary">Accept</button>
                </div>
            </div>
        </div>
    </div>
    <!--footer-->
    <footer>
        <div class="container">
            <div class="row align-items-start footer-text-l">
                <div class="col-12 col-sm-6 col-md-5 col-lg-4">
                    <h2>Contact</h2>
                    <p>Faculty of Information Technology
                        King Mongkut's Institute of Technology Ladkrabang
                    <p>1, Chalong Krung 1, Ladkrabang, Bangkok 10520</p>
                    </p>
                </div>

                <div class="col-12 col-sm-6 col-md-5 col-lg-4">
                    <a href="#">About Us</a> <br>
                    <a href="#">Article</a> <br>
                    <a href="#">Profile</a> <br>
                    <a href="#">Challenge</a>
                </div>

                <div class="col-12 col-md-2 col-lg-4 my-2 my-md-0 d-flex align-self-stretch justify-content-end">
                    <div class="round-button">
                        <div class="round-button-circle"><a href="#" class="round-button">TO TOP</a></div>
                    </div>
                </div>
                <hr>
                <div class="row align-items-start">
                    <div class="col-12 col-sm-6 col-md-6 col-lg-6" id="icon-contact">
                        <a href="https://github.com/SunisaChanbang/my-reduction-plastic" target="_blank"><img
                                src="/public/IMG/icon/github.svg" alt=""></a>
                        <a href="https://twitter.com/KaponPang" target="_blank"><img
                                src="/public/IMG/icon/facebook-app-logo.svg" alt=""></a>
                        <a href="https://www.instagram.com/k.panggg/" target="_blank"><img
                                src="/public/IMG/icon/instagram.svg" alt=""></a>
                    </div>
                    <div class="col-12 col-sm-6 col-md-6 col-lg-6 text-end">
                        <span>© Copyright 2021. All Right Reserved. Design My Reduction Plastic</span>
                    </div>
                </div>

            </div>
    </footer>
    `);

  
}
