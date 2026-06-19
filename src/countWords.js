function countWords(str) {
  const trimmedStr = str.trim();
  if (trimmedStr === '') return 0;
  
  // Split the string by one or more spaces and filter out empty strings
  return trimmedStr.split(/\s+/).length;
}

// Example usage:
console.log(countWords("Hello, welcome to JavaScript! ")); // Output: 4
