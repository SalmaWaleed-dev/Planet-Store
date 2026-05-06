
const handleRegistration = (event) => {
    const form = event.target;
    const name = form.querySelector('input[name="Name"]').value.trim();
    const email = form.querySelector('input[name="Email"]').value.trim();
    const password = form.querySelector('input[type="password"][placeholder="Password"]').value;
    const confirmPassword = form.querySelector('input[name="confirm_password"]').value;

    if (!name || !email || !password || !confirmPassword) {
        alert("Please complete all the required information to link to the plant store");
        event.preventDefault();
        return;
    }

    if (!email.includes('@')) {
        alert("Please enter your correct email address");
        event.preventDefault();
        return;
    }

    if (password.length < 6) {
        alert("The password must be at least 6 symbols long");
        event.preventDefault();
        return;
    }

    if (password !== confirmPassword) {
        alert("Error: Passwords do not match");
        event.preventDefault();
        return;
    }


    console.log("Validation successful for: " + name);
};

document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.querySelector('form');
    if (registrationForm) {
        registrationForm.addEventListener('submit', handleRegistration);
    }
});