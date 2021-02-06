const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

///////////////////////// FUNCTIONS /////////////////////////////////

// Check required fields
function checkRequired(inputArr){
  inputArr.forEach(input=>{
    if(input.value.trim()=== ""){
      // Show Error
      showError(input,`${capFirst(input)} is required`);
    } else{
      // Show Success
      showSuccess(input);
    }
  })
}

// Show Error
function showError(input,message){
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  
  const small = formControl.querySelector("small");
  small.innerText = message;
}


// Show Success
function showSuccess(input){
  input.parentElement.className = "form-control success";

}

// Capitalize first letter
function capFirst(input){
  const firstLetter =input.id[0];
  return firstLetter.toUpperCase()+input.id.slice(1);
}

// Check Length
function checkLength(input, min, max){
  if(input.value.length<min){
    // Show error
    showError(input,`${capFirst(input)} should be more than ${min} characters`)
  } else if (input.value.length>max){
    // Show error
    showError(input,`${capFirst(input)} should be less than ${max} characters`)
  } else {
    // Show success
    showSuccess(input);
  }
}

function checkEmail(email){
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isAllowed = re.test(String(email.value).toLowerCase());

  if(isAllowed){
    showSuccess(email);
  } else{
    showError(email,`${capFirst(email)} is not allowed`)
  }
}

function checkPasswordsMatch(p1,p2){
  if(p1.value!==p2.value){
    showError(p2, "Password does not match");
  }
}

///////////////////////// EVENT LISTENERS ///////////////////////////

form.addEventListener("submit",(e)=>{
  e.preventDefault();

  // Check username field
  checkRequired([username,email,password,password2]);
  // Check length
  checkLength(username,5,20);
  checkLength(email,5,30);
  // Check email
  checkEmail(email);
  // Check if passwords match
  checkPasswordsMatch(password,password2);
})