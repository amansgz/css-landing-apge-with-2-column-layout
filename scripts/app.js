const inputEmail = document.querySelector('.input');
const btnSubmit = document.getElementById('btnSubmit');
const errorMessage = document.querySelector('.error-message');

const signInput = document.getElementById('signupInput');
const btnSignup = document.getElementById('btnSignup');
const signupMessage = document.querySelector('.signup-message');

btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  
  const emailValue = inputEmail.value;
  const validation = validate_email(emailValue);

  if (!validation) {
    inputEmail.classList.add('input-error');
    errorMessage.style.opacity = '1';
  } else {
    inputEmail.value = '';
    inputEmail.classList.remove('input-error');
    errorMessage.style.opacity = '0';
    btnSubmit.style.backgroundColor = 'hsl(224, 93%, 58%)';
  }
});

btnSignup.addEventListener('click', (e) => {
  e.preventDefault();
  
  const inputValue = signInput.value;
  const validation = validate_email(inputValue);

  if (!validation) {
    signInput.classList.add('input-error');
    signupMessage.style.opacity = '1';
  } else {
    signInput.value = '';
    signInput.classList.remove('input-error');
    signupMessage.style.opacity = '0';
    btnSignup.style.backgroundColor = 'hsl(224, 93%, 58%)';
  }
})


function validate_email(email) {
  const regex =  /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

  if (email.match(regex)) {
    return true;
  }else {
    return false;
  }
}