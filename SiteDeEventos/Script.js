const form = document.getElementById('registrationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  
  resetErrors();


  let isValid = true;

  if (!validateName(nameInput.value)) {
    displayError('nameError', 'Insira um nome válido');
    isValid = false;
  }

  if (!validateEmail(emailInput.value)) {
    displayError('emailError', 'Insira um email válido');
    isValid = false;
  }

  if (!validateUsername(usernameInput.value)) {
    displayError('usernameError', 'Insira um nome de usuário válido');
    isValid = false;
  }

  if (!validatePassword(passwordInput.value)) {
    displayError('passwordError', 'A senha deve ter pelo menos 6 caracteres');
    isValid = false;
  }

  if (isValid) {
   
    alert('Cadastro realizado com sucesso!');
    form.reset();
  }
});

function resetErrors() {
  const errorElements = document.getElementsByClassName('error');
  for (let i = 0; i < errorElements.length; i++) {
    errorElements[i].textContent = '';
  }
}

function displayError(id, errorMessage) {
  const errorElement = document.getElementById(id);
  errorElement.textContent = errorMessage;
}

function validateName(name) {
  return /^[a-zA-Z ]+$/.test(name);
}

function validateEmail(email) {

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateUsername(username) {
  return /^\w+$/.test(username);
}

function validatePassword(password) {
  return password.length >= 6;
}