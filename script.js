const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
 const username = document.getElementById('username').value;
const password = document.getElementById('password').value;
  if (username === 'admin' && password === 'Admin@123')
   {
    errorMessage.textContent = 'Sucessfully logged in.' ,errorMessage.style.color = 'green';
    window.location.href = "/7th-green/index1.html";
  } else {
    errorMessage.textContent = 'Invalid username or password.';
  }})
