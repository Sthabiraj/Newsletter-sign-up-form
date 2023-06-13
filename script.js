document.addEventListener("DOMContentLoaded", function () {
  let email = document.getElementById("email");
  let message = document.getElementById("message");
  let success = document.getElementById("success");
  let body = document.getElementById("overflow");
  function checkEmail(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var isValidEmail = pattern.test(email.value);
    if (isValidEmail) {
      success.classList.add("active");
      email.value = "";
      body.classList.add("overflow");
      email.classList.remove("error");
      message.classList.remove("error");
    } else {
      email.classList.add("error");
      message.classList.add("error");
    }
  }

  let button = document.querySelector(".check");
  button.addEventListener("click", checkEmail);

  let close = document.querySelector(".close");
  close.addEventListener("click", function () {
    success.classList.remove("active");
    body.classList.remove("overflow");
  });
});
