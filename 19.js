const numbers = [1, 2, 3, 4, 5];

function add2AndMul3(n) {
  return (n + 2) * 3;
}

console.warn('add2AndMul3 = ', numbers.forEach(n => add2AndMul3(n)));

// add5AndMul7 ?
// mul5AndAdd7 ?

function add(x, y) {
return x+y;
}

function mul(x, y) {
  return x*y;
  }

  numbers.forEach(n => mul(add(n, 2), 3))



