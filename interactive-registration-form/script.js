const form = document.getElementById("registrationForm");

const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

usernameInput.addEventListener("blur", (e) => {
  if (usernameInput.validity.valueMissing) {
    usernameInput.setCustomValidity("Enter a username.");
  } else {
    usernameInput.setCustomValidity("");
  }

  if (!usernameInput.validity.valid) {
    usernameError.textContent = usernameInput.validationMessage;
  } else {
    usernameError.textContent = "";
  }
});

emailInput.addEventListener("blur", (e) => {
  if (emailInput.validity.valueMissing) {
    emailInput.setCustomValidity("Please ente and email address.");
  } else if (emailInput.validity.typeMismatch) {
    emailInput.setCustomValidity(
      "Enter a valid email format. Example: bob@bob.com"
    );
  } else {
    emailInput.setCustomValidity("");
  }

  if (!emailInput.validity.valid) {
    emailError.textContent = emailInput.validationMessage;
  } else {
    emailError.textContent = "";
  }
});

passwordInput.addEventListener("blur", (e) => {
  if (passwordInput.validity.valueMissing) {
    passwordInput.setCustomValidity("Please enter a password.");
  }
});
