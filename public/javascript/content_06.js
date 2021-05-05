function content06_setup_page() {
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
                class="nav-content-active">วิธีลดพลาสติกได้ง่ายๆ จากชีวิตประจำวัน</span></p>
            <div class="row justify-content-space-between">
              <div class="col-lg-7">
                <h1>วิธีลดพลาสติกได้ง่ายๆ จากชีวิตประจำวัน</h1>
                <p class="text-tags">Tags: <a href="">พลาสติกรีไซเคิล</a>, <a href="">วิธีลดพลาสติก</a> </p>
                <h4>1. งดใช้หลอดพลาสติก</h4>
                <p>
                  หลอด พลาสติก ย่อยสลายถึง 200 ปี เราจึงควรแจ้งพนักงานว่า “ไม่รับฝาปิดและหลอด” หรือใช้หลอดทางเลือก เช่น
                  หลอดกระดาษ หลอดไม้ไผ่ หลอดสแตนเลส หลอดแก้ว หลอดซิลิโคน ขณะสั่งเครื่องดื่มโปรด</p>
                <img src="/public/IMG/content/pic05.jpg" alt="" class="img-fluid p-3">
      
                <h4>2. ถือแก้วส่วนตัวหรือแก้วแบบใช้ซ้ำ</h4>
                <p>
                  ไม่จำเป็นต้องบอกลากาแฟในตอนเช้า นอกจากจะช่วยอนุรักษ์ต้นไม้จากการผลิตแก้วกระดาษ
                  แต่ยังช่วยประหยัดเงินของคุณอีกด้วย แก้วสแตนเลสช่วยให้กาแฟร้อนและกลมกล่อมเหมือนตอนพึ่งออกจากร้านเลยล่ะ
                </p>
                <img src="/public/IMG/content/pic06.jpg" alt="" class="img-fluid p-3">
                <h4>3. หิ้วถุงผ้าไปช้อปปิ้ง</h4>
                <p>
                  เมื่อถุง พลาสติก คือต้นเหตุของการทำลายสิ่งแวดล้อม หลายประเทศทั่วโลกร่วมใจกันแบนการใช้ถุงพลาสติก
                  ถุงผ้าไม่ใช่แค่เทรนด์ในการช้อปปิ้งของสดของใช้เท่านั้น แต่มันถูกออกแบบมาเพื่อให้เป็นมิตรต่อสิิ่งแวดล้อม
                  ใช้ระยะยาว และถือหิ้วได้สะดวกกว่าถุงพลาสติก</p>
                <img src="/public/IMG/content/pic07.jpg" alt="" class="img-fluid p-3">
                <h4>4. เลิกใช้ขวดน้ำ</h4>
                <p>
                  ใช้ขวดแก้วเติมน้ำดื่มแทนขวดพลาสติก ขวดแบบสแตนเลสเก็บน้ำดื่มให้เย็นตลอดวัน นอกจากนี้ขวด พลาสติก
                  ยังมีส่วนผสมของสารอันตราย เมื่อทิ้งไว้ในที่อุณหภูมิสูงเป็นเวลานาน สารเคมีบางชนิดมีพิษต่อร่างกาย</p>
                <img src="/public/IMG/content/pic08.png" alt="" class="img-fluid p-3">
                <h4>5. หลีกเลี่ยงการใช้ ช้อน ส้อม มีด ทำจากพลาสติก</h4>
                <p>
                  อุปกรณ์ในการรับประทานอาหารที่ทำจากพลาสติกถูกใช้ตลอดเวลาและทุกที่ ไม่ว่าจะส้อม มีด หรือช้อน
                  มันอาจจะอำนวยความสะดวก แต่พลาสติกเหล่านี้ทำให้สิ่งมีชีวิตในทะเลกว่า 700 สายพันธุ์ใกล้สูญพันธุ์
                  หลายคนเลือกที่จะเผาเพื่อทำหลายขยะเหล่านี้ ซึ่งสุดท้ายได้กลายเป็นสารพิษในชั้นบรรยากาศไปนั่นเอง</p>
                <img src="/public/IMG/content/pic09.jpg" alt="" class="img-fluid p-3">
      
                <h5>ที่มา https://www.happyfresh.co.th</h5>
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