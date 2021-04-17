var username = '';
let body = document.body;

// Firebase Config
var firebaseConfig = {
    apiKey: "AIzaSyBdB46nlcWdb2lqzZFHSugtp-YMtRU3AxU",
    authDomain: "web-design-js-lab-25a5e.firebaseapp.com",
    projectId: "web-design-js-lab-25a5e",
    storageBucket: "web-design-js-lab-25a5e.appspot.com",
    messagingSenderId: "835095986418",
    appId: "1:835095986418:web:08049cb09ce5ab4b69d06b",
    measurementId: "G-59DSVWFRQF"
};
// Firebase Config


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
var db = firebase.firestore();


function auth_facebook() {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // The signed-in user info.
            var user = result.user;

            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var accessToken = credential.accessToken;
            
            alert(result);
            console.log(result);
        })
        .catch((error) => {
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
            console.log(user.displayName, user.uid, user.email, user.photoURL);
            login(user.displayName, user.uid, user.email, user.photoURL);
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


var not_found_user = true; // 0 = NOT BE USER
function login(name, id, email, img_url) {
    db.collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots

            // BE USER
            if (doc.id == name) {
                console.log(' This be user');
                not_found_user = false;
                profile_load(name, id, email, img_url);// BE USER
            };
        });

        if (not_found_user == true) { // NOT BE USER
            alert('register');
            not_found_user = false; // RESET PARAMS
        }

    });
}