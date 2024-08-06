"use strict";

// 1. Greeting Message
function greetUser(userName) {
  return `Hello ${userName}`;
}

console.log(greetUser("Finn"));

// 2. even/odd

function isNumberEven(number) {
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

const a = 7;
const b = 21;

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return b - a;
}
function divide(a, b) {
  return b / a;
}
function multiply(a, b) {
  return a * b;
}
const sum = add(a, b);
const diff = subtract(a, b);
const quotient = divide(a, b);
const product = multiply(a, b);

console.log(
  `Add: ${sum}`,
  `Subtract: ${diff}`,
  `Divide: ${quotient}`,
  `Multiply: ${product}`
);

// 4. Check if a string contains a word

const text = "The quick brown fox jumps over the lazy dog";
const word = "fox";

function isWordInString(text, word) {
  return text.includes(word);
}

if (isWordInString(text, word)) {
  console.log(`Yes, ${word} is in the string: ${text}`);
} else {
  console.log(`No, ${word} is not in the string: ${text}`);
}

// 5. concatenate 2 arrays

const arrOne = [1, 2, 3];
const arrTwo = [4, 5, 6];

function concatenateArrays(arr1, arr2) {
  return arrOne.concat(arrTwo);
}

const arrThree = concatenateArrays(arrOne, arrTwo);

console.log(arrThree);
