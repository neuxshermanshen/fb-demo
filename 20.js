const numbers = [1, 2, 3, 4, 5];

// function add2AndMul3(n) {
//   return (n + 2) * 3;
// }

// console.warn('add2AndMul3 = ', numbers.map(n => add2AndMul3(n)));

function add2(n) {
  return n + 2;
}

function mul3(n) {
  return n * 3;
}

console.warn('mul3(add2()) = ', numbers.map(n => mul3(add2(n))));
console.warn('add2(mul3()) = ', numbers.map(n => add2(mul3(n))));