let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let firstName = id("firstName"),
  lastName = id("lastName"),
  phoneNumber = id("phoneNumber"),
  email = id("email"),
  password = id("password"),
  form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(firstName, 0, "First name cannot be blank");
  engine(lastName, 1, "Last name cannot be blank");
  engine(phoneNumber, 2, "Phone number must start with 0");
  engine(email, 3, "Email must be valid");
  engine(
    password,
    4,
    "Password must be at least 6 characters and include an uppercase letter, a lowercase letter, a special character, and a number"
  );

  let errorCount = 0;
  for (let i = 0; i < errorMsg.length; i++) {
    if (errorMsg[i].innerHTML !== "") {
      errorCount++;
    }
  }

  if (errorCount === 0) {
    alert("Form submitted successfully!");
    form.reset();

    for (let i = 0; i < form.elements.length; i++) {
      form.elements[i].style.border = "2px solid #c4c4c4";
    }

    for (let i = 0; i < errorMsg.length; i++) {
      errorMsg[i].innerHTML = "";
    }

    for (let i = 0; i < successIcon.length; i++) {
      successIcon[i].style.opacity = "0";
    }

    for (let i = 0; i < failureIcon.length; i++) {
      failureIcon[i].style.opacity = "0";
    }
  }
});

let engine = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";

    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";

    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }

  if (id === password) {
    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,}$/;

    if (!regex.test(password.value)) {
      errorMsg[serial].innerHTML = message;
      id.style.border = "2px solid red";

      failureIcon[serial].style.opacity = "1";
      successIcon[serial].style.opacity = "0";
    }
  }

  if (id === email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email.value)) {
      errorMsg[serial].innerHTML = message;
      id.style.border = "2px solid red";

      failureIcon[serial].style.opacity = "1";
      successIcon[serial].style.opacity = "0";
    }
  }

  if (id === phoneNumber) {
    let regex = /^0/;

    if (!regex.test(phoneNumber.value)) {
      errorMsg[serial].innerHTML = message;
      id.style.border = "2px solid red";

      failureIcon[serial].style.opacity = "1";
      successIcon[serial].style.opacity = "0";
    }
  }
};
