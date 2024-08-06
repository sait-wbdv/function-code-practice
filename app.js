"use strict";

// 1. Greeting Message
function greetUser(userName) {
  if (userName == null) {
    throw new Error("A user name is required");
  }
  if (userName.trim() === "") {
    throw new Error("User name cannot be empty, provide a non-empty user name");
  }
  if (typeof userName !== "string") {
    throw new Error("Invalid user name type, user name must be a string");
  }
  // if all checks pass
  return `Hello ${userName}`;
}

console.log(greetUser("Finn"));

// 2. even/odd

function isNumberEven(number) {
  if (number === null) {
    throw new Error("Input is required, Please input a number");
  }
  if (typeof number !== "number" || isNaN(number)) {
    throw new Error("Invalid input type. input must be a number");
  }
  // if all checks pass
  return number % 2 === 0;
}

function logEvenOddResult(num) {
  if (isNumberEven(num)) {
    console.log(`${num} is even`);
  } else {
    console.log(`${num} is odd`);
  }
}

// 3. Calculator functions

/* These are the most dense examples, after reviewing, look ahead to 5 and 6 for ideas on working with try/catch blocks for better error handling */

const a = 21;
const b = 7;

function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Both arguments must be numbers.");
  }
  return a + b;
}
function subtract(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Both arguments must be numbers.");
  }
  return a - b;
}

function divide(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Both arguments must be numbers.");
  }
  if (b === 0) {
    throw new Error("Cannot divide by 0");
  }
  return a / b;
}

function multiply(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Both arguments must be numbers.");
  }
  return a * b;
}

const sum = add(a, b);
const diff = subtract(a, b);
const quotient = divide(a, b);
const product = multiply(a, b);

console.log(`Add: ${sum}`, `Subtract: ${diff}`, `Divide: ${quotient}`);

// Advanced Example try/catch block
try {
  const newProduct = multiply(a, "f");
  console.log(newProduct);
} catch (error) {
  console.error(`Error! ${error.message}`);
}

// 4. Check if a string contains a word

const text = "The quick brown fox jumps over the lazy dog";
const word = "fox";

function isWordInString(text, word) {
  if (typeof text !== "string" || typeof word !== "string") {
    throw new Error("Error: Both 'text' and 'word' must be strings.");
  }
  return text.includes(word);
}

// Use try/catch to manage output

try {
  if (isWordInString(text, word)) {
    console.log(`Yes, ${word} is in the string: ${text}`);
  } else {
    console.log(`No, ${word} is not in the string: ${text}`);
  }
} catch (error) {
  console.error(`Error! ${error.message}`);
}

// 5. concatenate 2 arrays

// This example demonstrates reassigning a globally declared let variable and then changing it's content in the try/catch block

const arrOne = [1, 2, 3];
const arrTwo = [4, 5, 6];
let resultArr;

function concatenateArrays(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new Error("Both arguments must be arrays.");
  }
  return arr1.concat(arr2);
}

try {
  resultArr = concatenateArrays(arrOne, arrTwo);
} catch (err) {
  console.error(`Error: ${err.message}`);
}
