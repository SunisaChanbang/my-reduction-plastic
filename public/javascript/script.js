$(document).ready(function () {
  $(".show_all .link").click(function () {
    $(".notifications").removeClass("active");
    $(".popup").show();
  });

  $(".close").click(function () {
    $(".popup").hide();
  });
});

function editName(x) {
  console.log(x);
  x.classList.toggle("fa-save");
  x.classList.toggle("fa-edit");
  var y = document.getElementById("fname").readOnly;
  if (y == true) {
    $("input").prop("readonly", false);
    // document.getElementById("fname").classList.toggle("text-end");
  } else {
    $("input").prop("readonly", true);
    // document.getElementById("fname").classList.toggle("text-end");
    var inputName = document.getElementById("fname").value;
    console.log(inputName);
    // Add a new document in collection "cities"
    db.collection("users").doc(user_now.username).push({
        display_name: inputName,
      })
      .then(() => {
        console.log("เปลี่ยนชื่อสำเร็จ!");
      })
      .catch((error) => {
        console.error("Error writing document: แย่จัง เกิดข้อผิดพลาด", error);
      });
  }
}

// Start upload preview image
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $("#imagePreview").css(
        "background-image",
        "url(" + e.target.result + ")"
      );
      // $('#imagePreview').attr("src", 'url('+e.target.result +')');
      // $('#imagePreview').attr('src', e.target.result);
      $("#imagePreview").hide();
      $("#imagePreview").fadeIn(650);
    };
    reader.readAsDataURL(input.files[0]);
  }
}
$("#imageUpload").change(function () {
  readURL(this);
});

// Start upload preview image
function readSrc(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      //Get our img element by using document.getElementById
      var img = document.getElementById("imageAddPreview");

      //Set the src property of our element to the new image URL
      img.src = e.target.result;
      // img.style.width = '100px';
      // img.style.height = '100px';
      $("#imageAddPreview").fadeOut();
      $("#imageAddPreview").fadeIn(650);
    };
    reader.readAsDataURL(input.files[0]);
  }
}

$("#imageAddUpload").change(function () {
  readSrc(this);
});

function plusFunction() {
  document.getElementById(type).stepUp();
}
function minusFunction() {
  document.getElementById(type).stepDown();
}

// // logout
// const logout = document.querySelector('#logout');
// logout.addEventListener('click', (e) => {
//     e.preventDefault();
//     auth.signOut().then(() => {
//         console.log('user signed out');
//     })
// });

//function tqb page
var tabButtons = document.querySelectorAll(".btn-group button");
var tabPanels = document.querySelectorAll(".section");

function showPanel(panelIndex) {
  tabPanels.forEach(function (node) {
    node.style.display = "block";
  });
  tabPanels[panelIndex].style.display = "none";
}
showPanel(1);

//function Email Validation
function validation() {
  var form = document.getElementById("form");
  var email = document.getElementById("email-su").value;
  var text = document.getElementById("text");
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email.match(pattern)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerHTML = "Your Email Address in Valid.";
    text.style.color = "#00ff00";
  } else {
    form.classList.remove("valid");
    form.classList.add("invalid");
    text.innerHTML = "Please Enter Valid Email Address.";
    text.style.color = "#ff0000";
  }

  if ((email = "")) {
    form.classList.remove("valid");
    form.classList.remove("invalid");
    text.innerHTML = "";
    text.style.color = "#00ff00";
  }
}

// firebase database //
var plastic_reduction_sum = 20000;
var bottle_type = 3;
var bag_type = 5;
var cup_type = 2;
var cutlery_type = 8;
var package_type = 7;
var straw_type = 9;

let weightAll = ''+(bag_type * 0.2) + (bottle_type * 0.15) + (cup_type * 0.1) + (cutlery_type * 0.6) + (package_type * 0.21) + (straw_type * 0.12);

var nWeight = document.getElementById('nWeight');
var nBottle = document.getElementById('nBottle');
var nWatt = document.getElementById('nWatt');
var nHours = document.getElementById('nHours');

nWeight.innerHTML = weightAll;
nBottle.innerHTML = bottle_type;
nWatt.innerHTML = bottle_type * 60;
nHours.innerHTML = bottle_type * 6;
console.log("nWeight : " + nWeight.innerHTML);
console.log("nBottle : " + nBottle.innerHTML);
console.log("nWatt : " + nWatt.innerHTML);
console.log("nHours : " + nHours.innerHTML);


