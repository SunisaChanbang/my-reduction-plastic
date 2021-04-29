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

