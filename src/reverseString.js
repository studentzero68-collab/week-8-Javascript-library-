/* Kazadi Mukendi
- Reverses a string.
- @param {string} text - The text to reverse.
- @returns {string} The reversed text.
*/

export function reverseString(text) {
  if (typeof text !== "string") return "";
  return text.split("").reverse().join("");
}

console.assert(reverseString("Kazadi") === "idazaK");
console.assert(reverseString("Mukendi") === "indekuM");
console.assert(reverseString("") === "");