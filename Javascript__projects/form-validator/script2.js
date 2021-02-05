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
      showError(input,`${input.id} is required`);
    } else{
      // Show Success
      showSuccess(input);
    }
  })
}

// Show Error
function showError(input,message){
  input.parentElement.className = "form-control error";
  
}


// Show Success
function showSuccess(input){
  input.parentElement.className = "form-control success";

}



///////////////////////// EVENT LISTENERS ///////////////////////////

form.addEventListener("submit",(e)=>{
  e.preventDefault();

  // Check username field
  checkRequired([username,email,password,password2]);
})