// Assignment Code - Makes Button Click Happen
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
// This creates the password that the user sees after prompts
//README: If user inputs character count within 8 - 128 charcters, function runs
function writePassword() {
  var password = generatePassword();
  if (password !== null) {
    // Select the password text box
    var passwordText = document.querySelector("#password");
    // Set value/contents of text box to be the value in which the user receives
    passwordText.value = password;
  }
}

// Generate Password to Return a Password Result
// The function prompts the user to determine what variables should be used in the password.
function generatePassword() {
  // Setting all user selected variables to be apart of the allCharacters array
  var allCharacters = []
  // This prompts user to decide which variables to add to password and confirms them at T/F
  var wantsUpper = confirm("Do you want to use uppercase letters?")
  var wantsLower = confirm("Do you want to use lowercase letters?")
  var wantsNumber = confirm("Do you want to use numbers?")
  var wantsSpecial = confirm("Do you want to use special characters?")
  // wantsLength will allow user to decide how many character they want their password to be
  var wantsLength = prompt("How long do you want the password to be?")
  // Converts string of numbers to integers
  wantsLength = parseInt(wantsLength)
  console.log(wantsLength, typeof wantsLength)
  // Sets parameters for password to be between 8 or 128 characters in length
  if (wantsLength < 8 || wantsLength > 128) {
    // If it returns null, derails function for happening and alerts user
    alert("Password must be between 8 - 128 characters! Please select OKAY and try again.")
    return null
  }
  // This places user selections in the the allCharacter array to generate type of password desired
  if (wantsUpper) {
    allCharacters = allCharacters.concat(upperLetters)
  }
  if (wantsLower) {
    allCharacters = allCharacters.concat(lowerLetters)
  }
  if (wantsNumber) {
    allCharacters = allCharacters.concat(numbers)
  }
  if (wantsSpecial) {
    allCharacters = allCharacters.concat(specialChar)
  }
  console.log(allCharacters)
  // If allCharacters is empty...
  if (allCharacters.length == 0){
    // Result return null and user will be prompted to retry for new password
    alert("Password must contain uppercase letters, lowercase letters, numbers, or special characters! Please select OKAY and try again.")
    return null
  }
// This generates the final password
  var finalPassword = ""
  // Uses wantsLength to determine number if time function will run
  for (i = 0; i < wantsLength; i++) {
    // Returns a number between 0 and the wantsLength
    var index = rand(0, allCharacters.length)
    // Defines which index to use from the array
    var randomChar = allCharacters[index]
    console.log(finalPassword)
    // Combines all the characters
    finalPassword += randomChar
  }
  // The result the user will see after function is run
  return finalPassword
}

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var upperLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var specialChar = ['@', '%', '+', ',', '/', '"', '!', '#', '^', '?', ':', ';', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.']

// 
function rand(low, high) {
  var diff = high - low
  return Math.floor((diff) * Math.random() + low)
}

// // Math.Random IS NEEDED FOR THIS!!
//   return generatePassword
// }


//GOAL: Generate a password that contains upper case letters, lower case numbers, and/or special characters.
// Ask if Manny want upper case letters, lower case letters, numbers, and/or special characters.


// Do alerts to ask if variable is wanted (there would be 4 alerts for this section)  
// Needs to be between 8 - 128 characters
// Ask the use how long do you want the password to be
// Create alert if under 8 charaters
// Create alert if over 129 character
// Answers need to be evaluated and placed into variables
// Manny's answers will become part of the conditional (ie:


// // var letters = ['A', 'B', 'C'];
// // var random = Math.floor((letters.length) * Math.random())
// //   console.log(letters[random])

// var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// var randomNumber = Math.floor((numbers.length) * Math.random())
// console.log(numbers[randomNumber])

// var numberGenerated = 0
// for (i = 0; i < 16; i++) {
//   var randomNumber = Math.floor((numbers.length) * Math.random())
//   console.log(numbers[randomNumber])

//   numberGenerated = numberGenerated.toString() + numbers[randomNumber].toString()
// }
// console.log(numberGenerated)

// ///////////////////////////////////////////////////////////

// var upperLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
// var randomLetterUpper = Math.floor((upperLetters.length) * Math.random())
// console.log(upperLetters[randomUpperLetter])

// var upperLetterGenerated = 0
// for (i = 0; i < 26; i++) {
//   randomLetterUpper = Math.floor((upperLetters.length) * Math.random())
//   console.log(upperLetters[randomUpperLetter])

//   upperLetterGenerated = upperLetterGenerated + upperLetters[randomLetterUpper]
// }
// console.log(upperLetterGenerated)

// //////////////////////////////////////////////////////////////

// var lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
// var randomLetterLower = Math.floor((lowerLetter.length) * Math.random())
// console.log(lowerLetters[randomLetterLower])

// var lowerLetterGenerated = 0
// for (i = 0; i < 26; i++) {
//   randomLetterLower = Math.floor((lowerLetters) * Math.random())

//   console.log(lowerLetters[randomLetterLower])

//   lowerLetterGenerated = lowerLetterGenerated + lowerLetters[randomLetterLower]
// }
// console.log(lowerLetterGenerated)

// //////////////////////////////////////////////////////////////

// var specialChar = ['@', '%', '+', ',', '/', '"', '!', '#', '^', '?', ':', ';', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.']
// var randomSpecialChar = Math.floor((specialChar.length) * Math.random())
// console.log(specialChar[randomSpecialChar])

// var specialCharGenerated = 0
// for (i = 0; i < 23; i++) {
//   randomSpecialChar = Math.floor((specialChar.length) * Math.random())
//   console.log(specialChar[randomSpecialChar])

//   specialCharGenerated = specialCharGenerated + specialChar[randomSpecialChar]
// }
// console.log(specialChar[randomSpecialChar])

/////////////////////////////////////////////////////////////

// MUST HAVE THESE TO CREATE FUNCTIONING PROGRAM!!
// variables, conditionals, loop, function
// FUNCTION = What is actually happening with the program (Do you want upper case letters?)
// VARIABLE = The response/answer the function that is stored for later reference (Manny wants upper case letters)
// CONDITIONALS = Condition of the variable (If Manny says yes, do this; if Manny says no, do something else)
// LOOP = The repeated instructions for the program (Function loops until character count is met)
