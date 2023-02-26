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
  engine(phoneNumber, 2, "Phone number name cannot be blank");
  engine(email, 3, "Email cannot be blank");
  engine(password, 4, "Password cannot be blank");
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
};
