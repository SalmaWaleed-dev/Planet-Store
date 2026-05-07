const loginForm = document.querySelector('form');
const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');
const socialBtns = document.querySelectorAll('.social-btn');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailValue = emailInput.value;
    const passValue = passwordInput.value;

    if (emailValue && passValue) {
        alert(`Welcome back! \nLogged in as: ${emailValue}`);
    } else {
        alert("Please fill in all fields!");
    }
});

socialBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        alert("Social login is coming soon!");
    });
});

const links = document.querySelectorAll('a');
links.forEach(link => {
    link.addEventListener('click', (e) => {
        if(link.innerText === "Forgot Password?") {
            e.preventDefault();
            alert("Reset link sent!");
        }
    });
});