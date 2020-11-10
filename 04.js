// 下面何者是 pure function ?

const myArray = [1, 2, 3];

function addToMyArray(item) {
  myArray.push(item);
  return myArray;
}

function addToArray(array, item) {
  array.push(item);
  return array;
}

// 上面都不是，下面的才是
function addToArray(array, item) {
  return [...array, item];
}