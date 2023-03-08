export {};

function isBlank(str: string | null) {
  if (str?.trim() === "" || str === null) {
    return true;
  } else {
    return false;
  }
}

console.log(isBlank(null)); // Expected output: true
console.log(isBlank("")); // Expected output: true
console.log(isBlank(" ")); // Expected output: true
console.log(isBlank("abc")); // Expected output: false
console.log(isBlank(" abc ")); // Expected output: false
