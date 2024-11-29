/*=============== SHOW HIDDEN - PASSWORD ===============*/
const showHiddenPass = (loginPass, loginEye) => {
    const input = document.getElementById(loginPass),
          iconEye = document.getElementById(loginEye);

    iconEye.addEventListener('click', () => {
        if(input.type === 'password'){
            input.type = 'text';
            iconEye.classList.add('ri-eye-line');
            iconEye.classList.remove('ri-eye-off-line');
        } else {
            input.type = 'password';
            iconEye.classList.remove('ri-eye-line');
            iconEye.classList.add('ri-eye-off-line');
        }
    });
};

/*=============== TOGGLE FORMS - LOGIN AND REGISTER ===============*/
const toggleForms = () => {
    const registerLink = document.getElementById('register-link');
    const loginLink = document.getElementById('login-link');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    registerLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    });

    loginLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    });
};

/*=============== HANDLE REGISTRATION AND LOGIN ===============*/
const handleRegistration = () => {
    const registerBtn = document.getElementById('register-btn');
    registerBtn.addEventListener('click', () => {
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-pass').value;

        if (email && password) {
            // Store data in localStorage
            localStorage.setItem('userEmail', email);
            localStorage.setItem('userPassword', password);
            alert('Registration successful!');
            document.getElementById('register-email').value = '';
            document.getElementById('register-pass').value = '';
            // Switch to login form
            document.getElementById('register-form').style.display = 'none';
            document.getElementById('login-form').style.display = 'block';
        } else {
            alert('Please enter both email and password.');
        }
    });
};

const handleLogin = () => {
    const loginBtn = document.getElementById('login-btn');
    loginBtn.addEventListener('click', () => {
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-pass').value;
        const storedEmail = localStorage.getItem('userEmail');
        const storedPassword = localStorage.getItem('userPassword');

        if (email === storedEmail && password === storedPassword) {
            alert('Login successful!');
        } else {
            alert('Invalid email or password.');
        }
    });
};

// Call functions to handle password visibility, form toggling, registration, and login
showHiddenPass('login-pass', 'login-eye');
showHiddenPass('register-pass', 'register-eye');
toggleForms();
handleRegistration();
handleLogin();
