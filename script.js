function validateEmail(email) {
  // Regular expression pattern for email validation
  var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

function checkEmail() {
  let email = document.getElementById("email");
  let message = document.getElementById("message");
  let success = document.getElementsByClassName("success-message")[0];
  if (validateEmail(email.value)) {
    console.log("Valid email");
  } else {
    console.log("Invalid email");
    email.classList.toggle("error");
    message.classList.toggle("error");
  }
}
