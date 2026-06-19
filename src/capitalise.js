function capitalizeFirstLetter(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

// Test cases
assert(capitalizeFirstLetter('hello world') === 'Hello world', 'Should capitalize the first letter of a lowercase string');
assert(capitalizeFirstLetter('Already Capitalized') === 'Already Capitalized', 'Should leave a string that already starts with a capital letter unchanged');
assert(capitalizeFirstLetter('a') === 'A', 'Should capitalize a single lowercase letter');
console.log('capitalizeFirstLetter: all tests passed');
