const numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];

// function createGetPow2FuncWithCache() {
//   const cache = {};

//   function getPow2Inner(num) {
//     if (cache[num]) {
//       return cache[num];
//     }
//     // console.warn('num = ', num);
//     cache[num] = Math.pow(num, 2);
//     return cache[num];
//   }

//   return getPow2Inner;
// }

// const cachedGetPow2 = createGetPow2FuncWithCache();
// console.warn(1, numbers.map(cachedGetPow2));

function memoize(func) {
  let cache = {};

  return function (...args) {
    if (args in cache) {
      return cache[args];
    }
    // console.warn(cache, args);
    cache[args] = func(...args);
    return cache[args];
  };
};

function getPow2(num) {
  // console.warn('num = ', num);
  return Math.pow(num, 2);
}

const memoizedGetPow2 = memoize(getPow2);
console.warn(2, numbers.map(memoizedGetPow2));
// console.warn(2, numbers.map(x=>memoizedGetPow2(x)));