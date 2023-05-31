const inputEmail = document.querySelectorAll('.input');
const btn = document.querySelectorAll('.btn');
const errorMessage = document.querySelectorAll('.error-message');

btn.forEach((button, i) => {
  button.addEventListener('click', e => {
    e.preventDefault();
    const emailValue = inputEmail[i].value;
    const validation = validate_email(emailValue);

    if (!validation) { 
      inputEmail[i].classList.add('input-error');
      errorMessage[0].style.color = 'hsl(0, 81%, 41%)';
      errorMessage[1].style.color = 'hsl(0, 0%, 75%)';
      errorMessage[i].style.opacity = '1';

    } else {
      inputEmail[i].value = '';
      inputEmail[i].classList.remove('input-error');
      errorMessage[i].style.opacity = '0';
    }
  })
})

function validate_email(email) {
  const regex =  /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

  if (email.match(regex)) {
    return true;
  }else {
    return false;
  }
}