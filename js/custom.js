// name Error function
function nameError(){
  const nameAlert = document.querySelector("span.name-alert");
  nameAlert.textContent = "Please write your name";
  nameInput.focus();
}

// lastname error function
function lastnameError(){
  const lastnameAlert = document.querySelector("span.lastname-alert");
  lastnameAlert.textContent = "Please write your Last Name";
  lastnameInput.focus();
}

// phone number error function
function phonenumError(){
  const phonenumAlert = document.querySelector("span.phonenum-alert");
  phonenumAlert.textContent = "Please write your phone number";
  phonenumInput.focus();
};

// email error function
function emailError(){
  const emailAlert = document.querySelector("span.email-alert");
  emailAlert.textContent = "Please write your email address";
  emailInput.focus();
}


//validate not empty inputs
function validate(e){
  e.preventDefault();

  // checking the input boxes to not be blank
  if (nameInput.value === ''){
    nameError();
  }

  if (lastnameInput.value === ''){
    lastnameError();
  }

  if (phonenumInput.value === ''){
    phonenumError();
  }

  if (emailInput.value === ''){
    emailError();
    return false;
  } else {
    validateEmail();
  }

  return true;
}

//validate name field
function validateName(){
  const userName = nameInput.value;
  if (userName !== ''){

    const regEx = new RegExp("^[A-Z ]*$", 'gi');
    if (userName.match(regEx)){
      const nameAlert = document.querySelector("span.name-alert");
      nameAlert.textContent = "";
    } else{
      nameError();
    }
  }
}


//validate lastname field
function validateLastname(){
  const userLastname = lastnameInput.value;
  if (userLastname !== ''){

    const regEx = new RegExp("^[A-Z ]*$", 'gi');
    if (userLastname.match(regEx)){
      const lastnameAlert = document.querySelector("span.lastname-alert");
      lastnameAlert.textContent = "";
    } else{
      lastnameError();
    }
  }
}

//validate phone number field
function validatePhonenum(){
  const userPhonenum = phonenumInput.value;
  if (userPhonenum !== ''){

    const regEx = new RegExp("^[0-9 ]*$", 'gi');
    if (userPhonenum.match(regEx)){
      const phonenumAlert = document.querySelector("span.phonenum-alert");
      phonenumAlert.textContent = "";
    } else{
      phonenumError();
    }
  }
}

//validate email address
function validateEmail(){
  const emailAlert = document.querySelector("span.email-alert");
  emailAlert.textContent = "";
  const userEmail = emailInput.value;
  if (userEmail !== ''){
    const atPos = userEmail.indexOf("@");
    const dotPos = userEmail.indexOf(".");
    if (atPos < 1 || (dotPos - atPos < 2)){
      emailError();
    }
    return true;
  }else{
    const emailAlert = document.querySelector("span.lastname-alert");
    emailAlert.textContent = "";
  }
}

//getting form and form elements of the page
const form = document.querySelector("form");
const nameInput = document.querySelector("input[name=name]");
const lastnameInput = document.querySelector("input[name=lastname]");
const phonenumInput = document.querySelector("input[name=phone-num]");
const emailInput = document.querySelector("input[name=email]");

form.addEventListener('submit', validate);
nameInput.addEventListener('keyup', validateName);
nameInput.addEventListener('change', validateName);
lastnameInput.addEventListener('keyup', validateLastname);
lastnameInput.addEventListener('change', validateLastname);
phonenumInput.addEventListener('keyup', validatePhonenum);
phonenumInput.addEventListener('change', validatePhonenum);
emailInput.addEventListener('change', validateEmail);
