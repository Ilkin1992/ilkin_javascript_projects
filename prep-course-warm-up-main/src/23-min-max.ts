export {};

/**
 * Try to find at least two different solutions for this exercise,
 * one of which does not use built-in Math methods.
 */

//First version
// const min = (array: number[]) => {
//     return Math.min(...array)
// };

//Second version
const min = (array: number[]) => {
  let smallestNumber = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < smallestNumber) {
      smallestNumber = array[i];
    }
  }
  return smallestNumber;
};

//First version
// const max = (array: number[]) => {
//     return Math.max(...array)
// };

//Second version
const max = (array: number[]) => {
  let biggestNumber = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > biggestNumber) {
      biggestNumber = array[i];
    }
  }
  return biggestNumber;
};

console.log(min([1, 2, 3, 4, 5])); // Expected output: 1
console.log(min([9, -3, 6])); // Expected output: -3
console.log(max([1, 2, 3, 4, 5])); // Expected output: 5
console.log(max([9, -3, 6])); // Expected output: 9
