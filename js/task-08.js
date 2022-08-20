const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    console.dir(event.currentTarget.elements)

    // const formElements = event.currentTarget.elements;
    // const email = formElements.email.value;
    // const password = formElements.password.value;

    const formData = new FormData(event.currentTarget);

    formData.forEach((value, name) => {


        if (value === '' || name === '') {
            return alert('Form is not completed');
        }

        console.log('onFormSubmit --> name', name);
        console.log('onFormSubmit --> value', value);

        event.currentTarget.reset();
    });
}