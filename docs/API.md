# API Documentation

This document describes all utility functions included in the project.

---

# capitalise

Capitalises the first letter of a string.

### Parameters

| Name | Type   | Description        |
| ---- | ------ | ------------------ |
| text | string | Text to capitalise |

### Returns

String

### Example

```js
capitalise("hello");
```

Output:

```js
"Hello"
```

---

# truncateText

Shortens text and adds three dots if needed.

### Parameters

| Name      | Type   | Description            |
| --------- | ------ | ---------------------- |
| text      | string | Text to shorten        |
| maxLength | number | Maximum allowed length |

### Returns

String

### Example

```js
truncateText("JavaScript", 4);
```

Output:

```js
"Java..."
```

---

# formatDate

Formats a date into DD/MM/YYYY format.

### Parameters

| Name | Type |
| ---- | ---- |
| date | Date |

### Returns

String

### Example

```js
formatDate(new Date());
```

---

# deepClone

Creates a deep copy of an object or array.

### Parameters

| Name | Type   |
| ---- | ------ |
| data | object |

### Returns

Object or Array

---

# debounce

Delays execution of a function.

### Parameters

| Name     | Type     |
| -------- | -------- |
| callback | Function |
| delay    | number   |

### Returns

Function

---

# slugify

Converts text into a URL-friendly slug.

### Example

```js
slugify("Hello World");
```

Output:

```js
"hello-world"
```

---

# formatCurrency

Formats a number as currency.

### Example

```js
formatCurrency(99.99);
```

Output:

```js
"R99.99"
```

---

# removeDuplicates

Removes duplicate values from an array.

### Example

```js
removeDuplicates([1, 1, 2, 3]);
```

Output:

```js
[1, 2, 3]
```

---

# randomNumber

Returns a random number between a minimum and maximum value.

---

# isPalindrome

Checks if a word or phrase is a palindrome.

### Example

```js
isPalindrome("level");
```

Output:

```js
true
```

---

# calculateAge

Calculates a person's age using their birth year.

---

# sortByProperty

Sorts an array of objects using a selected property.

---

# chunkArray

Splits an array into smaller arrays of a specified size.

---

# reverseString

Reverses a string.

### Example

```js
reverseString("hello");
```

Output:

```js
"olleh"
```

---

# countWords

Counts the number of words in a string.

### Example

```js
countWords("I love JavaScript");
```

Output:

```js
3
```