export {};

//First task
function add(first: number, second: number) {
  return first + second;
}
//Second task
function subtract(first: number, second: number) {
  return first - second;
}
//Third task
function sum(arr: number[]) {
  const initialValue = 0;
  const sum = arr.reduce(
    (acc: number, curr: number) => acc + curr,
    initialValue
  );
  return sum;
}
//Fourth task
function multiply(arr: number[]) {
  let total = arr[0];
  for (let i = 1; i < arr.length; i++) {
    total = total * arr[i];
  }
  return total;
}
//Fifth task
function power(num: number, pow: number) {
  let result = 1;
  for (let i = 1; i <= pow; i++) {
    result *= num;
  }
  return result;
}

console.log(add(1, 2)); // Expected output: 3
console.log(subtract(1, 2)); // Expected output: -1
console.log(sum([1, 2, 3])); // Expected output: 6
console.log(multiply([1, 2, 3])); // Expected output: 6
console.log(power(2, 3)); // Expected output: 8
