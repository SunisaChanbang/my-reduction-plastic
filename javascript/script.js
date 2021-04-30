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
    document.getElementById("fname").classList.toggle("text-end")
  } else {
    $("input").prop("readonly", true);
    document.getElementById("fname").classList.toggle("text-end")
  }
}


// Start upload preview image
function readURL(input) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
          $('#imagePreview').css('background-image', 'url('+e.target.result +')');
          // $('#imagePreview').attr("src", 'url('+e.target.result +')');
          // $('#imagePreview').attr('src', e.target.result);
          $('#imagePreview').hide();
          $('#imagePreview').fadeIn(650);
      }
      reader.readAsDataURL(input.files[0]);
  }
}
$("#imageUpload").change(function() {
  readURL(this);
});

// function readURL(input) {
//   if (input.files && input.files[0]) {
//       var reader = new FileReader();

//       reader.onload = function (e) {
//           $('#imagePreview')
//               .attr('src', e.target.result);
//       };

//       reader.readAsDataURL(input.files[0]);
//   }
// }