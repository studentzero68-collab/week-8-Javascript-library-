function countWords(str) {
  const trimmedStr = str.trim();
  if (trimmedStr === '') return 0;
  
  // Split the string by one or more spaces and filter out empty strings
  return trimmedStr.split(/\s+/).length;
}

const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

// Test cases
assert(countWords('Hello, welcome to JavaScript! ') === 4, 'Should count words in a normal sentence');
assert(countWords('   ') === 0, 'Should return 0 for a string with only whitespace');
assert(countWords('One  two   three') === 3, 'Should count words correctly with multiple spaces between them');
console.log('countWords: all tests passed');
