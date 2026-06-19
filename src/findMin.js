//GENIUS MATHEBULA//
/**
 * Finds the smallest number in an array.
 * @param {number[]} numbers - The numbers to check.
 * @returns {number|null} The smallest number or null if empty.
 */
export function findMin(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) return null;

  let min = numbers[0];

  for (let number of numbers) {
    if (number < min) {
      min = number;
    }
  }

  return min;
}