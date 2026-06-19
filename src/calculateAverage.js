function calculateAverage(arr) {
  if (arr.length === 0) return 0;
  
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  
  return sum / arr.length;
}

const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

// Test cases
assert(calculateAverage([10, 20, 30]) === 20, 'Average of [10, 20, 30] should be 20');
assert(calculateAverage([]) === 0, 'Average of an empty array should be 0');
assert(calculateAverage([5, 5, 5, 5]) === 5, 'Average of identical numbers should be 5');
console.log('calculateAverage: all tests passed');
