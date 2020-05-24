// Assignment Code
var generateBtn = document.querySelector("#generate");

 

// Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

  }

 function generatePassword()	
{

// This enforces a positive integer between 8 and 128.

do{ 
  var passwordLength = prompt("Please select the length (positive integer) of your password with a minimum of 8 characters and no more than 128 characters.");
  var passwordLength = parseFloat(passwordLength);
  var check = isNaN(passwordLength);
  
  var passint = Number.isInteger(passwordLength);
  }
while(check === true || passwordLength < 8 || passint === false || passwordLength > 128);

// This enforces that at least one type of character is chosen for the password.

do
{
 var lowerCaseQ = confirm("Do you want to include lower case letters in your password?");
 var upperCaseQ = confirm("Do you want to include upper case letters in your password?");
 var numericQ = confirm("Do you want to include numbers in your password?");
 var specCharQ = confirm("Do you want to include special characters in your password?");

}
while(lowerCaseQ ===false && upperCaseQ ===false && numericQ === false && specCharQ===false) ;

// initializes remaining variables

 var password = "";

 var all = "";

 var passwordNow = "";
 

  var lowerCase ='abcdefghiklmnopqrstuvwxyz';

  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  var numeric = '0123456789'

  var special = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";


  // Based upon what character type(s) is(are) chosen, set the all variable so that a password can be generated.

  if(lowerCaseQ === true && upperCaseQ === true && numericQ === true && specCharQ === true){
     var all = all.concat(lowerCase, upperCase, numeric, special)
   };

   if(lowerCaseQ === true && upperCaseQ === true && numericQ === false && specCharQ === false){
     var all = all.concat(lowerCase, upperCase)
   };

   if(lowerCaseQ === true && upperCaseQ === false && numericQ === true && specCharQ === false){
     var all = all.concat(lowerCase, numeric)
   };

   if(lowerCaseQ === true && upperCaseQ === false && numericQ === false && specCharQ === true){
     var all = all.concat(lowerCase, special)
   };

   if(lowerCaseQ === false && upperCaseQ === true && numericQ === true && specCharQ === false){
     var all = all.concat(upperCase, numeric)
   };

   if(lowerCaseQ === false && upperCaseQ === true && numericQ === false && specCharQ === true){
     var all = all.concat(upperCase, special)
   };

   if(lowerCaseQ === true && upperCaseQ === true && numericQ === true && specCharQ === false){
     var all = all.concat(lowerCase, upperCase, numeric)
   };

   if(lowerCaseQ === true && upperCaseQ === true && numericQ === false && specCharQ === true){
     var all = all.concat(lowerCase, upperCase, special)
   };

   if(lowerCaseQ === false && upperCaseQ === false && numericQ === true && specCharQ === true){
     var all = all.concat(numeric, special)
   };


   if(lowerCaseQ === true && upperCaseQ === false && numericQ === false && specCharQ === false){
     var all = lowerCase;
   };

 
   if(lowerCaseQ === false && upperCaseQ === true && numericQ === false && specCharQ === false){
     var all = upperCase
   };
   
  
  
   if(lowerCaseQ === false && upperCaseQ === false && numericQ === true && specCharQ === false){
     var all = numeric
   };


   if(lowerCaseQ === false && upperCaseQ === false && numericQ === false && specCharQ === true){
     var all = special
   };

  // Does the Work!  Generates a random character and appends to the string until the length reaches the password length.

 	for (var i=0; i<passwordLength; i++) {
     var randomNum= Math.floor(Math.random() * all.length);
     console.log(randomNum);
     console.log(all.charAt(randomNum));
     passwordNow += all.charAt(randomNum);

   }
     return passwordNow;
 	}

  
// // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);
