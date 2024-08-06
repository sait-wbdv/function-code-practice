"use strict";

// 1. Greeting Message
const userName = "Finn";
let greeting = `Hello ${userName}`;
console.log(greeting);

// Call the function and pass an argument

// 2. even/odd check
const number = 7;
if (number % 2 === 0) {
  console.log(`${number} is even`);
} else {
  console.log(`${number} is odd`);
}

// Call the function and pass an argument

// 3. Calculator functions

const a = 7;
const b = 21;

// store each result in a variable and console log that value

const sum = a + b;
const diff = a - b;
const quotient = b / a;
const product = a * b;

// 4. Check if a string contains a word

const text = "The quick brown fox jumps over the lazy dog";
const word = "fox";
if (text.includes(word)) {
  console.log(`The text contains the word: ${word}`);
}

// execute the function and log the result, test with different sentences and words

// 5. concatenate 2 arrays

const arrOne = [1, 2, 3];
const arrtwo = [4, 5, 6];
let combinedArray = arrayOne.concat(arrayTwo);
