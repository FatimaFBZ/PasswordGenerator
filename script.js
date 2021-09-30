// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword (){
  var password= generatePassword();
  var passwordText = document.querySelector("#password")

  passwordText.value = password;
}
function getOptions(){
  
  var length = parseInt( prompt("passwordLength"))
  console.log(length)
  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (Number.isNaN(length)) {
    alert('Password length must be provided as a number');
    return null;
  }
  if(length<8){
    alert("the password should be greater that 8")
    return null
  };
  if(length >128){
    alert("the password should be less than 128")
    return null
  }
  
  var lowerCase = confirm("do you want your password to be lowercase?")
  var upperCase = confirm("do you want your password to be uppercase?")
  var numeric = confirm("do you want your password to be numeric?")
  var specialCharacter = confirm("do you want your password to be special character?")
var word = {
  length: length,
  upperCase: upperCase,
  lowerCase: lowerCase,
  numeric: numeric,
  specialCharacter: specialCharacter

}

return word;

}


function generatePassword() {
  var optionsPassword = getOptions();

  var characters ='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?<>:"| ';
  var passwordLength =8;
  var passwordValue= '';

   passwordValue= '';

  for ( let i=0; i< passwordLength; i++) 
  {
    var number = Math.floor(Math.random() * characters.length);
    passwordValue += characters.substring(number, number+1);
    
  }

  return passwordValue;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword );