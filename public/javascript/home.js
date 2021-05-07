function home_setup_page() {
    cnsole = document.getElementById("console");
    body_page = document.getElementById("body_page");
  
    cnsole.innerHTML = "";
    body_page.innerHTML = "";
  
    cnsole.insertAdjacentHTML(
      "afterbegin",
      "<button type='button' class='nav-link btn dropdown-toggle' data-bs-toggle='dropdown'aria-expanded='false'>     <img src='" +
        user_now.img_url +
        "' class='rounded-circle' alt='profile_pic' />  <span class='name'>" +
        user_now.display_name +
        "</span>     <i class='fas fa-chevron-down'></i> </button> <div class='dropdown-menu dropdown-menu-end'>     <a class='dropdown-item' href='#'><i class='fas fa-user-alt'></i> Profile <br /><button             class='btn success' onclick='profile_setup_page()'>View Profile</button></a><div class='dropdown-divider'></div><a class='dropdown-item' href='#'><i class='fas fa-home'></i> Home</a> <div class='dropdown-divider'></div><a class='dropdown-item' href='#'><i class='fas fa-history'></i> History</a><div class='dropdown-divider'></div><a class='dropdown-item' href='#'><i class='fas fa-cog'></i> Settings</a><div class='dropdown-divider'></div><a class='dropdown-item' id='logout' href='#'><i class='fas fa-sign-out-alt'></i> Logout</a></div>"
    );
  
    body_page.insertAdjacentHTML("afterbegin",
        `
        <!--------------- Carousel --------------->
        <link href='https://fonts.googleapis.com/css?family=Droid+Sans:700|Droid+Serif' rel='stylesheet' type='text/css'>
      
        <div id="banner">
          <div id="bannertext">
            <h1 class="display-3 bannertext">วันนี้คุณใช้พลาสติกไปแล้วกี่ชิ้น ?</h1>
            <p class="bannertext">มาร่วมบันทึกสถิติการลดขยะพลาสติกของคุณกัน !</p>
            <a href="#" onclick="profile_setup_page()" class="btn btn-outline-success">เข้าร่วม</a>
          </div>
        </div>
      
        <!-------------- Content -------------->
        <div class="container pt-5">
          <div id="content">
            <q class="head-text display-1" data-aos="fade-up"> <br>
              reuse <br> reduce <br> recycle <br>
            </q><br>
            <img src="/public/IMG/index/6e8466b639560ee4dba09dc32829a794-1.jpg" alt="" class="img-fluid" data-aos="fade-up">
            <div class="p-6" data-aos="fade-up">
              <p>เว็บไซค์ของพวกเราจัดทำขึ้นมาเพื่อร่วมเป็นส่วนหนึ่ง
                ให้ทุกคนมีส่วนร่วมในการอนุรักษ์สิ่งแวดล้อมเล็กๆ
                ผ่านการบันทึกขยะพลาสติกที่ทุกคนได้ใช้
                เพื่อให้ผู้ใช้ตระหนักถึงการใช้พลาสติกในชีวิตประจำวัน
                ผ่านเว็บไซต์แอพพลิเคชั่น My Reduction Plastic</p>
            </div>
          </div>
      
          <div class="head-content" data-aos="zoom-in-up">
            <div class="head-img"><img src="/public/IMG/eco.png" class="img-fluid" alt="">
              <h1>เข้าร่วมลดขยะพลาสติกผ่านเว็บไซต์แอพพลิเคชั่น</h1>
            </div>
      
      
          </div>
      
          <div class="head-content" data-aos="zoom-in-up">
            <div class="head-img"><img src="/public/IMG/medal.png" class="img-fluid" alt="">
              <h1>แข่งขันล่าแต้มตามแคมเปญสุดพิเศษ</h1>
            </div>
      
          </div>
          <div class="head-content" data-aos="zoom-in-up">
            <div class="head-img"><img src="/public/IMG/heart.png" class="img-fluid" alt="">
              <h1>แชร์ให้โลกรู้ ว่าคุณคือสุดยอด Eco life!</h1>
            </div>
      
          </div>
      
      
      
      
      
          <div class="row">
            <div class="col-sm-12 col-lg-6 p-3 rank">
              <img src="/public/IMG/success.png" alt="" class="img-fluid rank-logo">
              <h2>Rank Of Week</h2>
              <table class="table-sm table table-responsive table-striped table-hover table-borderless">
                <thead>
                  <tr>
                    <th scope="col">Rank</th>
                    <th scope="col">Member</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col">Points</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td><img src="/public/IMG/user.png" alt=""></td>
                    <td colspan="2">Name Lastname</td>
                    <td>4304
                    </td>
                    <td><img src="/public/IMG/rank/gold.png" alt=""></td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td><img src="/public/IMG/user.png" alt=""></td>
                    <td colspan="2">Name Lastname</td>
                    <td>4304
                    </td>
                    <td><img src="/public/IMG/rank/gold.png" alt=""></td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td><img src="/public/IMG/user.png" alt=""></td>
                    <td colspan="2">Name Lastname</td>
                    <td>4304</td>
                    <td><img src="/public/IMG/rank/gold.png" alt=""></td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td><img src="/public/IMG/user.png" alt=""></td>
                    <td colspan="2">Name Lastname</td>
                    <td>4304</td>
                    <td><img src="/public/IMG/rank/gold.png" alt=""></td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td><img src="/public/IMG/user.png" alt=""></td>
                    <td colspan="2">Name Lastname</td>
                    <td>4304</td>
                    <td><img src="/public/IMG/rank/gold.png" alt=""></td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td><img src="/public/IMG/user.png" alt=""></td>
                    <td colspan="2">Name Lastname</td>
                    <td>4304</td>
                    <td><img src="/public/IMG/rank/gold.png" alt=""></td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td><img src="/public/IMG/user.png" alt=""></td>
                    <td colspan="2">Name Lastname</td>
                    <td>4304</td>
                    <td><img src="/public/IMG/rank/gold.png" alt=""></td>
                  </tr>
                  <tr>
                    <th scope="row">8</th>
                    <td><img src="/public/IMG/user.png" alt=""></td>
                    <td colspan="2">Name Lastname</td>
                    <td>4304</td>
                    <td><img src="/public/IMG/rank/gold.png" alt=""></td>
                  </tr>
                  <tr>
                    <th scope="row">9</th>
                    <td><img src="/public/IMG/user.png" alt=""></td>
                    <td colspan="2">Name Lastname</td>
                    <td>4304</td>
                    <td><img src="/public/IMG/rank/gold.png" alt=""></td>
                  </tr>
                  <tr>
                    <th scope="row">10</th>
                    <td><img src="/public/IMG/user.png" alt=""></td>
                    <td colspan="2">Name Lastname</td>
                    <td>4304</td>
                    <td><img src="/public/IMG/rank/gold.png" alt=""></td>
                  </tr>
                </tbody>
              </table>
            </div>
      
            <div class="col-lg-6 p-4 challenge">
              <img src="/public/IMG/podium.png" alt="" class="img-fluid">
              <h2>challenge this week</h2>
              <div class="card-challenge p-4">
                <h4>เก็บพลาสติกจำนวน 100 ชิ้น</h4>
                <p>ระดับ ★★★★★</p>
                <h5>รับคะแนน 100 Point</h5>
                <a href="profile.html" class="btn btn-outline-success">★ รับคำท้า ★</a>
              </div>
              <div class="card-challenge p-4">
                <h4>เก็บพลาสติกจำนวน 10 ชิ้น</h4>
                <p>ระดับ ★★</p>
                <h5>รับคะแนน 10 Point</h5>
                <a href="profile.html" class="btn btn-outline-success">★ รับคำท้า ★</a>
              </div>
              <div class="card-challenge p-4">
                <h4>เก็บพลาสติกจำนวน 30 ชิ้น</h4>
                <p>ระดับ ★★★</p>
                <h5>รับคะแนน 30 Point</h5>
                <a href="profile.html" class="btn btn-outline-success">★ รับคำท้า ★</a>
              </div>
            </div>
          </div>
      
          <div class="row justify-content-space-between p-4 mt-2" id="article">
            <h2>บทความล่าสุด</h2>
            <div class="col-sm-4 col-lg-4" data-aos="fade-up">
              <article class="card card--1">
                <div class="card__img"></div>
                <a href="#" class="card_link" onclick="content01_setup_page()">
                  <!--img hover-->
                  <div class="card__img--hover" data-bs-toggle="modal" data-bs-target="#exampleModal-1"></div>
                </a>
                <div class="card__info">
                  <span class="card__category">
                    <p class="text-tags">Tags: <a href="">พลาสติกรีไซเคิล</a></p>
                  </span>
                  <h2 class="card__title">I Am Plastic : พลาสติกคืออะไร?
                  </h2>
                  <a href="#" class="btn btn-outline-success" onclick="content01_setup_page()">อ่านเพิ่มเติม</a>
                </div>
              </article>
            </div>
            <div class="col-sm-4 col-lg-4" data-aos="fade-up">
              <article class="card card--2">
                <div class="card__img"></div>
                <a href="#" class="card_link" onclick="content02_setup_page()">
                  <!--img hover-->
                  <div class="card__img--hover" data-bs-toggle="modal" data-bs-target="#exampleModal-1"></div>
                </a>
                <div class="card__info">
                  <span class="card__category">
                    <p class="text-tags">Tags: <a href="">พลาสติกรีไซเคิล</a>, <a href="">ประเภทพลาสติกรีไซเคิล</a> </p>
                  </span>
                  <h2 class="card__title">7 ประเภทขยะพลาสติกที่รีไซเคิลได้
                  </h2>
                  <a href="#" class="btn btn-outline-success" onclick="content02_setup_page()">อ่านเพิ่มเติม</a>
                </div>
              </article>
            </div>
            <div class="col-sm-4 col-lg-4" data-aos="fade-up">
              <article class="card card--3">
                <div class="card__img"></div>
                <a href="#" class="card_link" onclick="content03_setup_page()">
                  <!--img hover-->
                  <div class="card__img--hover" data-bs-toggle="modal" data-bs-target="#exampleModal-1"></div>
                </a>
                <div class="card__info">
                  <span class="card__category">
                    <p class="text-tags">Tags: <a href="">พลาสติกรีไซเคิล</a></p>
                  </span>
                  <h2 class="card__title">ทำไมต้องลดการใช้พลาสติก?
                  </h2>
                  <a href="#" class="btn btn-outline-success" onclick="content03_setup_page()">อ่านเพิ่มเติม</a>
                </div>
              </article>
            </div>
            <a href="#" class="text-read" onclick="allcontent_setup_page()">
              <p>อ่านทั้งหมด >></p>
            </a>
      
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
                <a href="#" onclick="home_setup_page()">Home</a> <br>
                <a href="#" onclick="allcontent_setup_page()">Article</a> <br>
                <a href="#" onclick="profile_setup_page()">Profile</a> <br>
                <a href="#" onclick="home_setup_page()">Challenge</a>
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
                </div>
                <div class="col-12 col-sm-6 col-md-6 col-lg-6 text-end">
                  <span>© Copyright 2021. All Right Reserved. Design My Reduction Plastic</span>
                </div>
              </div>
            </div>
        </footer>
        `
    );
}