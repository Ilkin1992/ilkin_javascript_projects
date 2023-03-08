export {};

const count = (sentence: string, word: string) => {
  const words = sentence.split(" ");

  return words.filter((w) => w.toLowerCase() === word.toLowerCase()).length;
};

console.log(count("The quick brown fox jumps over the lazy dog", "the")); // Expected output: 2
console.log(count("The quick brown fox jumps over the lazy dog", "fox")); // Expected output: 1
