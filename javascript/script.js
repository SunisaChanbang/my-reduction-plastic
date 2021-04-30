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

// ///////////////////////////////////
// Start upload preview image
$("#choose_image").attr("src", "/pictures/_MG_8982.jpg");
var $uploadCrop,
  tempFilename,
  rawImg,
  imageId;
function readFile(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('#upload-demo').addClass('ready');
      $('#uploadimageModal').modal('show');
      rawImg = e.target.result;
    }
    reader.readAsDataURL(input.files[0]);
  }
  else {
    swal("Sorry - you're browser doesn't support the FileReader API");
  }
}

$uploadCrop = $('#upload-demo').croppie({
  viewport: {
    width: 150,
    height: 200,
  },
  enforceBoundary: false,
  enableExif: true
});
$('#uploadimageModal').on('shown.bs.modal', function () {
  // alert('Shown pop');
  $uploadCrop.croppie('bind', {
    url: rawImg
  }).then(function () {
    console.log('jQuery bind complete');
  });
});

$('.item-img').on('change', function () {
  imageId = $(this).data('id'); tempFilename = $(this).val();
  $('#cancelCropBtn').data('id', imageId); readFile(this);
});
$('#cropImageBtn').on('click', function (ev) {
  $uploadCrop.croppie('result', {
    type: 'base64',
    format: 'jpeg',
    size: { width: 150, height: 200 }
  }).then(function (resp) {
    $('#item-img-output').attr('src', resp);
    $('#uploadimageModal').modal('hide');
  });
});
				// End upload preview image