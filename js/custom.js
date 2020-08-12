
//validate not empty inputs
function validate(e){
  e.preventDefault();

  // checking the input boxes to not be blank
  if (nameInput.value === ''){
    const nameAlert = document.querySelector("span.name-alert");
    nameAlert.textContent = "Please write your name";
    nameInput.focus();
  }

  if (lastnameInput.value === ''){
    const lastnameAlert = document.querySelector("span.lastname-alert");
    lastnameAlert.textContent = "Please write your Last Name";
    lastnameInput.focus();
  }

  if (phonenumInput.value === ''){
    const phonenumAlert = document.querySelector("span.phonenum-alert");
    phonenumAlert.textContent = "Please write your phone number";
    phonenumInput.focus();
  }

  if (emailInput.value === ''){
    const emailAlert = document.querySelector("span.email-alert");
    emailAlert.textContent = "Please write your email address";
    emailInput.focus();
    return false;
  }

  return true;
}

//validate email address
function validateEmail(){
  const userEmail = emailInput.value;
  const atPos = userEmail.indexOf("@");
  console.log(atPos);
  const dotPos = userEmail.indexOf(".");
  console.log(dotPos);
  if (atPos < 1 || (dotPos - atPos < 2)){
    const emailAlert = document.querySelector("span.email-alert");
    emailAlert.textContent = "Please enter a valid email address";
    return false;
  }
  return true;
}

//getting form and form elements of the page
const form = document.querySelector("form");
const nameInput = document.querySelector("input[name=name]");
const lastnameInput = document.querySelector("input[name=lastname]");
const phonenumInput = document.querySelector("input[name=phone-num]");
const emailInput = document.querySelector("input[name=email]");

form.addEventListener('submit', validate);
form.addEventListener('submit', validateEmail);

// function validateName(evt){
//   const regEx = new RegExp('^[a-z]', 'gi');
//   if (this.value.match(regEx)) {
//     if(alert.style.display === 'block'){
//     const nameAlert = document.querySelector("span.name")}
//     nameAlert.style.display = 'none'
//   }else {
//     alert.innerHTML += `<span class="name">Your name is invalid</span>`;
//   }
// }
//
// const name = document.querySelector("input[name=name]");
//
// const alert = document.querySelector(".alert");
//
// name.addEventListener('change', validateName);
