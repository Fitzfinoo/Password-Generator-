 // Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];




 ///set all the variables
 let upCase;  
 let lowCase; 
 let numbs;
 let spChar; 
 let preference = [];
 let passwordLength;
 let selectedLength
 let result;


function getPasswordOptions() {

  passwordLength = prompt(
    "Please select your password length in between 10 to 64 characters."
  );
  if (passwordLength < 9 || passwordLength > 65 || isNaN(passwordLength)) {
    console.log("This is the password leght :", preference);
    preference.push(selectedLength);
    alert("Try again!");
  }
  else {
    spChar = confirm("Would you like special characters in your password?");
        if (spChar){
            console.log("This is spChar :",spChar);
            preference.push(spChar);
        }
    numbs = confirm("Would you like number in your password?");
        if (numbs){
           console.log("This is numbs :",numbs);
           preference.push(numbs);
         }
    lowCase = confirm("Would you like lowercase characters in your password?");
        if (lowCase){
            console.log("This is lowCase:" ,lowCase);
            preference.push(lowCase);
         }  
    upCase = confirm("Would you like uppercase characters in your password?");
        if (upCase){
             console.log("This is upCase:" ,upCase);
             preference.push(upCase);
         }   
         
  }
  if (preference.length===0){
    alert("Please select at least 1 type of characters! Try Again.")
    }

} 


//// Use for loop and math floor math random to get the result
function getRandom(arr) {

  for (let i=0; i>selectedLength; i++) {
    let getRandom = Math.floor(Math.random()*selectedLength);
    result += preference[random];
  }
}

// Function to generate password with user input
////bring all arr to generate PW 
//The array that holds all the possible choice that the users said true to. 

function generatePassword() {
  let PW = "";
  let possibleChoices =[];
  getPasswordOptions();
  getRandom();

  if (spChar){
    possibleChoices = possibleChoices.concat(specialCharacters);
  }

  if (numbs){
    possibleChoices = possibleChoices.concat(numericCharacters);
  }

  if (lowCase){
    possibleChoices = possibleChoices.concat(lowerCasedCharacters);
  }

  if (upCase){
    possibleChoices = possibleChoices.concat(upperCasedCharacters);
  }

  for (let i = 0; i < passwordLength; i++) {
    let getRandom = Math.floor(Math.random() * possibleChoices.length);
    let element = possibleChoices[getRandom];
    PW += element;
  } return PW; 
  } ;



// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);  
