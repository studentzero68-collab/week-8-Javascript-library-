/**
 * findMax.js
 * Author: Ricardo Ngozo
 *
 * Finds the biggest number in an array.
 *
 * @param {number[]} numbers - The numbers to check.
 * @returns {number|null} The biggest number or null if the array is empty.
 */
export function findMax(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) return null;

  let max = numbers[0];

  for (let number of numbers) {
    if (number > max) {
      max = number;
    }
  }

  return max;
}

// Test Cases
console.assert(
  findMax([1, 5, 3]) === 5,
  "Should return 5 as the largest number"
);

console.assert(
  findMax([-1, -5, -3]) === -1,
  "Should return -1 as the largest negative number"
);

console.assert(
  findMax([]) === null,
  "Should return null for an empty array"
);