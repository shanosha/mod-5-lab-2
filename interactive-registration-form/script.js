/*
 ---- Set Variables ----
*/
const form = document.getElementById("registrationForm");

const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");


/*
 ---- Functions ----
*/
// Validate username field.
const checkUsername = () => {
  if (usernameInput.validity.valueMissing) {
    usernameInput.setCustomValidity("Enter a username.");
  }
  else if (usernameInput.validity.tooShort || usernameInput.validity.patternMismatch) {
    usernameInput.setCustomValidity("Must contain at least 4 letter or numbers. No special charecters or spaces.")
  }
  else {
    usernameInput.setCustomValidity("");
  }

  if (!usernameInput.validity.valid) {
    usernameError.textContent = usernameInput.validationMessage;
  } else {
    usernameError.textContent = "";
  }
  return usernameInput.validity.valid;
}
// Validate email field.
const checkEmail = () => {
  if (emailInput.validity.valueMissing) {
    emailInput.setCustomValidity("Please enter and email address.");
  }
  else if (emailInput.validity.typeMismatch) {
    emailInput.setCustomValidity(
      "Enter a valid email format. Example: bob@bob.com"
    );
  }
  else {
    emailInput.setCustomValidity("");
  }

  if (!emailInput.validity.valid) {
    emailError.textContent = emailInput.validationMessage;
  } else {
    emailError.textContent = "";
  }
  return emailInput.validity.valid;
}
// Validate password field.
const checkPassword = () => {
  if (passwordInput.validity.valueMissing) {
    passwordInput.setCustomValidity("Please enter a password.");
  }
  else if (passwordInput.validity.tooShort || passwordInput.validity.patternMismatch) {
    passwordInput.setCustomValidity("Must contain at least 8 charecters, a number, a lowercase letter, and an uppercase letter.")
  }
  else {
    passwordInput.setCustomValidity("");
  }

  if(!passwordInput.validity.valid) {
    passwordError.textContent = passwordInput.validationMessage;
  }
  else {
    passwordError.textContent = "";
  }
  return passwordInput.validity.valid;
}
// Validate confirmPassword field.
const checkConfirmPassword = () => {
  let password1 = passwordInput.value;
  let password2 = confirmPasswordInput.value;
  if(password1!=password2) {
    confirmPasswordInput.setCustomValidity("Must match the passowrd field.")
  }
  else {
    confirmPasswordInput.setCustomValidity("");
  }

  if(!confirmPasswordInput.validity.valid) {
    confirmPasswordError.textContent = confirmPasswordInput.validationMessage;
  }
  else {
    confirmPasswordError.textContent = "";
  }
  return confirmPasswordInput.validity.valid;
}
// Save username to localStorage.
const saveData = () => {
  try {
    localStorage.setItem("username",usernameInput.value);
  }
  catch (error) {
    console.error("Local storage unavailable",error);
  }
}
// Load username from localStorage.
const loadData = () => {
  let storedUsername = localStorage.getItem("username");
  let pattern = /^[A-Za-z0-9]+$/;
  if(storedUsername && storedUsername.trim().length >= 4 && pattern.test(storedUsername.trim())) {
    usernameInput.value = storedUsername.trim();
  }
  else {
    usernameInput.value = "";
  }
}


/*
 ---- Run Code ----
*/
// Add the novalidate attribute to the form if JavaScript is enabled. Otherwise browser validations dispaly.
form.setAttribute("novalidate","true");
// Load data from localStorage.
loadData();
// Add event listeners.
usernameInput.addEventListener("input", checkUsername);
emailInput.addEventListener("input", checkEmail);
passwordInput.addEventListener("input", checkPassword);
confirmPasswordInput.addEventListener("input", checkConfirmPassword);
form.addEventListener("submit",(e) => {
  e.preventDefault();
  if(!checkUsername() || !checkEmail() || !checkPassword() || !checkConfirmPassword()){
    document.querySelector("input:invalid").focus();
  }
  else {
    alert("Form submitted!");
    saveData();
    form.reset();
  }
});