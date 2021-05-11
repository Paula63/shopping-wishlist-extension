var firebaseConfig = {
    apiKey: "AIzaSyAc_5poKCkYEJ0txE86yggkqIhfeoZwVf8",
    authDomain: "shopping-wishlist-cdd83.firebaseapp.com",
    databaseURL: "https://shopping-wishlist-cdd83-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "shopping-wishlist-cdd83",
    storageBucket: "shopping-wishlist-cdd83.appspot.com",
    messagingSenderId: "789719234405",
    appId: "1:789719234405:web:117d868f037bae38cd138c",
    measurementId: "G-C9B2R9Q3FP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig); 

  console.log(firebase);

  var db = firebase.firestore();

chrome.runtime.onMessage.addListener((msg, sender, resp) => {

    if(msg.command == "fetch"){
        var docRef = db.collection("wishboards").doc("wishboard2");
        docRef.get().then(function(doc) {
            if(doc.exists) {
                resp({type: "result", status: "success", data: doc.data(),
                request: msg});
            } else {
                resp({type: "result", status: "error", data: "No result!",
                request: msg});
            }
        }).catch(function(error) {
            resp({type: "result", status: "error", data: error, request: msg});
        });
    }
})