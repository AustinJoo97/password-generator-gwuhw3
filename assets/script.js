// Assignment Code
let generateBtn = document.querySelector("#generate");
let copyBtn = document.querySelector("#copy")

// Added character object to be utilized when generating a password using "randomly" chosen characters; number keys correspond to different options when user is prompted
let charOptions = {
  0: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  1: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  2: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  3: ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", "<", "=", ">", "?", ":", ";", "{", "}", "^", "|", "~", "_"]
}

// Coded generatePassword function to create a concatenated string using Math functions that randomly select and join 15 characters together to form a "random" password
function generatePassword(){
  // Several prompts will first be given to the user to dictate the length and criteria of the desired password. This will dictate both the initial for-loop to determine acceptedOptions as well as the latter for loop when the actual password is generated.

  // The first prompt will determine the length of the password. If the password desired is too long (exceeds 128 characters) or not a number, the password is invalid and will have no need to ask for criteria. This is why they promopt was chosen to be first.
  // A while loop was used to reassign and check if pwLength was an acceptable value to continue the user to enter a correct value until an acceptable value was entered.
    // If the prompt is cancelled, the code discontinues and no password is generated
  // The Number() function was used as it parses a string into either an interger or a float value and returns non numerical strings as NaN
  let pwLength = prompt(`Please enter desired password length up to 128:`);

  if(pwLength){
    while (!Number(pwLength) || Number(pwLength) > 128 || Number(pwLength) < 1){
      pwLength = prompt(`Invalid. Please enter a number up to 128: `)
      if(!pwLength){
        break;
      }
    }

    let allowNumber = confirm("Would you like numbers in your password?");
    let allowLower = confirm("Would you like lower case letters in your password?");
    let allowUpper = confirm("Would you like upper case letters in your password?");
    let allowSymbols = confirm("Would you like symbols in your password?");

    // This array will dictate what the criteria the user has chosen and will determine which characters can be used in the password generated. Each criterium will correspond to a value between 0 and 3.
    let acceptedOptions = [];
    if(allowNumber){
      acceptedOptions.push(0);
    } 
    if(allowLower){
      acceptedOptions.push(1);
    }
    if(allowUpper){
      acceptedOptions.push(2);
    }
    if(allowSymbols){
      acceptedOptions.push(3);
    }

    if(acceptedOptions.length === 0){
      alert("Could not generate valid password. Please regenerate password with valid criteria!")
      return;
    }

    let tempPassword = "";
    let typeSelector;
    let charSelector;
  
    // This for loop will iterate the number of times as determined by the user in the initial prompt asking for the desired password length. With this number, a "random" number will be chosen between 0-3 (index values corresponding to the charOptions obj) and take acceptable characters, adding them to the password string given the generated "typeSelector" exists in the "acceptedOptions" array.
    for(let i= 0; i < pwLength; i++){
      typeSelector = Math.floor(Math.random() * 4);
      if(acceptedOptions.includes(typeSelector)){
        charSelector = Math.floor(Math.random() * charOptions[typeSelector].length);
        tempPassword += charOptions[typeSelector][charSelector];
      } else {
        i -= 1;
      }
    }
  
    return tempPassword;
  } else {
    return "No Password Generated"
  }
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
  alert(`Copied secure password: \n\n${document.getElementById("password").value} \n\nPlease save elsewhere for later use!`);
}

generateBtn.addEventListener("click", enabler);

copyBtn.addEventListener("click", copier);


