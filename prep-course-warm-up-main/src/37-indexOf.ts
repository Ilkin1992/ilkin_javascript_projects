export {};

/**
 * Write a function that removes an element from array.
 * The function must:
 *  - NOT change the original array
 *  - return a new array with the first item matching `valueToRemove` removed
 */

// You are allowed to edit only this function
function remove(arr: any[], valueToRemove: any): any[] {
  const index = arr.indexOf(valueToRemove);
  // If valueToRemove is not found, return a copy of the original array
  if (index === -1) {
    return [...arr];
  }
  const newArr = [...arr.slice(0, index), ...arr.slice(index + 1)];
  return newArr;
}

const numbers = [1, 2, 3];
const names = ["John", "Alice", "Ellen"];

const newNumbers = remove(numbers, 2);
const newNames = remove(names, "Ellen");

console.log(newNumbers);
console.log(newNames);

/* 
  Expected output:
  
      [1, 3]
      [John, Alice]
*/
