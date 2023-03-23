export {};

/**
 * Currency Formatting
 *
 * The business is now breaking into the Brazilian market
 * Write a new function for converting to the Brazilian real
 * They have also decided that they should add a 1% fee to all foreign transactions
 *
 * Additional Challenge:
 * Find a way to add 1% to all currency conversions
 * (think about the DRY (don't repeat yourself) principle)
 * You are allowed to create your own functions
 * and use them in place of convertToUSD() and convertToBRL()
 */

// You are allowed to change this function

function count(price: number, onePercent: number, conversionRate: number) {
  price = price - onePercent;
  return (price * conversionRate).toFixed(2);
}

function convertToUSD(price: number) {
  let onePercent: number = price / 100;
  return count(price, onePercent, 1.4);
}

function convertToBRL(price: number) {
  let onePercent: number = price / 100;
  return count(price, onePercent, 2);
}

const product = "You don't know JS";
const price = 12.5;
const priceInUSD = convertToUSD(price);
const priceInBRL = convertToBRL(price);

console.log("Product: " + product);
console.log("Price: $" + priceInUSD);
console.log("Price: R$" + priceInBRL);

/* Expected output:

    > Product: You don't know JS
    > Price: $?
    > Price: R$?

*/
