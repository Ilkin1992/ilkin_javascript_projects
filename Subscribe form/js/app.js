const checkbox = document.querySelector('.checkbox');
const emailInput = document.querySelector('.email_input');
const icon = document.querySelector('.icon');
const errorMessage = document.querySelector('.error_message');



icon.addEventListener('click', () => {
  let value = emailInput.value;
  let lastTwo = value.slice(-2)
  if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) === false) {
  emailInput.classList.add('error');
  errorMessage.innerText = 'Please provide a valid email address'
  return
  } 
  if (value === '') {
  emailInput.classList.add('error');
  errorMessage.innerText = 'Email is required';
  return
  }
  if (checkbox.checked === false) {
  emailInput.classList.add('error');
  errorMessage.innerText = 'You must accept the terms and conditions';
  return
  }
  if (lastTwo === 'co') {
  emailInput.classList.add('error');
  errorMessage.innerText = 'We are not accepting subscriptions from Colombian emails'; 
  return
  }
  else {
    window.location.href = "welcome_page.html";
  }
})