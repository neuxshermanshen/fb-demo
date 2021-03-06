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

// 組合的 function，右邊先執行
function compose(...functions) {
  // write your code here
  return function (n) {
    return functions.reduceRight((currentValue, currentFunc) => currentFunc(currentValue), n);
  }
}

const myComposeFunc = compose(add5, mul3, add2);
console.warn(
  numbers,
  'compose(add5, mul3, add2)',
  numbers.map(n => myComposeFunc(n)),
);