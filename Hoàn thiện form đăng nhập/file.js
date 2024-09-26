// Toggle show/hide password
const togglePassword = document.querySelector('#togglePassword');
const passwordField = document.querySelector('#password');

togglePassword.addEventListener('click', function () {
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);

    this.src = type === 'password' ? 'Eye_close.png' : 'Eye_open.png';
});

// Form validation
const form = document.getElementById('loginForm');
const emailField = document.getElementById('email');
const passwordFieldInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

// Helper function to validate email format
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

form.addEventListener('submit', function (e) {
    // Reset error messages
    emailError.textContent = '';
    passwordError.textContent = '';

    let isValid = true;

    // Validate email
    const emailValue = emailField.value.trim();
    if (!isValidEmail(emailValue)) {
        emailError.textContent = 'Email không đúng định dạng';
        isValid = false;
    }

    // Validate password
    const passwordValue = passwordFieldInput.value.trim();
    if (passwordValue === '') {
        passwordError.textContent = 'Mật khẩu không được để trống';
        isValid = false;
    }

    // If validation fails, prevent form submission
    if (!isValid) {
        e.preventDefault();
    }
});