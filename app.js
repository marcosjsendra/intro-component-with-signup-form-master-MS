//* Selections

let firstName = document.querySelector("#fname");
let lastName = document.querySelector("#lname");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let firstBtn = document.querySelector(".s_top-btn");
let lastBtn = document.querySelector(".s_last-btn");

//! Errors Selections

// Text Error

let txtErrors = document.querySelectorAll(".error"); // Selected all erro text

//* Apply error text for each:

// txtErrors[0].classList.add("display_error");
// txtErrors[1].classList.add("display_error");
// txtErrors[2].classList.add("display_error");
// txtErrors[3].classList.add("display_error");

// Icon Error

let inputs = document.getElementsByTagName("input"); // Selected all inputs

//* Apply error icon for each:

// inputs[0].classList.add("input_error");
// inputs[1].classList.add("input_error");
// inputs[2].classList.add("input_error");
// inputs[3].classList.add("input_error");

//* Events and Functionality

lastBtn.addEventListener("click", e => {
  e.preventDefault();
  let firstNameValue = firstName.value;
  let lastNameValue = lastName.value;
  let emailValue = email.value;
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let passwordValue = password.value;
  if (firstNameValue === "") {
    txtErrors[0].classList.add("display_error");
    inputs[0].classList.add("input_error");
    setTimeout(removeAlerts, 5000);
  }
  if (lastNameValue === "") {
    txtErrors[1].classList.add("display_error");
    inputs[1].classList.add("input_error");
    setTimeout(removeAlerts, 5000);
  }
  if (!emailValue.match(mailformat)) {
    txtErrors[2].classList.add("display_error");
    inputs[2].classList.add("input_error");
    setTimeout(removeAlerts, 5000);
  }
  if (passwordValue === "") {
    txtErrors[3].classList.add("display_error");
    inputs[3].classList.add("input_error");
    setTimeout(removeAlerts, 5000);
  }
});

function removeAlerts() {
  txtErrors[0].classList.remove("display_error");
  inputs[0].classList.remove("input_error");
  txtErrors[1].classList.remove("display_error");
  inputs[1].classList.remove("input_error");
  txtErrors[2].classList.remove("display_error");
  inputs[2].classList.remove("input_error");
  txtErrors[3].classList.remove("display_error");
  inputs[3].classList.remove("input_error");
}
