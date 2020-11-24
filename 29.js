function isPrimeRecursive(n, i = 2) {
  if (n === 1) { return false; }
  if (i >= n / 2 + 1) { return true; }
  if (n % i === 0) { return false; }
  return isPrimeRecursive(n, ++i);
}

function test(n) {
  console.warn(n, isPrimeRecursive(n));
}

for (i = 0, l = 100; i < l; ++i) {
  test(i + 1);
}