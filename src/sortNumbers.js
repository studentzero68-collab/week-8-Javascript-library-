//GENIUS MATHEBULA//
/**
 * Sorts numbers from smallest to biggest.
 * @param {number[]} numbers - The numbers to sort.
 * @returns {number[]} A sorted array.
 */

export function sortNumbers(numbers) {
  if (!Array.isArray(numbers)) return [];
  return [...numbers].sort((a, b) => a - b);
}

console.assert(JSON.stringify(sortNumbers([3, 1, 2])) === JSON.stringify([1, 2, 3]));
console.assert(JSON.stringify(sortNumbers([10, 5, 1])) === JSON.stringify([1, 5, 10]));
console.assert(JSON.stringify(sortNumbers([])) === JSON.stringify([]));