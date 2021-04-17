<template>
  <div class="wrapper">
    <div class="navbar">
      <div class="navbar_left">
        <div class="logo">
          <!-- <img src="/pictures/profile_pic.png" width="35px"> -->
          <i class="fas fa-stroopwafel fa-spin fa-2x"></i>
          <a href="#">My Reduction Plastic</a>
        </div>
      </div>

      <div class="navbar_right">
        <div class="notifications">
          <div class="icon_wrap"><i class="far fa-bell"></i></div>

          <div class="notification_dd">
            <ul class="notification_ul">
              <li class="starbucks success">
                <div class="notify_icon">
                  <span class="icon"></span>
                </div>
                <div class="notify_data">
                  <div class="title">Lorem, ipsum dolor.</div>
                  <div class="sub_title">
                    Lorem ipsum dolor sit amet consectetur.
                  </div>
                </div>
                <div class="notify_status">
                  <p>Success</p>
                </div>
              </li>
              <li class="baskin_robbins failed">
                <div class="notify_icon">
                  <span class="icon"></span>
                </div>
                <div class="notify_data">
                  <div class="title">Lorem, ipsum dolor.</div>
                  <div class="sub_title">
                    Lorem ipsum dolor sit amet consectetur.
                  </div>
                </div>
                <div class="notify_status">
                  <p>Failed</p>
                </div>
              </li>
              <li class="mcd success">
                <div class="notify_icon">
                  <span class="icon"></span>
                </div>
                <div class="notify_data">
                  <div class="title">Lorem, ipsum dolor.</div>
                  <div class="sub_title">
                    Lorem ipsum dolor sit amet consectetur.
                  </div>
                </div>
                <div class="notify_status">
                  <p>Success</p>
                </div>
              </li>
              <li class="pizzahut failed">
                <div class="notify_icon">
                  <span class="icon"></span>
                </div>
                <div class="notify_data">
                  <div class="title">Lorem, ipsum dolor.</div>
                  <div class="sub_title">
                    Lorem ipsum dolor sit amet consectetur.
                  </div>
                </div>
                <div class="notify_status">
                  <p>Failed</p>
                </div>
              </li>
              <li class="kfc success">
                <div class="notify_icon">
                  <span class="icon"></span>
                </div>
                <div class="notify_data">
                  <div class="title">Lorem, ipsum dolor.</div>
                  <div class="sub_title">
                    Lorem ipsum dolor sit amet consectetur.
                  </div>
                </div>
                <div class="notify_status">
                  <p>Success</p>
                </div>
              </li>
              <li class="show_all">
                <p class="link">Show All Activities</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="profile">
          <div class="icon_wrap">
            <img src="/IMG/profile_pic.png" alt="profile_pic" />
            <span class="name">Sunisa Chanbang</span>
            <i class="fas fa-chevron-down"></i>
          </div>

          <div class="profile_dd">
            <ul class="profile_ul">
              <li class="profile_li">
                <a class="profile" href="#">
                  <span class="picon"><i class="fas fa-user-alt"></i></span
                  >Profile</a
                >

                <div class="btn">View Profile</div>
              </li>
              <li>
                <a class="history" href="#"
                  ><span class="picon"><i class="fas fa-history"></i></span
                  >History</a
                >
              </li>
              <li>
                <a class="settings" href="#"
                  ><span class="picon"><i class="fas fa-cog"></i></span
                  >Settings</a
                >
              </li>
              <li>
                <a class="login" href="#" @click="handleClick()">
                  <span class="picon"><i class="fas fa-sign-in-alt"></i></span
                  >Login</a
                >
              </li>
              <li>
                <a class="logout" href="#"
                  ><span class="picon"><i class="fas fa-sign-out-alt"></i></span
                  >Logout</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- หน้าเปิดแจ้งเตือนกิจกรรม หรือ ภารกิจ แบบเต็มหากกิจกรรมเยอะ -->
    <div class="popup">
      <div class="shadow"></div>
      <div class="inner_popup">
        <div class="notification_dd">
          <ul class="notification_ul">
            <li class="title">
              <p>All Notifications</p>
              <p class="close">
                <i class="fas fa-times" aria-hidden="true"></i>
              </p>
            </li>
            <li class="starbucks success">
              <div class="notify_icon">
                <span class="icon"></span>
              </div>
              <div class="notify_data">
                <div class="title">Lorem, ipsum dolor.</div>
                <div class="sub_title">
                  Lorem ipsum dolor sit amet consectetur.
                </div>
              </div>
              <div class="notify_status">
                <p>Success</p>
              </div>
            </li>
            <li class="baskin_robbins failed">
              <div class="notify_icon">
                <span class="icon"></span>
              </div>
              <div class="notify_data">
                <div class="title">Lorem, ipsum dolor.</div>
                <div class="sub_title">
                  Lorem ipsum dolor sit amet consectetur.
                </div>
              </div>
              <div class="notify_status">
                <p>Failed</p>
              </div>
            </li>
            <li class="mcd success">
              <div class="notify_icon">
                <span class="icon"></span>
              </div>
              <div class="notify_data">
                <div class="title">Lorem, ipsum dolor.</div>
                <div class="sub_title">
                  Lorem ipsum dolor sit amet consectetur.
                </div>
              </div>
              <div class="notify_status">
                <p>Success</p>
              </div>
            </li>
            <li class="baskin_robbins failed">
              <div class="notify_icon">
                <span class="icon"></span>
              </div>
              <div class="notify_data">
                <div class="title">Lorem, ipsum dolor.</div>
                <div class="sub_title">
                  Lorem ipsum dolor sit amet consectetur.
                </div>
              </div>
              <div class="notify_status">
                <p>Failed</p>
              </div>
            </li>
            <li class="pizzahut failed">
              <div class="notify_icon">
                <span class="icon"></span>
              </div>
              <div class="notify_data">
                <div class="title">Lorem, ipsum dolor.</div>
                <div class="sub_title">
                  Lorem ipsum dolor sit amet consectetur.
                </div>
              </div>
              <div class="notify_status">
                <p>Failed</p>
              </div>
            </li>
            <li class="kfc success">
              <div class="notify_icon">
                <span class="icon"></span>
              </div>
              <div class="notify_data">
                <div class="title">Lorem, ipsum dolor.</div>
                <div class="sub_title">
                  Lorem ipsum dolor sit amet consectetur.
                </div>
              </div>
              <div class="notify_status">
                <p>Success</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
var plugin = document.createElement("script");
  plugin.setAttribute(
    "src",
    "http://localhost:8080/javascript/firebase-mrp.js"
  );
  plugin.async = true;
  document.body.appendChild(plugin);
export default {
  name: "Home",
  props: {
    msg: String,
  },
  methods: {
    handleClick() {
      plugin.auth_google();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
