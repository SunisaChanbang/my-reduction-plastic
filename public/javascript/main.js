var CONTAINER = document.getElementById("content");
var PROFILE = document.getElementById("profile");
var NAVBAR_RIGHT = document.getElementById("navbar_right");
var POPUP = document.getElementsByClassName("popup");
var user_now = { display_name: "", username: "", email: "", img_url: "" };
var user_storage;

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
var storage = firebase.storage();
var ref = firebase.storage().ref();
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
      user_now["display_name"] = user.displayName;
      user_now["username"] = user.uid;
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

        // BE USER
        if (doc.id == username) {
          alert('This be user');
          not_found_user = false;
          user_storage = doc.data();
          user_now["display_name"] = doc.data().display_name;
          user_now["username"] = doc.id;
          user_now["email"] = doc.data().email;
          user_now["img_url"] = doc.data().image;
          
          profile_setup_page()// BE USER
        };
      });
    });
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

          else { create_new_user(display_name, username, email, password) }

        });
      });
    }
  }

  function create_new_user(displayName, username, email, password) {
    db.collection("users").doc("" + username + "").set({
      display_name: displayName,
      paswd: password,
      email: email,
      image: "https://i.pinimg.com/736x/89/90/48/899048ab0cc455154006fdb9676964b3.jpg",
      plastic_reduction: {
        sum: 0,
        straw_type: {
          sum: 0
        },
        cup_type: {
          sum: 0
        },
        package_type: {
          sum: 0
        },
        bottle_type: {
          sum: 0
        },
        bag_type: {
          sum: 0
        },
        cutlery_type: {
          sum: 0
        }
       
      }
    })
      .then(() => {
        console.log("Document successfully written!");
        return false;
      });
  }

  