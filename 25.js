const numbers = [1, 2, 3, 4, 5];

function add(x) {
  return function (y) {
    return x + y;
  }
}

function mul(x) {
  return function (y) {
    return x * y;
  }
}

const add2 = add(2);
const mul3 = mul(3);
const add5 = add(5);

// 組合的 function，左邊先執行
function pipe(...functions) {
  // write your code here
}

const myComposeFunc = pipe(add5, mul3, add2);
console.warn(
  numbers,
  'pipe(add5, mul3, add2)',
  numbers.map(n => myComposeFunc(n)),
);