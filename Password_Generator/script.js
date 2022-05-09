// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var smallletter = ['a', 'b', 'c', 'd', 'w', 'x', 'y', 'z']
  var capitalletters = ['A', 'B', 'C', 'D', 'W', 'X','Y', 'Z']
  var signs = ['!', '#', '$', '%','&', '*', '?','@']
  var numbers = ['1','2','3','4','5','6','7','8','9','0']
  var allDigits = [...capitalletters, ... smallletter, ...signs, ...numbers]
  console.log(allDigits.length)

  for (let i = 0; i < allDigits.length; i++) {
     
      
  }
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);