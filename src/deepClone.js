/**
 * Kazadi Mukendi
 * Creates a deep copy of an object or array.
 * @param {Object|Array} value - The value to clone.
 * @returns {Object|Array} A copied version of the value.
 */

export function deepClone(value) {
  return JSON.parse(JSON.stringify(value));
}

const original = { name: "Kazadi", marks: [80, 90] };
const copy = deepClone(original);

console.assert(copy.name === "Kazadi");
console.assert(copy.marks[0] === 80);
console.assert(copy !== original);