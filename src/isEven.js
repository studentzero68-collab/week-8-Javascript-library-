/**
 * (TINA) Checks if a number is even.
 * @param {number} number - The number to check.
 * @returns {boolean} True if the number is even.
 */
export function isEven(number) {
  return typeof number === "number" && number % 2 === 0;
}

console.assert(isEven(4) === true);
console.assert(isEven(7) === false);
console.assert(isEven("4") === false);