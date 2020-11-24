function isPrime(n) {
  if (n === 1) { return false; }
  for (let i = 2; i < n / 2 + 1; ++i) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function test(n) {
  console.warn(n, isPrime(n));
}

for (i = 0, l = 100; i < l; ++i) {
  test(i + 1);
}
