// standard way
function add(x, y) {
  return x + y;
}
console.log("standard: ", add(1, 2));

// curried style
const myAdd = x => y => x + y;

console.log("curried: ", myAdd(1)(2));

const add10 = myAdd(10);
const add20 = myAdd(20);

console.warn('add10(5)=', add10(5));
console.warn('add20(5)=', add20(5));