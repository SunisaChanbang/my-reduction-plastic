function allcontent_setup_page() {
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
        <div id="carousel-IT" class="carousel slide carousel-fade">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src="/public/IMG/content/pic01.jpg" alt="...">
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="/public/IMG/content/pic02.jpg" alt="...">
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="/public/IMG/content/pic04.jpg" alt="...">
            </div>
          </div>
          <a href="#carousel-IT" role="button" class="carousel-control-prev" data-bs-slide="prev">
            <span class="visually-hidden">Previos</span>
          </a>
          <a href="#carousel-IT" role="button" class="carousel-control-next" data-bs-slide="next">
            <span class="visually-hidden">Next</span></a>
        </div>
      
        <!-------------- Content -------------->
        <div class="container pt-4">
          <p class="nav-content"> <a href="home.html" onclick="home_setup_page()">หน้าหลัก</a> / <span class="nav-content-active">บทความ</span> </p>
          <h1>บทความที่เกี่ยวข้อง</h1>
          <hr>
          <div class="row justify-content-space-between">
            <div class="col-sm-4 col-lg-3 pb-3">
              <div class="card">
                <img src="/public/IMG/content/AdobeStock_319739307.jpg" class="" alt="...">
                <div class="card-body">
                  <h5 class="card-title">I Am Plastic : พลาสติกคืออะไร?</h5>
                  <p class="card-text">เรื่องไม่ลับกับพลาสติกกับสิ่งที่อยากให้ทุกคนเข้าใจพลาสติกมากขึ้น</p>
                  <a href="#" class="btn btn-outline-success" onclick="content01_setup_page()">อ่านเพิ่มเติม</a>
                  <p class="text-tags">Tags: <a href="">พลาสติกรีไซเคิล</a></p>
                </div>
              </div>
            </div>
      
            <div class="col-sm-4 col-lg-3 pb-3">
              <div class="card">
                <img src="/public/IMG/content/3e750d39-ed46-421e-a79e-8046759cedf0.jpg" class="" alt="...">
                <div class="card-body">
                  <h5 class="card-title">7 ประเภทขยะพลาสติกที่รีไซเคิลได้</h5>
                  <p class="card-text">แยกทิ้งให้ถูกเพื่อจะเปลี่ยนขยะให้กลายเป็นของที่มีมูลค่ามากขึ้นกันดีกว่า</p>
                  <a href="#" class="btn btn-outline-success" onclick="content02_setup_page()">อ่านเพิ่มเติม</a>
                  <p class="text-tags">Tags: <a href="">พลาสติกรีไซเคิล</a>, <a href="">ประเภทพลาสติกรีไซเคิล</a> </p>
                </div>
              </div>
            </div>
      
            <div class="col-sm-4 col-lg-3 pb-3">
              <div class="card">
                <img src="/public/IMG/content/garbage-2729608_960_720.jpg" class="" alt="...">
                <div class="card-body">
                  <h5 class="card-title">ทำไมต้องลดการใช้พลาสติก?</h5>
                  <p class="card-text">สาเหตุและปัญหาของขยะพลาสติกเป็นเรื่องใกล้ตัวกว่าที่คิด</p>
                  <a href="#" class="btn btn-outline-success" onclick="content03_setup_page()">อ่านเพิ่มเติม</a>
                  <p class="text-tags">Tags: <a href="">พลาสติกรีไซเคิล</a> </p>
                </div>
              </div>
            </div>
      
            <div class="col-sm-4 col-lg-3 pb-3">
              <div class="card">
                <img src="/public/IMG/content/9m.jpg" class="" alt="...">
                <div class="card-body">
                  <h5 class="card-title">ระยะเวลาการย่อยสลายของพลาสติก</h5>
                  <p class="card-text">1 มื้อของเรา ใช้เวลาย่อยสลายนานเท่าไหร่?</p>
                  <a href="#" class="btn btn-outline-success" onclick="content04_setup_page()">อ่านเพิ่มเติม</a>
                  <p class="text-tags">Tags: <a href="">พลาสติกรีไซเคิล</a>, <a href="">ย่อยสลายพลาสติก</a> </p>
                </div>
              </div>
            </div>
      
            <div class="col-sm-4 col-lg-3 pb-3">
              <div class="card">
                <img src="/public/IMG/content/da6e1913-c4ce-49ac-9368-a75b030a9eaf.jpg" class="" alt="...">
                <div class="card-body">
                  <h5 class="card-title">ถุงพลาสติกกับภาวะโลกร้อน</h5>
                  <p class="card-text">จากการเผาทำลายถุงพลาสติกก็จะยิ่งสูงมากขึ้น ตามมาด้วยปัญหามากมายจากมลพิษ </p>
                  <a href="#" class="btn btn-outline-success" onclick="content05_setup_page()">อ่านเพิ่มเติม</a>
                  <p class="text-tags">Tags: <a href="">พลาสติกรีไซเคิล</a>, <a href="">ภาวะโลกร้อน</a> </p>
                </div>
              </div>
            </div>
      
            <div class="col-sm-4 col-lg-3 pb-3">
              <div class="card">
                <img src="/public/IMG/content/pic07.jpg" class="" alt="...">
                <div class="card-body">
                  <h5 class="card-title">วิธีลดพลาสติกได้ง่ายๆ จากชีวิตประจำวัน</h5>
                  <p class="card-text">มาร่วมกันลดพลาสติกได้ง่ายๆ ภายในชีวิตประจำวันกัน</p>
                  <a href="#" class="btn btn-outline-success" onclick="content06_setup_page()">อ่านเพิ่มเติม</a>
                  <p class="text-tags">Tags: <a href="">พลาสติกรีไซเคิล</a>, <a href="">วิธีลดพลาสติก</a> </p>
                </div>
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