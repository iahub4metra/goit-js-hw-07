const loginForm = document.querySelector('.login-form');
loginForm.addEventListener("submit", btnSubmit)

function btnSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    if (email === "" || password === "") {
        alert('All form fields must be filled in');
    } else {
        const formElements = document.querySelector('.login-form').elements;
        let userData = {};
        for (let element of formElements) {
            if (element.name) {
                userData[element.name.trim()] = element.value.trim();
            }
        }
        console.log(userData);
    }
    form.reset();
}



