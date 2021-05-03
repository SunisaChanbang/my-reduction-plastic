var CONTAINER = document.getElementById("content");
var PROFILE = document.getElementById("profile");
var NAVBAR_RIGHT = document.getElementById("navbar_right");
var POPUP = document.getElementsByClassName("popup");
var user_now = { name: "", id: "", email: "", img_url: "" };

var firebaseConfig = {
  apiKey: "AIzaSyA2XQhgAbwuFiPYicCZe6QI7KzAATsBs7k",
  authDomain: "my-reduction-plastic.firebaseapp.com",
  projectId: "my-reduction-plastic",
  storageBucket: "my-reduction-plastic.appspot.com",
  messagingSenderId: "151873292628",
  appId: "1:151873292628:web:9b3f0697776a029df5a0c1",
  measurementId: "G-QP58M0M6HJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
var db = firebase.firestore();
firebase.analytics();

var starCountRef = firebase.database().ref('users');
function auth_google() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      user_now["name"] = user.displayName;
      user_now["id"] = user.uid;
      user_now["email"] = user.email;
      user_now["img_url"] = user.photoURL;
      console.log(user.displayName, user.uid, user.email, user.photoURL);
      login(user.displayName, "google-auth");

      // ...
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
}

  function pre_sign_in(){
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    sign_in(username, password);
  }
  
  var not_found_user = true; // 0 = NOT BE USER
  function sign_in(username, password) {
    console.log(username, password);
    db.collection("users").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, doc.data().paswd);
        // BE USER
        if (doc.id == username) {
          alert('This be user');
          not_found_user = false;
          user_now["name"] = doc.data().display_name;
          user_now["id"] = doc.data().id;
          user_now["email"] = doc.data().email;
          user_now["img_url"] = user.data().photoURL;
          load_profile();// BE USER
        };
      });
    });
  }




  function load_profile() {
    name = user_now["name"];
    id = user_now["id"];
    email = user_now["email"];
    img_url = user_now["img_url"];
    NAVBAR_RIGHT.insertAdjacentHTML("afterbegin", "<div class='notifications'> <div class='icon_wrap'><i class='far fa-bell'></i></div> <div class='notification_dd'> <ul class='notification_ul'> <li class='starbucks success'> <div class='notify_icon'> <span class='icon'></span> </div> <div class='notify_data'> <div class='title'>Lorem, ipsum dolor.</div> <div class='sub_title'> Lorem ipsum dolor sit amet consectetur. </div> </div> <div class='notify_status'> <p>Success</p> </div> </li> <li class='baskin_robbins failed'> <div class='notify_icon'> <span class='icon'></span> </div> <div class='notify_data'> <div class='title'>Lorem, ipsum dolor.</div> <div class='sub_title'> Lorem ipsum dolor sit amet consectetur. </div> </div> <div class='notify_status'> <p>Failed</p> </div> </li> <li class='mcd success'> <div class='notify_icon'> <span class='icon'></span> </div> <div class='notify_data'> <div class='title'>Lorem, ipsum dolor.</div> <div class='sub_title'> Lorem ipsum dolor sit amet consectetur. </div> </div> <div class='notify_status'> <p>Success</p> </div> </li> <li class='pizzahut failed'> <div class='notify_icon'> <span class='icon'></span> </div> <div class='notify_data'> <div class='title'>Lorem, ipsum dolor.</div> <div class='sub_title'> Lorem ipsum dolor sit amet consectetur. </div> </div> <div class='notify_status'> <p>Failed</p> </div> </li> <li class='kfc success'> <div class='notify_icon'> <span class='icon'></span> </div> <div class='notify_data'> <div class='title'>Lorem, ipsum dolor.</div> <div class='sub_title'> Lorem ipsum dolor sit amet consectetur. </div> </div> <div class='notify_status'> <p>Success</p> </div> </li> <li class='show_all'> <p class='link'>Show All Activities</p> </li> </ul> </div> </div>")
    PROFILE.innerHTML = "";
    PROFILE.insertAdjacentHTML("afterbegin", "<div class='icon_wrap'> <img src=' " + img_url + " ' alt='profile_pic' /><span class='name'>" + name + "</span> <i class='fas fa-chevron-down'></i></div>");
    PROFILE.insertAdjacentHTML("afterbegin", "<div class='profile_dd'><ul class='profile_ul'> <li class='profile_li'> <a class='profile' href='#'> <span class='picon'><i class='fas fa-user-alt'></i></span>Profile</a> <div class='btn'>View Profile</div> </li> <li> <a class='history' href='#'><span class='picon'><i class='fas fa-history'></i></span>History</a> </li> <li> <a class='settings' href='#'><span class='picon'><i class='fas fa-cog'></i></span>Settings</a> </li> <li> <a class='logout' href='#'><span class='picon'><i class='fas fa-sign-out-alt'></i></span>Logout</a> </li> <li> <a class='login' href='#' onclick='auth_google()'><span class='picon'><i class='fas fa-sign-in-alt'></i></span>Login</a> </li> </ul></div>")
  }

  function sign_up() {
    display_name = document.getElementById("display_name-su").value;
    username = document.getElementById("username-su").value;
    password = document.getElementById("password-su").value;
    email = document.getElementById("email-su").value;

    if (username == '' || username.length < 4) {
      alert('กรุณากรอก username ให้ถูกต้อง');
      return;
    }

    else if (password == '' || password.length < 5) {
      alert('กรุณากรอก password ให้ถูกต้อง');
      return;
    }

    else if (display_name == '' || display_name.length < 4) {
      alert('กรุณากรอกชื่อให้ถูกต้อง');
      return;
    }
    else if (1) {
      db.collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (username == doc.id) {
            alert("username มีผู้ใช้แล้ว");
            return fasle;

          }
          else if (email == doc.data().email) {
            alert("email มีผู้ใช้แล้ว");
            return fasle;
          }

          else { create_new_user(username, email, password); }

        });
      });
    }
  }

  function create_new_user(username, email, password) {
    db.collection("users").doc("" + username + "").set({
      paswd: password,
      email: email,
      image: "",
      plastic_reduction: {
        sum: 0,
        container_type: {
          00001: {
            image: "-",
            description: "-",
            date: "-"
          }
        },
        bottle_type: {
          00001: {
            image: "-",
            description: "-",
            date: "-"
          }
        },
        bag_type: {
          00001: {
            image: "-",
            description: "-",
            date: "-"
          }
        },
        other_type: {
          00001: {
            image: "-",
            description: "-",
            date: "-"
          }
        },
      }
    })
      .then(() => {
        console.log("Document successfully written!");
        return false;
      });
  }