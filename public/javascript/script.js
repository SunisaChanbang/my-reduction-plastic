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
    document.getElementById("fname").classList.toggle("text-end");
  } else {
    $("input").prop("readonly", true);
    document.getElementById("fname").classList.toggle("text-end");
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
  document.getElementById("quantity").stepUp();
}
function minusFunction() {
  document.getElementById("quantity").stepDown();
}

// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log('user signed out');
    })
});


//function Switch page
var tabButton = document.querySelectorAll('.btn-tabs')
var tabContent = document.querySelectorAll('.section')
tabButton.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.CDATA_SECTION_NODE.tabTarget)
    target.classList.add('active')
  })
})