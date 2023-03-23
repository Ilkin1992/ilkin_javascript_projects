export {};

function truncateString(word: string, position: number) {
  return word.slice(0, position);
}

console.log(truncateString("CODELEX", 4)); // Expected output: CODE
