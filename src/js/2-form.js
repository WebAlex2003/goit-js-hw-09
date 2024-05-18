/* Form */

const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('input', onInput);
formEl.addEventListener('submit', onSubmit);

const formData = {
  email: '',
  message: '',
};

document.addEventListener('DOMContentLoaded', () => {
  const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedFormData) {
    formEl.elements.email.value = savedFormData.email;
    formEl.elements.message.value = savedFormData.message;
  }
});

function onInput(event) {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onSubmit(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const message = event.currentTarget.elements.message.value;

  if (email === '' || message === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
  }

  event.currentTarget.reset();

  localStorage.removeItem('feedback-form-state');
} 
