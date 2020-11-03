const numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];

function getPow2(num) {
  return Math.pow(num, 2);
}

console.warn(1, numbers.map(getPow2));

function createGetPow2FuncWithCache() {
  const cache = {};

  function getPow2Inner(num) {
    if (cache[num]) {
      return cache[num];
    }
    // console.warn('num = ', num);
    cache[num] = Math.pow(num, 2);
    return cache[num];
  }

  return getPow2Inner;
}

const cachedGetPow2 = createGetPow2FuncWithCache();
console.warn(2, numbers.map(cachedGetPow2));