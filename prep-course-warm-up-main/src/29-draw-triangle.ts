export {};

/**
 * If you find yourself stuck with this exercise, perhaps a more visual approach would help:
 *  - https://blog.codeanalogies.com/2017/11/07/javascript-for-loops-explained/
 */

function draw(num: number): void {
  let arr: string[] = [];
  let symb: string = "*";
  for (let i = 1; i <= num; i++) {
    arr.push(symb);
  }
  console.log(arr.toString().replace(/,/g, ""));
}

draw(3);
/* Expected output:

    *
    **
    ***

*/

draw(5);
/* Expected output:

    *
    **
    ***
    ****
    *****

*/
