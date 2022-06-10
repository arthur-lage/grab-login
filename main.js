const form = document.querySelector("form");

const emailField = document.querySelector("#email-field");
const passwordField = document.querySelector("#password-field");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  clearErrors();

  if (email.value == "" || !validateEmail(email.value)) {
    emailField.classList.add("error");
  }

  if (password.value == "") {
    passwordField.classList.add("error");
  }
});

const clearErrors = () => {
  const inputs = [emailField, passwordField];

  inputs.forEach((input) => {
    input.classList.remove("error");
  });
};
