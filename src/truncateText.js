//GENIUS MATHEBULA//
/**
 * Shortens text to a given length and adds dots.
 * @param {string} text - The text to shorten.
 * @param {number} maxLength - The maximum length allowed.
 * @returns {string} The shortened text.
 */
export function truncateText(text, maxLength) {
  if (typeof text !== "string") return "";
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}

console.assert(truncateText("JavaScript", 4) === "Java...");
console.assert(truncateText("Zaio", 10) === "Zaio");
console.assert(truncateText("", 5) === "");