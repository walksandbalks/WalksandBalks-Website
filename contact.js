// Firebase Connection
var firebaseConfig = {
    apiKey: "AIzaSyAUh8oa2MLbEswsP95RXFw_TNCokHYlr6w",
    authDomain: "walksandbalks1.firebaseapp.com",
    databaseURL: "https://walksandbalks1-default-rtdb.firebaseio.com",
    projectId: "walksandbalks1",
    storageBucket: "walksandbalks1.appspot.com",
    messagingSenderId: "423337003599",
    appId: "1:423337003599:web:1c8c87aa239816123ff83a",
    measurementId: "G-16SC69SE3Q"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  var firestore = firebase.firestore();
  

  const submitBtn = document.querySelector('#submit');

  let userName = document.querySelector('#userName');
  let userEmail = document.querySelector('#userEmail');
  let userMessage = document.querySelector('#userMessage');

  const db = firestore.collection("contactData");

  const currentDate = new Date();

  submitBtn.addEventListener("click", function() {
    let userNameInput = userName.value;
    let userEmailInput = userEmail.value;
    let userMessageInput = userMessage.value;

    // Access the database collection
    db.add({
        name: userNameInput,
        email: userEmailInput,
        message: userMessageInput,
        currentDate

    })
    .then(function() {
        location.reload();
    })
    .catch(function(error) {
        console.log("error");
    });
});
