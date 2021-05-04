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
    `);

  
}
