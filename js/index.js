const formDOM = document.querySelector('.form');
const allInputs = document.querySelectorAll('.form__input');

formDOM.addEventListener('submit', (e) => {
  e.preventDefault();

  const html = `<p class="form__submit-text">Thanks for submitting!</p>`;
  formDOM.innerHTML += html;

  allInputs.forEach((input) => {
    input.value = '';
  });
});
