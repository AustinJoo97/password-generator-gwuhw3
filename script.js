// Assignment Code
let generateBtn = document.querySelector("#generate");
let copyBtn = document.querySelector("#copy")

// Added character object to be utilized when generating a password using "randomly" chosen characters
let charOptions = {
  numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  lowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  upperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  symbols: ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", "<", "=", ">", "?", ":", ";", "{", "}", "^", "|", "~", "_"]
}

// Coded generatePassword function to create a concatenated string using Math functions that randomly select and join 15 characters together to form a "random" password
function generatePassword(){
  let tempPassword = "";
  let charSelector;

  for(let i= 0; i < 15; i++){
    charSelector = Math.floor(Math.random() * charArray.length)
    tempPassword += charArray[charSelector];
  }

  return tempPassword;
}


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Added two more functions:
  // The first will, after generating a password by clicking the "id = generate" button, change the display of a hidden button called "id = copy"
  // The second function allows the "id = copy" button to take information from the DOM using the getElementById method to select the generated password and copy it to the clipboard in case the user would like to save it elsewhere. 
function enabler() {
  document.querySelector('#copy').style.display = "inline-block";
}

function copier(){
  document.getElementById("password").select();
  document.execCommand("copy");
  alert(`Copied secure password: ${document.getElementById("password").value}
  Please save elsewhere for later use!`);
}

generateBtn.addEventListener("click", enabler);

copyBtn.addEventListener("click", copier);


