var USER_PR_OBJ;
var add_item_list = [];
function add_plastics_reduction_list(type) {
    if (type == add_item_list[0] || type == add_item_list[1] || type == add_item_list[2] ||
        type == add_item_list[3] || type == add_item_list[4] || type == add_item_list[5]) {
        return false;
    }
    else {
        add_item_list.push(type);
        list = document.getElementById("list");
        list.insertAdjacentHTML("beforeend", "<li class='list-group-item p-0 " + type + "'> <div class='card mb-3 shadow'> <div class='row row-cols-3 g-0 d-flex justify-content-between'> <!-- upload image --> <div id='framePreview' class='col-md-4 position-relative'> <div class='col p-0 card-img-overlay'> <img id='imageAddPreview' class='card-img-start' src='/public/IMG/_MG_8982.jpg' alt='...'> </div> <input type='file' id='imageAddUpload' accept='.png, .jpg, .jpeg' /> </div> <!-- Name type --> <div class='col-md-6 p ps-md-4'> <div class='card-body p-0'> <h5 class='card-title my-1'>" + type + "</h5> <!-- quantity of plastic --> <p class='card-text'><div class='align-self-center'> <div class='w-100 btn-group shadow rounded-3' role='group'> <button class='btn' onclick='minusFunction(&quot;" + type + "&quot;)'>-</button> <input type='number' step='1' id='" + type + "' name='" + type + "' min='1' max='10' value='1' slot='2'> <button class='btn' onclick='plusFunction(&quot;" + type + "&quot;)'>+</button> </div> </div> </p> </div> </div> <div class='col-2 my-auto'> <!-- <button class='btn btn-remove btn-outline-primary' data-bs-toggle='modal' data-bs-target='#delete'> <i class='fas fa-trash-alt'></i> </button> --> <a class='btn btn-remove btn-outline-primary' data-bs-toggle='modal' href='#delete' role='button'><i class='fas fa-trash-alt'></i></a> </div> </div> </div> </li>");
    }
}
function add_to_database() {
    if (add_item_list.length == 0) {
        alert("กรุณากรอกข้อมูลให้ครบ");
        return false;
    }
    else {
        db.collection("users").doc(user_now.username).get().then((doc) => {
            if (doc.exists) {
                if (USER_PR_OBJ == null){
                    USER_PR_OBJ = doc.data().plastic_reduction;
                }
                for (i in add_item_list){

                    if(add_item_list[i] == "straw" && document.getElementById("straw") != null){
                        straw_total = Number(document.getElementById("straw").value);
                        lastest = Object.keys(USER_PR_OBJ.straw_type).length
                        USER_PR_OBJ.straw_type[lastest] = {
                            description: "-", 
                            total: straw_total, 
                            image: "-", 
                            date: "-"
                        }
                    }

                    else if(add_item_list[i] == "cup" && document.getElementById("cup") != null){
                        cup_total = Number(document.getElementById("cup").value);
                        lastest = Object.keys(USER_PR_OBJ.cup_type).length
                        USER_PR_OBJ.cup_type[lastest] = {
                            description: "-", 
                            total: cup_total, 
                            image: "-", 
                            date: "-"
                        }
                    }
                    else if(add_item_list[i] == "package" && document.getElementById("package") != null){
                        package_total = Number(document.getElementById("package").value);
                        lastest = Object.keys(USER_PR_OBJ.package_type).length
                        USER_PR_OBJ.package_type[lastest] = {
                            description: "-", 
                            total: package_total, 
                            image: "-", 
                            date: "-"
                        }
                    }
                    else if(add_item_list[i] == "bottle" && document.getElementById("bottle") != null){
                        bottle_total = Number(document.getElementById("bottle").value);
                        lastest = Object.keys(USER_PR_OBJ.bottle_type).length
                        USER_PR_OBJ.bottle_type[lastest] = {
                            description: "-", 
                            total: bottle_total, 
                            image: "-", 
                            date: "-"
                        }
                    }
                    else if(add_item_list[i] == "bag" && document.getElementById("bag") != null){
                        bag_total = Number(document.getElementById("bag").value);
                        lastest = Object.keys(USER_PR_OBJ.bag_type).length
                        USER_PR_OBJ.bag_type[lastest] = {
                            description: "-", 
                            total: bag_total, 
                            image: "-", 
                            date: "-"
                        }
                    }
                    else if(add_item_list[i] == "cutlery" && document.getElementById("cutlery") != null){
                        cutlery_total = Number(document.getElementById("cutlery").value);
                        lastest = Object.keys(USER_PR_OBJ.cutlery_type).length
                        USER_PR_OBJ.cutlery_type[lastest] = {
                            description: "-", 
                            total: cutlery_total, 
                            image: "-", 
                            date: "-"
                        }
                    }
                    db.collection('users').doc(user_now.username).set({plastic_reduction:USER_PR_OBJ}).then(() => {console.log('Document successfully written!');});
                }

            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });    
    }

}
