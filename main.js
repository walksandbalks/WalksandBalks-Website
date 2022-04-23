
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

  const db = firestore.collection("applicationData");

  const currentDate = new Date();
  
  const appSumbitBtn = document.getElementById("appSubmitBtn");

  appSumbitBtn.addEventListener("click", checkApplication);


  function checkApplication() {

    const firstName = inputFirst.value;
    const lastName = inputLast.value;
    const phone = inputPhone.value;
    const email = inputEmail.value;
    const street1 = inputStreet.value;
    const street2 = inputStreet2.value;
    const city = inputCity.value;
    const state = inputState.value;
    const zip = inputZip.value;
    const addCom = additionalComments.value;

      if (firstName =='' || lastName =='' || phone =='' || email =='' || city =='') {
          console.log("Blank entries");
          firstNameFeed.innerHTML = "First Name is required";
          lastNameFeed.innerHTML = "Last Name is required";
          phoneFeed.innerHTML = "Phone is required";
          emailFeed.innerHTML = "Email is required";
          streetFeed.innerHTML = "Street Address is required";
          cityFeed.innerHTML = "City is required";
          stateFeed.innerHTML = "State is required";
          zipFeed.innerHTML = "Zip Code is required";
      }
      else {
          db.add({
              firstName: firstName,
              lastName: lastName,
              phone: phone,
              email: email,
              address: street1,
              addressLine2: street2,
              city: city,
              state: state,
              zip: zip,
              additionalComments: addCom,
              currentDate
          })
          .then (function() {
              subLink.click(); 
          })
          .catch(function(error) {
            alert("An error has occured. Your application was not submitted. Please try agian later.");
          });
      }
  };


function sendEmail() {
    var tempParams ={
        first_name:document.getElementById("inputFirst").value,
        last_name:document.getElementById("inputLast").value,
        phone:document.getElementById("inputPhone").value,
        email:document.getElementById("imputEmail").value,
        street:document.getElementById("inputStreet").value,
        street2:document.getElementById("inputStreet2").value,
        city:document.getElementById("inputCity").value,
        state:document.getElementById("inputState").value,
        zip:document.getElementById("inputZip").value,
        message:document.getElementById("additionalComments").value,
    };

    emailjs.send('service_4j60qtm', 'template_1wwt5d6', tempParams)
    .then(function(res){
        console.log("success", res.status);
    })
}