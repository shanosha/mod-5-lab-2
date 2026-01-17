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
    emailInput.setCustomValidity("Please enter and email address.");
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
  else if (passwordInput.validity.tooShort) {
    passwordInput.setCustomValidity("Please enter at least 8 charecters.");
  }
  else if (passwordInput.validity.patternMismatch) {
    passwordInput.setCustomValidity("Must contain a number, a lowercase, and an uppercase character.")
  }

  if(!passwordInput.validity.valid) {
    passwordError.textContent = passwordInput.validationMessage;
  }
  else {
    passwordError.textContent = "";
  }
});

confirmPasswordInput.addEventListener("blur",(e) => {
  let password1 = passwordInput.value;
  let password2 = confirmPasswordInput.value;
  if(password1!=password2) {
    confirmPasswordInput.setCustomValidity("Must match the passowrd field.")
  }
  else if (confirmPasswordInput.validity.valueMissing) {
    confirmPasswordInput.setCustomValidity("Please enter a password.");
  }

  if(!confirmPasswordInput.validity.valid) {
    confirmPasswordError.textContent = confirmPasswordInput.validationMessage;
  }
  else {
    confirmPasswordError.textContent = "";
  }
});