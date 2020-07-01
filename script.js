//Generator functions
const resultEl = document.getElementById("password");
const generateEl = document.getElementById("generate");
const lengthPrompt = prompt("How long would you like your password to be? please choose between 8 and 126 characters.");
const lowerConfirm = confirm("Do you want your password to have lowercase letters?");
const upperConfirm = confirm("Do you want your password to have uppercase letters?");
const numberConfirm = confirm("Do you want your password to have numbers?");
const symbolConfirm = confirm("Do you want your password to have symbols?");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};
//add event listener to generate button and change the text in the text box to the genreated password when generate button is clicked.
generateEl.addEventListener("click", () => {
  const length = +lengthPrompt;
  const hasLower = lowerConfirm;
  const hasUpper = upperConfirm;
  const hasNumber = numberConfirm;
  const hasSymbol = symbolConfirm;

  resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
}); 
function generatePassword(lower, upper, number, symbol, length) {
    //initiate the password variable
    //filter out false prompts so that it doesn't use them.
    //loop over the length and call functions for each type of 
    //add final pw to the pw var so it displays on the screen
    if (length < 8 || length > 126) {
      alert("password must be between 8 and 126 characters, please refresh page and try again.")
      return "";
    }
    else {
    let generatedPassword = "";
    const typesCount = lower + upper + number + symbol;
    console.log("types count: ", typesCount);

    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
    console.log("types array: ", typesArr);
    
    if(typesCount === 0) {
      return "You can't make a password with out numbers, letters or symbols...";
    }

    for(let i = 0; i < length; i += typesCount) {
      typesArr.forEach(type => {
        const funcName = Object.keys(type)[0];
        
        generatedPassword += randomFunc[funcName]();
      });
    }
    const finalPassword = generatedPassword;
    return finalPassword;
    }  
};
//gets a random lowercase letter from char codes
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random()*26)+97);
};

console.log(getRandomLower());
// gets random Upper case letter from char codes.
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random()*26)+65);
};
console.log(getRandomUpper());
// gets random number from char codes.
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random()*10)+48);
};

console.log(getRandomNumber());
//gets random symbols from a string I made.
function getRandomSymbol() {
  const symbols = "!@#$%^&*()_+][{}:"
  return symbols[Math.floor(Math.random()*symbols.length)]
};
console.log(getRandomSymbol());