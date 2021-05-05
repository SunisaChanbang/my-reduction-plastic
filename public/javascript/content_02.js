function content02_setup_page() {
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
            <p class="nav-content"> <a href="#" onclick="home_setup_page()">หน้าหลัก</a> / <a href="#" onclick="allcontent_setup_page()>บทความ</a> / <span
                class="nav-content-active">7 ประเภทขยะพลาสติกที่รีไซเคิลได้</span></p>
            <div class="row justify-content-space-between">
              <div class="col-lg-7">
                <h1>7 ประเภทขยะพลาสติกที่รีไซเคิลได้</h1>
                <p class="text-tags">Tags: <a href="">พลาสติกรีไซเคิล</a>, <a href="">ประเภทพลาสติกรีไซเคิล</a> </p>
                <img src="/public/IMG/content/4d078fbf-2fb4-4894-814f-335961430665.png" alt="" class="img-fluid">
                <p class="text-center p-3">เชื่อว่ามีคนจำนวนไม่น้อยที่ยังไม่รู้ว่า
                  ขยะพลาสติกประเภทไหนบ้างที่สามารถนำไปรีไซเคิลและเข้าสู่กระบวนการผลิตกลับมาเป็นข้าวของเครื่องใช้ใหม่ได้
                  ซึ่งขยะพลาสติกรีไซเคิลได้ถูกแบ่งเป็น 7 ประเภทด้วยกัน ดังนี้ </p>
                <!-- P1 -->
                <div class="row pb-3">
                  <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                    <img src="/public/IMG/content/p7-1.jpg" alt="" class="img-fluid">
                  </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                    <p>1. โพลีเอทิลีน เทอร์ฟะธาเลต (Polyethylene Terephthalate : PETE)
      
                      คุณสมบัติ : พลาสติกโพลีเมอร์ใส เนื้อเหนียว มีความทนทานต่อแรงกระแทก
                      และมีคุณสมบัติในการป้องกันการแพร่ผ่านของก๊าซได้ดี
      
                      ประโยชน์ : นำมาใช้ในการผลิตขวดเครื่องดื่มที่ไม่ได้บรรจุแอลกอฮอล์ เช่น ขวดน้ำดื่มและขวดน้ำมันพืช
      
                      สัญลักษณ์ : สัญลักษณ์รีไซเคิลหมายเลข 1 </p>
                  </div>
                </div>
                <!-- P2 -->
                <div class="row pb-3">
                  <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                    <img src="/public/IMG/content/p7-2.jpg" alt="" class="img-fluid">
                  </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                    <p>2. โพลีเอทิลีนความหนาแน่นสูง (High-density Polyethylene : HDPE)
      
                      คุณสมบัติ : พลาสติกชนิดนี้มีความหนาแน่นสูง ทำให้แข็งแรง แต่โปร่งแสงน้อยกว่าโพลีเอทิลีน ความหนาแน่นต่ำ
                      ทนกรดและด่าง ทั้งยังป้องกันการแพร่ผ่านของความชื้นได้ดี
      
                      ประโยชน์ : นำมาใช้ในการผลิตขวดนม ขวดเครื่องสำอาง ถุงพลาสติก ถังขยะ ถังบรรจุสารเคมี เช่น ถังน้ำมันรถ
      
                      สัญลักษณ์ : สัญลักษณ์รีไซเคิลหมายเลข 2</p>
                  </div>
                </div>
                <!-- P3 -->
                <div class="row pb-3">
                  <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                    <img src="/public/IMG/content/p7-3.jpg" alt="" class="img-fluid">
                  </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                    <p>3. โพลีไวนิลคลอไรด์ (Polyvinyl Chloride : PVC)
      
                      คุณสมบัติ : เป็นพลาสติกใสที่มีความแข็งแรงมาก ไอน้ำและอากาศซึมผ่านได้พอสมควร แต่ป้องกันไขมันได้ดี
      
                      ประโยชน์ : นำมาใช้ในการผลิตท่อน้ำประปา หนังเทียม ฉนวนหุ้มสายไฟ ขวดเครื่องดื่มแอลกอฮอล์
                      และอุปกรณ์การแพทย์
      
                      สัญลักษณ์ : สัญลักษณ์รีไซเคิลหมายเลข 3</p>
                  </div>
                </div>
                <!-- P4 -->
                <div class="row pb-3">
                  <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                    <img src="/public/IMG/content/p7-4.jpg" alt="" class="img-fluid">
                  </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                    <p>4. โพลีเอทิลีนความหนาแน่นต่ำ (Low-density Polyethylene : LDPE)
      
                      คุณสมบัติ : เป็นพลาสติกโปร่งแสง ที่มีปริมาตรสูง แต่ความหนาแน่นต่ำ
      
                      ประโยชน์ : นำไปใช้ในการผลิตถุงบรรจุอาหารแช่แข็ง แผ่นฟิล์ม ถุงใส่ของ และสายหุ้มทองแดง
      
                      สัญลักษณ์ : สัญลักษณ์รีไซเคิลหมายเลข 4</p>
                  </div>
                </div>
                <!-- P5 -->
                <div class="row pb-3">
                  <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                    <img src="/public/IMG/content/p7-5.jpg" alt="" class="img-fluid">
                  </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                    <p>5. โพลีโพรพิลีน (Polypropylene : PP)
      
                      คุณสมบัติ : เป็นพลาสติกที่มีน้ำหนักเบาที่สุด แต่มีความแข็งแรง ทนทานต่อแรงกระแทก และความร้อนสูง
      
                      ประโยชน์ : นำไปใช้ในการผลิตฉนวนไฟฟ้า บานพับ ฝาขวด ภาชนะบรรจุอาหาร ถุงร้อน และหลอดดูด
      
                      สัญลักษณ์ : สัญลักษณ์รีไซเคิลหมายเลข 5</p>
                  </div>
                </div>
                <!-- P6 -->
                <div class="row pb-3">
                  <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                    <img src="/public/IMG/content/p7-6.jpg" alt="" class="img-fluid">
                  </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                    <p>6. โพลีสไตรีน (Polystyrene : PS)
      
                      คุณสมบัติ : เป็นพลาสติกที่มีความโปร่งใส เปราะบาง แต่ทนต่อกรดและด่าง ผลิตเป็นรูปต่าง ๆ ได้ง่าย
                      ไอน้ำและอากาศซึมผ่านได้พอสมควร
      
                      ประโยชน์ : นำมาผลิตอุปกรณ์ไฟฟ้าและอิเล็กทรอนิกส์ ภาชนะ เช่น ถ้วย จาน และกล่องโฟม
      
                      สัญลักษณ์ : สัญลักษณ์รีไซเคิลหมายเลข 6</p>
                  </div>
                </div>
                <!-- P7 -->
                <div class="row pb-3">
                  <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                    <img src="/public/IMG/content/p7-7.jpg" alt="" class="img-fluid">
                  </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                    <p>7. พลาสติกอื่น ๆ (Other)
      
                      คุณสมบัติ : พลาสติกชนิดอื่น ๆ ที่ไม่ใช่ 6 ชนิดแรก เช่น โพลีคาร์บอเนต (Polycarbonate : PC)
                      เป็นพลาสติกโปร่งใส มีความแข็งแรง ทนต่อความร้อน กรด และแรงกระแทกได้ดี
      
                      ประโยชน์ : นำมาใช้ในการผลิตปากกา ขวดนมเด็ก หมวกนิรภัย ไฟจราจร ป้ายโฆษณา
      
                      สัญลักษณ์ : สัญลักษณ์รีไซเคิลหมายเลข 7</p>
                  </div>
                </div>
                <h5>ที่มา https://erc.kapook.com/article09.php</h5>
      
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