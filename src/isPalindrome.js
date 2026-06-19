/**
 * Kazadi Mukendi
 * Checks if a word reads the same forward and backward.
 * @param {string} text - The word to check.
 * @returns {boolean} True if it is a palindrome.
 */
export function isPalindrome(text) {
  if (typeof text !== "string") return false;

  const cleanedText = text.toLowerCase().replace(/\s+/g, "");
  const reversedText = cleanedText.split("").reverse().join("");

  return cleanedText === reversedText;
}

console.assert(isPalindrome("madam") === true);
console.assert(isPalindrome("racecar") === true);
console.assert(isPalindrome("hello") === false);