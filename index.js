// SyntaxError: Unexpected end of input in JavaScript

// EXAMPLE 1 - Make sure you don't have missing parenesis, bracket and curly brace

function sum(a, b) {
  return a + b;
} // 👈️ added closing curly brace

if ('hi'.length === 2) {
  console.log('success');
} // 👈️ added closing curly brace

const arr = ['a', 'b', 'c']; // 👈️ adding closing square bracket

const obj = {name: 'Tom', age: 30}; // 👈️ added closing curly brace

// ------------------------------------------------------------------

// // EXAMPLE 2 - Make sure you aren't trying to JSON.parse an empty string

// console.log(JSON.parse('{"site": "bobbyhadz.com", "age": 30}'));

// // ⛔️ Uncaught SyntaxError: Unexpected end of JSON input
// // console.log(JSON.parse(''));

// ------------------------------------------------------------------

// // EXAMPLE 3 - Using a `try/catch` block to handle the error

// try {
//   const result = JSON.parse('');
//   console.log(result);
// } catch (err) {
//   // 👇️ SyntaxError: Unexpected end of JSON input
//   console.log('👉️ error', err);
// }
