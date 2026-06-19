/**
 * debounce.js
 * Author: Ricardo Ngozo
 *
 * Delays a function until after a set time has passed since the last call.
 *
 * @param {Function} callback - The function to execute after the delay.
 * @param {number} delay - The delay in milliseconds.
 * @returns {Function} A debounced version of the callback function.
 */
export function debounce(callback, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

// Test Cases
console.assert(
  typeof debounce(() => {}, 300) === "function",
  "Should return a function"
);

console.assert(
  typeof debounce(console.log, 500) === "function",
  "Should return a function when given console.log"
);

console.assert(
  debounce(() => "test", 100) instanceof Function,
  "Returned value should be a Function instance"
);