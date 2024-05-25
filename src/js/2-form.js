const form = document.querySelector('.feedback-form');
const email = form.elements.email;
const message = form.elements.message;

let formData = {
    email: '',
    message: '',
}

const savedFormData = localStorage.getItem('feedback-form-state');

if (savedFormData) {
    formData = JSON.parse(savedFormData);
    email.value = formData.email;
    message.value = formData.message;
}

form.addEventListener('input', onInput);

function onInput(event) {
    const key = event.target.name;
    formData[key] = event.target.value;

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();

    if (email.value === '' || message.value === '') {
        alert('Please fill in all the fields!');
    } else {
        console.log(formData);
        form.reset();
        localStorage.clear();
        formData = {};
    }
}

