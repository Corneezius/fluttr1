// Initialize Firebase
var config = {
  apiKey: "AIzaSyDm-Xx4dmgwxplO9xqOikUWSCVfBw0nChE",
  authDomain: "fluttr1-1b62b.firebaseapp.com",
  databaseURL: "https://fluttr1-1b62b.firebaseio.com",
  projectId: "fluttr1-1b62b",
  storageBucket: "fluttr1-1b62b.appspot.com",
  messagingSenderId: "507931504645"
};
firebase.initializeApp(config);


var signupBtn = document.getElementById('submit');
var signupForm = document.getElementById('signup-form');
var signupSuccess = document.getElementById('signup-success');
var signupError = document.getElementById('signup-error');


var form = document.getElementById("signup-form");

function handleForm(event) {
  // prevent page reload
  event.preventDefault();
  var userEmail = document.getElementById('email').value;
  console.log(userEmail)
  var myFirebaseRef = firebase.database().ref();

  signupError.innerHTML = '';
  signupSuccess.innerHTML = '';
  if (userEmail.includes("@")) {
    myFirebaseRef.push({
      email: userEmail,
    });
    jQuery(function($) {
    $("#signup-success").html("Thanks for signing up!").show().delay(3000).fadeOut(2000);
    });
  } else {
    document.getElementById("email").value = "";
    jQuery(function($) {
    $("#signup-error").html('Please make sure you entered your e-mail correctly!').show().delay(3000).fadeOut(2000);
    });
    return false;
  }
  document.getElementById("email").value = "";
};


form.addEventListener('submit', handleForm);
