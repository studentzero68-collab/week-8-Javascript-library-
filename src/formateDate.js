/**
 * formatDate.js
 * Author: Ricardo Ngozo
 *
 * Formats a date into DD/MM/YYYY format.
 *
 * @param {Date} date - The date to format.
 * @returns {string} The formatted date.
 */
export function formatDate(date) {
  if (!(date instanceof Date)) return "";

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

// Test Cases
console.assert(
  formatDate(new Date(2026, 0, 5)) === "05/01/2026",
  "Should format 5 January 2026 correctly"
);

console.assert(
  formatDate(new Date(2025, 11, 25)) === "25/12/2025",
  "Should format 25 December 2025 correctly"
);

console.assert(
  formatDate("wrong") === "",
  "Should return an empty string for invalid input"
);