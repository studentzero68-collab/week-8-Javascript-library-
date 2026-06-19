/** TINA
 * Removes duplicate values from an array.
 * @param {Array} items - The array with duplicate values.
 * @returns {Array} A new array without duplicates.
 */
export function removeDuplicates(items) {
  if (!Array.isArray(items)) return [];
  return [...new Set(items)];
}

console.assert(JSON.stringify(removeDuplicates([1, 2, 2, 3])) === JSON.stringify([1, 2, 3]));
console.assert(JSON.stringify(removeDuplicates(["a", "a", "b"])) === JSON.stringify(["a", "b"]));
console.assert(JSON.stringify(removeDuplicates([])) === JSON.stringify([]));