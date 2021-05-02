if (document.readyState == 'loading') {
    document.addEventListener('DOMcontentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeItemButtons = document.getElementsByClassName('btn btn-danger')
    for (var i =0; i < removeItemButtons.length; i++) {
        var button = removeItemButtons[i]
        button.addEventListener('click', removeItem)
    }

    var quantityInput = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInput.length; i++) {
        var input = quantityInput[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToListButtons = document.getElementsByClassName('plastic-item-button')
    for (var i = 0; i < addToListButtons.length; i++) {
        var button = addToListButtons[i]
        button.addEventListener('click', addToListClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', continueClicked)
}

function continueClicked() {
    alert('Thank you for your Not Use Plastic')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
}

function removeItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
}

function addToListClicked(event) {
    var button = event.target
    var plastItem = button.parentElement.parentElement
    var imageSrc = plastItem.getElementsByClassName('plastic-item-image')[0].src
    var title = plastItem.getElementsByClassName('plastic-item-title')[0].innerText
    addItemToList(imageSrc, title)
}

function addItemToList(imageSrc, title) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the List')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn btn-danger')[0].addEventListener('click', removeItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}



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
