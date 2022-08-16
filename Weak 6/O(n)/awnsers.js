//ex1 On
//ex2 logn
//ex3 O1
//ex4 Omn
//ex5 On
//ex6
// let arr = [5, 6, 1, 5, 63, 2];
// let set1 = new Set();
// let set2 = new Set();
// for (let i of arr) {
//   if (set1.has(i)) {
//     set2.add(i);
//   } else {
//     set1.add(i);
//   }

//   // 5  6  1  63  2
//   //5w
// }
//ex7 store data in object
let arr = [
  24, 33, 66, 102, 108, 140, 146, 177, 182, 341, 357, 372, 390, 418, 427,
];
//217
let l = 0;
let r = arr.length - 1;
let middle = (l + r) / 2;
let num = 177;
while (l <= r) {
  middle = (l + r) / 2;
  if (arr[middle] == num) break;
  else if (arr[middle] > num) r = middle - 1;
  else l = middle;
}
if (l > r) middle = -1;
console.log(middle);
