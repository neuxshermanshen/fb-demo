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

function minus(x) {
  return function (y) {
    return y-x;
  }
}

const add2 = add(2);
const mul3 = mul(3);

// 組合的 function，右邊先執行
function compose(func2, func1) {
  return function (n) {
    return func2(func1(n));
  }
}

const add2AndMul3 = compose(mul3, add2);
console.warn(
  'add2AndMul3 : compose(mul3, add2)',
  numbers.map(n => add2AndMul3(n)),
);

const mul3AndAdd1 = compose(minus(1), compose(add(1), mul(3)));
const mul3AndAdd2 = compose(compose(minus(1), add(1)), mul(3));
console.warn(
  'mul3AndAdd1 : compose(add(1), mul(3))',
  numbers.map(n => mul3AndAdd1(n)),
  numbers.map(n => mul3AndAdd2(n)),
);