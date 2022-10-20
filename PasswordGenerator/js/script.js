//Event listeners
const characterAmountRange = document.querySelector("#characterAmountRange");
const characterAmountNumber = document.querySelector("#characterAmountNumber");
const form = document.querySelector("#passwordGeneratorForm");
const LOWERCASE_CHARACTERS = arrayFromLowToHigh(97, 122);
const UPPERCASE_CHARACTERS = arrayFromLowToHigh(65, 90);
const NUMBERS = arrayFromLowToHigh(48, 57);
const SYMBOLS = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 95))
  .concat(arrayFromLowToHigh(123, 126));
const passwordDisplay = document.querySelector("#password_display");

const includeUppercaseElement = document.querySelector("#includeUppercase");
const includeNumbersElement = document.querySelector("#includeNumbers");
const includeSymbolsElement = document.querySelector("#includeSymbols");

//Query selectors
characterAmountRange.addEventListener("input", syncCharacterAmount);
characterAmountNumber.addEventListener("input", syncCharacterAmount);

//Event listener on form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const characterAmount = characterAmountNumber.value;
  const includeUppercase = includeUppercaseElement.checked;
  const includeNumbers = includeNumbersElement.checked;
  const includeSymbols = includeSymbolsElement.checked;

  const password = createPassword(
    characterAmount,
    includeUppercase,
    includeNumbers,
    includeSymbols
  );
  passwordDisplay.innerText = password;
});

//Generating the password
function createPassword(
  characterAmount,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
  let items = LOWERCASE_CHARACTERS;
  if (includeUppercase) items = items.concat(UPPERCASE_CHARACTERS);
  if (includeNumbers) items = items.concat(NUMBERS);
  if (includeSymbols) items = items.concat(SYMBOLS);

  const generatedPassword = [];

  for (let i = 0; i < characterAmount; i++) {
    const itemCode = items[Math.floor(Math.random() * items.length)];
    generatedPassword.push(String.fromCharCode(itemCode));
  }
  return generatedPassword.join("");
}

//Creating arrays within necessary range
function arrayFromLowToHigh(low, high) {
  const arr = [];
  for (let i = low; i <= high; i++) {
    arr.push(i);
  }
  return arr;
}

//Sync range and number
function syncCharacterAmount(e) {
  const value = e.target.value;
  characterAmountRange.value = value;
  characterAmountNumber.value = value;
}
