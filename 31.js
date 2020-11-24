function createArr(x, y) {
  return function () {
    const arr = [];
    for (let i = x, l = y; i <= l; ++i) {
      arr.push(i);
    }
    return arr;
  }
}

function pipe(...functions) {
  return function (n) {
    return functions.reduce((currentValue, currentFunc) => currentFunc(currentValue), n);
  }
}

function tap(func) {
  return function (arr) {
    arr.forEach(item => func(item));
    return arr;
  }
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function take(count) {
  return function (arr) {
    return [...arr].splice(0, count);
  }
}

function print(item) {
  console.warn(item);
}

const myFunc = pipe(
  createArr(1, 10),
  take(3),
  tap(print),
);

myFunc();

// lazy ?