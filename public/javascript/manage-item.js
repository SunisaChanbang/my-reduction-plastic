function add_plastics_reduction_list(type){
    list = document.getElementById("list");
    list.insertAdjacentHTML("beforeend", "<li class='list-group-item p-0'> <div class='card mb-3 shadow'> <div class='row row-cols-3 g-0 d-flex justify-content-between'> <!-- upload image --> <div id='framePreview' class='col-md-4 position-relative'> <div class='col p-0 card-img-overlay'> <img id='imageAddPreview' class='card-img-start' src='/public/IMG/_MG_8982.jpg' alt='...'> </div> <input type='file' id='imageAddUpload' accept='.png, .jpg, .jpeg' /> </div> <!-- Name type --> <div class='col-md-6 p ps-md-4'> <div class='card-body p-0'> <h5 class='card-title my-1'>"+type+"</h5> <!-- quantity of plastic --> <p class='card-text'><div class='align-self-center'> <div class='w-100 btn-group shadow rounded-3' role='group'> <button class='btn' onclick='minusFunction("+type+")'>-</button> <input type='number' step='1' id='quantity' name='quantity' min='1' max='10' value='1' slot='2'> <button class='btn' onclick='plusFunction("+type+")'>+</button> </div> </div> </p> </div> </div> <div class='col-2 my-auto'> <!-- <button class='btn btn-remove btn-outline-primary' data-bs-toggle='modal' data-bs-target='#delete'> <i class='fas fa-trash-alt'></i> </button> --> <a class='btn btn-remove btn-outline-primary' data-bs-toggle='modal' href='#delete' role='button'><i class='fas fa-trash-alt'></i></a> </div> </div> </div> </li>");
}