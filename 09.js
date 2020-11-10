const List = Immutable.List;

const list1 = List([ 1, 2 ]);
const list2 = list1.push(3, 4, 5);
const list3 = list2.unshift(0);
const list4 = list1.concat(list2, list3);

console.warn('list1 = ', list1);
console.warn('list2 = ', list2);
console.warn('list3 = ', list3);
console.warn('list4 = ', list4);