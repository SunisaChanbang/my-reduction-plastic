function content05_setup_page() {
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
              <img class="d-block w-100" src="/public/IMG/content/banner_c01.jpg" alt="...">
            </div>
          </div>
      
          <!-------------- Content -------------->
          <div class="container pt-4">
            <p class="nav-content"> <a href="#" onclick="home_setup_page()">หน้าหลัก</a> / <a href="#" onclick="allcontent_setup_page()">บทความ</a> / <span
                class="nav-content-active">ถุงพลาสติกกับภาวะโลกร้อน</span></p>
            <div class="row justify-content-space-between">
              <div class="col-lg-7">
                <h1>ถุงพลาสติกกับภาวะโลกร้อน</h1>
                <p class="text-tags">Tags: <a href="">พลาสติกรีไซเคิล</a>, <a href="">ภาวะโลกร้อน</a> </p>
                <p>ความเกี่ยวโยงระหว่างการใช้ถุงพลาสติกกับโลกร้อนคือ ยิ่งมีการใช้ถุงพลาสติกมากเท่าไหร่
                  ปริมาณก๊าซคาร์บอนไดออกไซด์ที่ถูกปล่อยสู่ชั้นบรรยากาศโลก จากการเผาไหม้ในกิจกรรมการผลิต
                  และเผาทำลายถุงพลาสติกก็จะยิ่งสูงมากขึ้น ตามมาด้วยปัญหามากมายจากมลพิษ </p>
                <img src="/public/IMG/content/174199.jpg" alt="" class="img-fluid p-3">
                <p>
                  ถุงพลาสติกมีผลทำให้เกิดภาวะโลกร้อน ต้องใช้เวลาย่อยสลายถึง 450 ปี
                  หากนำไปเผาก็จะทำให้เกิดสารประกอบไฮโดรคาร์บอน ซึ่งทำให้เกิดมลภาวะทำให้โลกร้อน
                  และการใช้ถุงผ้าจะช่วยลดการปนเปื้อนของสารก่อมะเร็ง และหากทุกคนหันมาใช้ถุงผ้าเพียงสัปดาห์ละ 1 วัน
                  จะช่วยลดการใช้ถุงพลาสติกได้มากกว่า 100 ล้านถุง/ปี
                  ทั้งนี้ ปัจจุบัน (กันยายน 2550) กทม.ต้องเก็บขยะมากถึง 85,00 ตัน/วัน เป็นถุงพลาสติกถึงร้อยละ 21 หรือ 1,800
                  ตัน/วัน ดังนั้น หากเปลี่ยนมาใช้ถุงผ้าแทน จะช่วยลดค่าใช้จ่ายการเก็บขยะได้วันละ 1.78 ล้านบาท/วัน หรือคิดเป็น
                  650 ล้านบาท/ปี
                </p>
                <img src="/public/IMG/content/da6e1913-c4ce-49ac-9368-a75b030a9eaf.jpg" alt="" class="img-fluid p-3">
                <P> ถึงเวลานี้ คงไม่มีใครปฏิเสธแล้วว่า ไม่รู้จักปรากฏการณ์สำคัญของโลกที่เรียกว่า ภาวะโลกร้อน (Global warming)
                  ปีที่ผ่านมา ภาคเหนือและภาคอีสานของประเทศไทยต้องเผชิญกับอากาศหนาวจัดกว่าหลายปีที่ผ่านมา
                  ขณะที่ภาคกลางประสบกับปัญหาน้ำท่วมหนักอย่างที่ไม่เคยเจอมาก่อน ส่วนภาคใต้ก็เจอกับพายุที่รุนแรงขึ้น</P>
                <h5>ที่มา http:www.chongter.com</h5>
              </div>
              <div class="col-lg-5">
                <h3><b>RELATED POSTS</b></h3>
                <div class="row pb-3 justify-content-space-between">
                  <div class="col-sm-4 col-lg-5">
                    <img src="/public/IMG/content/60a7a5e2-2823-4878-9000-fdd0e6f39ed3.jpg" alt="" class="img-last-blog">
                  </div>
                  <div class="col-sm-8 col-lg-7">
                    <a href="#" id="link-article" onclick="content06_setup_page()">
                      <h5>วิธีลดพลาสติกได้ง่ายๆ จากชีวิตประจำวัน</h5>
                    </a>
                  </div>
                </div>
                <div class="row pb-3">
                  <div class="col-sm-4 col-lg-5">
                    <img src="/public/IMG/content/3e750d39-ed46-421e-a79e-8046759cedf0.jpg" alt="" class="img-last-blog">
                  </div>
                  <div class="col-sm-8 col-lg-7">
                    <a href="#" id="link-article" onclick="content02_setup_page()">
                      <h5>7 ประเภทขยะพลาสติกที่รีไซเคิลได้</h5>
                    </a>
                  </div>
                </div>
                <div class="row pb-3">
                  <div class="col-sm-4 col-lg-5">
                    <img src="/public/IMG/content/65647511-cd1d-484e-9510-17eb379a9a11.jpg" alt="" class="img-last-blog">
                  </div>
                  <div class="col-sm-8 col-lg-7">
                    <a href="#" id="link-article" onclick="content03_setup_page()">
                      <h5>ทำไมต้องลดการใช้พลาสติก?</h5>
                    </a>
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