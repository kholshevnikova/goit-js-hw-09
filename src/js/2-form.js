const formData = {
  email: '',
  message: '',
};

const localStorageKey = 'feedback-form-state';

const formRefs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input[type="email'),
  textarea: document.querySelector('textarea'),
};
const { email, message } = formRefs.form.elements;

populateTextAreaField();

function onFormSubmit(event) {
  event.preventDefault();
  formData.email = email.value;
  formData.message = message.value;
  event.currentTarget.reset();
  localStorage.removeItem(localStorageKey);
}

function onFormInput(event) {
  event.preventDefault();

  console.log(formData);

  localStorage.setItem(localStorageKey, formData);
}

formRefs.form.addEventListener('submit', onFormSubmit);
formRefs.form.addEventListener('input', onFormInput);

function populateTextAreaField() {
  const textareaText = localStorage.getItem(localStorageKey);
  if (email.value === '' || message.value === '') {
    return alert('Please fill in all the fields!');
  }
}
