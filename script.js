// Assignment Code
let generateBtn = document.querySelector("#generate");
// Added character array to be utilized when generating a password using "randomly" chosen characters
let charArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "!", "#", "$", "%", "&", "(", ")", "*", "+", "-", "<", "=", ">", "?", ":", ";", "{", "}", "^", "|", "~", "_"]

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
