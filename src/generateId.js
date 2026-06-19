/**
 * Generates a random ID with a prefix.
 * @param {string} prefix - The text to start the ID with.
 * @returns {string} A random ID.
 */
export function generateId(prefix) {
  const randomNumber = Math.floor(Math.random() * 10000);
  return `${prefix}-${randomNumber}`;
}

console.assert(generateId("user").startsWith("user-"));
console.assert(generateId("task").startsWith("task-"));
console.assert(typeof generateId("item") === "string");