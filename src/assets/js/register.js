// src/assets/js/register.js
export default function setupRegisterForm() {
    const registerForm = document.getElementById('registerForm');
    const togglePassword = document.querySelector('.toggle-password');
  
    if (!registerForm || !togglePassword) return;
  
    // Toggle password visibility
    togglePassword.addEventListener('click', function () {
      const passwordInput = document.getElementById('registerPassword');
      const icon = this.querySelector('i');
  
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.classList.replace('fa-eye', 'fa-eye-slash');
      } else {
        passwordInput.type = 'password';
        icon.classList.replace('fa-eye-slash', 'fa-eye');
      }
    });
  
    // Form submission
    registerForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const username = document.getElementById('registerUsername').value.trim();
      const email = document.getElementById('registerEmail').value.trim();
      const password = document.getElementById('registerPassword').value;
      const confirmPassword = document.getElementById('confirmPassword').value;
      const termsAgreed = document.getElementById('termsAgreement').checked;
  
      if (!username || !email || !password || !confirmPassword) {
        alert('Please fill in all fields');
        return;
      }
  
      if (username.length < 4) {
        alert('Username must be at least 4 characters');
        return;
      }
  
      if (password.length < 8) {
        alert('Password must be at least 8 characters');
        return;
      }
  
      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }
  
      if (!termsAgreed) {
        alert('You must agree to the terms and conditions');
        return;
      }
  
      const userData = {
        username,
        email,
        password,
        createdAt: new Date().toISOString(),
      };
  
      console.log('Data ready for MongoDB:', userData);
      alert('Registration successful (MongoDB integration pending)');
    });
  }
  