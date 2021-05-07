var USER_PR_OBJ;
var add_item_list = [];
var bundle_all_type = [];
function add_plastics_reduction_list(type) {
    if (type == add_item_list[0] || type == add_item_list[1] || type == add_item_list[2] ||
        type == add_item_list[3] || type == add_item_list[4] || type == add_item_list[5]) {
        return false;
    }
    else {
        add_item_list.push(type);
        list = document.getElementById("list");
        list.insertAdjacentHTML("beforeend", "<li id='" + type + "_addpanel'class='list-group-item p-0'> <div class='card mb-3 shadow'> <div class='row row-cols-3 g-0 d-flex justify-content-between'> <!-- upload image --> <div id='framePreview' class='col-md-4 position-relative'> <div class='col p-0 card-img-overlay'> <img id='imageAddPreview' class='card-img-start' src='/public/IMG/photo.png' alt='...'> </div> <input type='file' id='imageUpload_" + type + "' accept='.png, .jpg, .jpeg' /> </div> <!-- Name type --> <div class='col-md-6 p ps-md-4'> <div class='card-body p-0'> <h5 class='card-title my-1'>" + type + "</h5> <!-- quantity of plastic --> <p class='card-text'><div class='align-self-center'> <div class='w-100 btn-group shadow rounded-3' role='group'> <button class='btn' onclick='minusFunction(&quot;" + type + "&quot;)'>-</button> <input type='number' step='1' id='" + type + "' name='" + type + "' min='1' max='10' value='1' slot='2'> <button class='btn' onclick='plusFunction(&quot;" + type + "&quot;)'>+</button> </div> </div> </p> </div> </div> <div class='col-2 my-auto'> <!-- <button class='btn btn-remove btn-outline-primary' data-bs-toggle='modal' data-bs-target='#delete'> <i class='fas fa-trash-alt'></i> </button> --> <a class='btn btn-remove btn-outline-primary' data-bs-toggle='modal' href='#delete' role='button' onclick='pre_delete_item(&quot;" + type + "&quot;);'><i class='fas fa-trash-alt'></i></a> </div> </div> </div> </li>");
    }
}

function image_profile_Upload() {
    file_image = document.querySelector("#image-profile-Upload").files[0];
    name_image = +new Date() + "";
    user_ref = ref.child(user_now.username + "/" + "profile-image/");
    metadata = {
        contentType: file_image.type
    };
    task = user_ref.child(name_image).put(file_image, metadata);
    task
        .then(snapshot => snapshot.ref.getDownloadURL()).then(url => {
            db.collection('users').doc(user_now.username).set({
                image: url
            }, { merge: true });
        });
}
function add_to_database() {
    if (add_item_list.length == 0) {
        alert("กรุณากรอกข้อมูลให้ครบ");
        return false;
    }
    else {
        db.collection("users").doc(user_now.username).get().then((doc) => {
            if (doc.exists) {
                if (USER_PR_OBJ == null) {
                    USER_PR_OBJ = doc.data().plastic_reduction;
                }
                for (i in add_item_list) {

                    if (add_item_list[i] == "straw" && document.getElementById("straw") != null) {
                        user_ref = ref.child(user_now.username + "/" + "straw");
                        file = document.querySelector("#imageUpload_straw").files[0];
                        name_image = +new Date() + "";
                        metadata = {
                            contentType: file.type
                        };
                        task = user_ref.child(name_image).put(file, metadata);
                        task
                            .then(snapshot => snapshot.ref.getDownloadURL()).then(url => {
                                straw_total = Number(document.getElementById("straw").value);
                                lastest = Object.keys(USER_PR_OBJ.straw_type).length
                                USER_PR_OBJ.straw_type[lastest] = {
                                    description: "-",
                                    total: straw_total,
                                    image: url,
                                    date: new Date()
                                }
                                USER_PR_OBJ.straw_type.sum += straw_total;
                                db.collection('users').doc(user_now.username).set({ plastic_reduction: USER_PR_OBJ }, { merge: true });
                            });
                    }

                    else if (add_item_list[i] == "cup" && document.getElementById("cup") != null) {
                        user_ref = ref.child(user_now.username + "/" + "cup");
                        file = document.querySelector("#imageUpload_cup").files[0];
                        name_image = +new Date() + "";
                        metadata = {
                            contentType: file.type
                        };
                        task = user_ref.child(name_image).put(file, metadata);
                        task
                            .then(snapshot => snapshot.ref.getDownloadURL()).then(url => {
                                cup_total = Number(document.getElementById("cup").value);
                                lastest = Object.keys(USER_PR_OBJ.cup_type).length
                                USER_PR_OBJ.cup_type[lastest] = {
                                    description: "-",
                                    total: cup_total,
                                    image: url,
                                    date: new Date()
                                }
                                USER_PR_OBJ.cup_type.sum += cup_total;
                                db.collection('users').doc(user_now.username).set({ plastic_reduction: USER_PR_OBJ }, { merge: true });
                            });
                    }
                    else if (add_item_list[i] == "package" && document.getElementById("package") != null) {
                        user_ref = ref.child(user_now.username + "/" + "package");
                        file = document.querySelector("#imageUpload_package").files[0];
                        name_image = +new Date() + "";
                        metadata = {
                            contentType: file.type
                        };
                        task = user_ref.child(name_image).put(file, metadata);
                        task
                            .then(snapshot => snapshot.ref.getDownloadURL()).then(url => {
                                package_total = Number(document.getElementById("package").value);
                                lastest = Object.keys(USER_PR_OBJ.package_type).length
                                USER_PR_OBJ.package_type[lastest] = {
                                    description: "-",
                                    total: package_total,
                                    image: url,
                                    date: new Date()
                                }
                                USER_PR_OBJ.package_type.sum += package_total;
                                db.collection('users').doc(user_now.username).set({ plastic_reduction: USER_PR_OBJ }, { merge: true });
                            });
                    }
                    else if (add_item_list[i] == "bottle" && document.getElementById("bottle") != null) {
                        user_ref = ref.child(user_now.username + "/" + "bottle");
                        file = document.querySelector("#imageUpload_bottle").files[0];
                        name_image = +new Date() + "";
                        metadata = {
                            contentType: file.type
                        };
                        task = user_ref.child(name_image).put(file, metadata);
                        task
                            .then(snapshot => snapshot.ref.getDownloadURL()).then(url => {
                                bottle_total = Number(document.getElementById("bottle").value);
                                lastest = Object.keys(USER_PR_OBJ.bottle_type).length
                                USER_PR_OBJ.bottle_type[lastest] = {
                                    description: "-",
                                    total: bottle_total,
                                    image: url,
                                    date: new Date()
                                }
                                USER_PR_OBJ.bottle_type.sum += bottle_total;
                                db.collection('users').doc(user_now.username).set({ plastic_reduction: USER_PR_OBJ }, { merge: true });
                            });
                    }
                    else if (add_item_list[i] == "bag" && document.getElementById("bag") != null) {
                        user_ref = ref.child(user_now.username + "/" + "bag");
                        file = document.querySelector("#imageUpload_bag").files[0];
                        name_image = +new Date() + "";
                        metadata = {
                            contentType: file.type
                        };
                        task = user_ref.child(name_image).put(file, metadata);
                        task
                            .then(snapshot => snapshot.ref.getDownloadURL()).then(url => {
                                bag_total = Number(document.getElementById("bag").value);
                                lastest = Object.keys(USER_PR_OBJ.bag_type).length
                                USER_PR_OBJ.bag_type[lastest] = {
                                    description: "-",
                                    total: bag_total,
                                    image: url,
                                    date: new Date()
                                }
                                USER_PR_OBJ.bag_type.sum += bag_total;
                                db.collection('users').doc(user_now.username).set({ plastic_reduction: USER_PR_OBJ }, { merge: true });
                            });
                    }
                    else if (add_item_list[i] == "cutlery" && document.getElementById("cutlery") != null) {
                        user_ref = ref.child(user_now.username + "/" + "cutlery");
                        file = document.querySelector("#imageUpload_cutlery").files[0];
                        name_image = +new Date() + "";
                        metadata = {
                            contentType: file.type
                        };
                        task = user_ref.child(name_image).put(file, metadata);
                        task
                            .then(snapshot => snapshot.ref.getDownloadURL()).then(url => {
                                cutlery_total = Number(document.getElementById("cutlery").value);
                                lastest = Object.keys(USER_PR_OBJ.cutlery_type).length
                                USER_PR_OBJ.cutlery_type[lastest] = {
                                    description: "-",
                                    total: cutlery_total,
                                    image: url,
                                    date: new Date()
                                }
                                USER_PR_OBJ.cutlery_type.sum += cutlery_total;
                                db.collection('users').doc(user_now.username).set({ plastic_reduction: USER_PR_OBJ }, { merge: true });
                            });
                    }
                    USER_PR_OBJ.sum += USER_PR_OBJ.straw_type.sum + USER_PR_OBJ.cup_type.sum + USER_PR_OBJ.package_type.sum + USER_PR_OBJ.bottle_type.sum + USER_PR_OBJ.bag_type.sum + USER_PR_OBJ.cutlery_type.sum;
                    db.collection('users').doc(user_now.username).set({ plastic_reduction: USER_PR_OBJ }, { merge: true });
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

var item;
function pre_delete_item(type) {
    item = type;
}
function delete_item() {
    item = item + "_addpanel";
    add_item_list.splice(item);
    console.log(item);
    document.getElementById(item).remove();
    item = '';
}


function allitem_page() {
    db.collection("users").doc(user_now.username).get().then((doc) => {
        user_storage = doc.data();
        user_straw_rd = user_storage.plastic_reduction.straw_type;
        user_cup_rd = user_storage.plastic_reduction.cup_type;
        user_package_rd = user_storage.plastic_reduction.package_type;
        user_bottle_rd = user_storage.plastic_reduction.bottle_type;
        user_bag_rd = user_storage.plastic_reduction.bag_type;
        user_cutlery_rd = user_storage.plastic_reduction.bag_type;

        body_page.innerHTML = '';
        body_page.insertAdjacentHTML("afterbegin", `<p></p>
    <div class="all_item">

        <div class="menu" onclick="">
            <img src="https://icon-library.com/images/plastic-icon/plastic-icon-16.jpg" alt="" srcset="">
        </div>

    </div>
    <div class="container list-item">
        <div class="row justify-content-md-center">
            <div class="col-1 text-center">
                <a onclick="show_item_page('straw')">
                    STRAW
                </a>
            </div>
            <div class="col-1 text-center">
                <a onclick="show_item_page('cup')">
                    CUP
                </a>
            </div>
            <div class="col-1 text-center">
                <a onclick="show_item_page('package')">
                    PACKAGE
                </a>
            </div>
            <div class="col-1 text-center">
                <a onclick="show_item_page('bottle')">
                    BOTTLE
                </a>
            </div>
            <div class="col-1 text-center">
                <a onclick="show_item_page('bag')">
                    BAG
                </a>
            </div>
            <div class="col-1 text-center">
                <a onclick="show_item_page('cutlery')">
                    CUTLERY
                </a>
            </div>
        </div>
        <div class="row">
            <p></p>
            <p></p>
        </div>
        <div id="show-list-item" class="row justify-content-md-reft">

        </div>
    </div>`);

        item_page = document.getElementById("show-list-item")

        for (i in user_straw_rd) {
            if (user_straw_rd[i].image != undefined) {
                console.log(user_straw_rd[i])
                item_page.insertAdjacentHTML("afterbegin", `
                <div class="col-3 text-center">
                    <img src="`+ user_straw_rd[i].image + `" alt="">
                </div>`);
            }
        }
    });

}

function show_item_page(type) {
    item_page = document.getElementById("show-list-item")
    item_page.innerHTML = "";
    if (type == 'straw') {
        for (i in user_straw_rd) {
            if (user_straw_rd[i].image != undefined) {
                console.log(user_straw_rd[i])
                item_page.insertAdjacentHTML("afterbegin", `
                    <div class="col-3 text-center">
                        <img src="`+ user_straw_rd[i].image + `" alt="">
                    </div>`);
            }
        }
    }
    else if (type == 'cup') {
        for (i in user_cup_rd) {
            if (user_cup_rd[i].image != undefined) {
                console.log(user_cup_rd[i])
                item_page.insertAdjacentHTML("afterbegin", `
                    <div class="col-3 text-center">
                        <img src="`+ user_cup_rd[i].image + `" alt="">
                    </div>`);
            }
        }
    }
    else if (type == 'package') {
        for (i in user_package_rd) {
            if (user_package_rd[i].image != undefined) {
                console.log(user_package_rd[i])
                item_page.insertAdjacentHTML("afterbegin", `
                    <div class="col-3 text-center">
                        <img src="`+ user_package_rd[i].image + `" alt="">
                    </div>`);
            }
        }
    }
    else if (type == 'bottle') {
        for (i in user_bottle_rd) {
            if (user_bottle_rd[i].image != undefined) {
                console.log(user_bottle_rd[i])
                item_page.insertAdjacentHTML("afterbegin", `
                    <div class="col-3 text-center">
                        <img src="`+ user_bottle_rd[i].image + `" alt="">
                    </div>`);
            }
        }
    }
    else if (type == 'bag') {
        for (i in user_bag_rd) {
            if (user_bag_rd[i].image != undefined) {
                console.log(user_bag_rd[i])
                item_page.insertAdjacentHTML("afterbegin", `
                    <div class="col-3 text-center">
                        <img src="`+ user_bag_rd[i].image + `" alt="">
                    </div>`);
            }
        }
    }
    else if (type == 'cutlery') {
        for (i in user_cutlery_rd) {
            if (user_cutlery_rd[i].image != undefined) {
                console.log(user_cutlery_rd[i])
                item_page.insertAdjacentHTML("afterbegin", `
                    <div class="col-3 text-center">
                        <img src="`+ user_cutlery_rd[i].image + `" alt="">
                    </div>`);
            }
        }
    }
}