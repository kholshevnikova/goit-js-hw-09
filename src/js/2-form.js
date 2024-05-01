// const formData = {
//   email: '',
//   message: '',
// };

// const localStorageKey = 'feedback-form-state';

// const formRefs = {
//   form: document.querySelector('.feedback-form'),
//   input: document.querySelector('input[type="email'),
//   textarea: document.querySelector('textarea'),
// };
// const { email, message } = formRefs.form.elements;

// populateTextAreaField();

// function onFormSubmit(event) {
//   event.preventDefault();
//   formData.email = email.value;
//   formData.message = message.value;
//   event.currentTarget.reset();
//   localStorage.removeItem(localStorageKey);
// }

// function onFormInput(event) {
//   event.preventDefault();

//   console.log(formData);

//   localStorage.setItem(localStorageKey, formData);
// }

// formRefs.form.addEventListener('submit', onFormSubmit);
// formRefs.form.addEventListener('input', onFormInput);

// function populateTextAreaField() {
//   const textareaText = localStorage.getItem(localStorageKey);
//   if (email.value === '' || message.value === '') {
//     return alert('Please fill in all the fields!');
//   }
// }

const FEEDBACK_STORAGE_KEY = 'feedback-form-state';
const formRefs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input[type="email"]'),
  message: document.querySelector('textarea'),
};

const formData = {
  email: '',
  message: '',
};

populateFormField();

function onFormSubmit(event) {
  event.preventDefault();
  if (!formData.email.trim() || !formData.message.trim()) {
    alert('Please fill in all fields!');
    return;
  }
  console.log(formData);
  event.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_STORAGE_KEY);
}

function onFormInput(event) {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(FEEDBACK_STORAGE_KEY, JSON.stringify(formData));
}

formRefs.form.addEventListener('submit', onFormSubmit);
formRefs.form.addEventListener('input', onFormInput);

function populateFormField() {
  const storedData = localStorage.getItem(FEEDBACK_STORAGE_KEY) || {};
  console.log(storedData);
  if (!storedData) return;

  formData.email = storedData.email || '';
  formData.message = storedData.message || '';
  formRefs.input.value = storedData.email || '';
  formRefs.message.value = storedData.message || '';
}

function onTextareaAndEmailInput(event) {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(FEEDBACK_STORAGE_KEY, JSON.stringify(formData));
}

formRefs.form.addEventListener('input', onTextareaAndEmailInput);
