/*
Count Vowels
How do you count the number of vowels (a,e,i,o,u) in a given string?
Example:
“aabcde” => 3
*/
text = "question";
function countVowels(text) {
  let count = 0;
  for (let i of text) {
    if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u") {
      count++;
    }
  }
  console.log(text);
}
//-------------------------
/*
Median Char
Find the median char (half of the letters are smaller than it, and half are bigger) in a string.
Example:
“question” => “o”
*/
function medianChar(text) {
  const sort = (text) =>
    text
      .split("")
      .sort((a, b) => a.localeCompare(b))
      .join("");

  let textlen = text.length;

  console.log(sort(text)[parseInt(text.length / 2 - 1)]);
}
medianChar(text);
//-------------------------------
/*
Second Biggest
find the second biggest element in an array.
Example:
[12,3,4,7,23] =>12
*/
let arrOfNum = [12, 3, 4, 7, 23];

function secondBiggest(arrOfNum) {
  arrOfNum.sort(function (a, b) {
    return b - a;
  });
  console.log(arrOfNum[1]);
}
secondBiggest(arrOfNum);
//--------------------------
/*
5. Followed Numbers
Followed Numbers
Given an array of numbers, return all the items that are “followed numbers”.
An item is a followed number if there is a number that comes before or after it. For example, 5 is followed by 4 and 6.
Example:
[4,1,3] => [4,3].
3 is followed by 4, and 4 is followed by 3
*/

let example = [4, 1, 3, 5];
let folowedNumber = [];
const exampleSet = new Set();
for (i of example) {
  exampleSet.add(i);
}

for (i of example) {
  if (exampleSet.has(i - 1) || exampleSet.has(i + 1)) {
    folowedNumber.push(i);
  }
}
console.log(folowedNumber);
//-----------------------------
/*
Duplicate an Array
Duplicate an array, without using the “+” operator, or concat.
Your function should return a new array.
Example:
[1,2,3] => [1,2,3,1,2,3]
*/
let Ab = [2, 5, 9];
function duplicateAnArray(arrOfNum) {
  let A = arrOfNum;

  let len = arrOfNum.length;
  for (let i = 0; i < len; i++) {
    A.push(arrOfNum[i]);
  }
  console.log(A);
}
duplicateAnArray(Ab);
//---------------------
let A1 = [2, 4, 6];
let A2 = [2, 3, 6];
let common = [];
for (let indexOfFirstArr of A1)
  for (let indexOfSecArr of A2) {
    if (indexOfSecArr == indexOfFirstArr) {
      common.push(indexOfSecArr);
    }
  }
console.log(common);
//---------------------
let A3 = [2, 8, 9];
// const set2=new Set(A2)
// const set3=new Set(A3)
// let common2=[]
// for (let i of A1)
// {
//  console.log(intersection(set2, set3));
// if (set2.has(i))
// {
//   common2.push(i)
// }

// }
// //--------------------------
let common2 = [];

let a1Counter = 0;
let a2Counter = 0;
let a3Counter = 0;
while (
  a1Counter < A1.length &&
  a2Counter < A2.length &&
  a3Counter < A3.length
) {
  console.log(A1);
  console.log(A2);
  console.log(A3);
  console.log("------------------");
  if (A1[a1Counter] == A2[a2Counter] && A1[a1Counter] == A3[a3Counter]) {
    common2.push(A1[a1Counter]);
    a1Counter++;
    a2Counter++;
    a3Counter++;
  }

  if (A1[a1Counter] < A2[a2Counter] || A1[a1Counter] < A3[a3Counter]) {
    a1Counter++;
  }
  if (A2[a2Counter] < A1[a1Counter] || A2[a2Counter] < A3[a3Counter]) {
    a2Counter++;
  }
  if (A3[a3Counter] < A1[a1Counter] || A3[a3Counter] < A2[a2Counter]) {
    a3Counter++;
  }
}
console.log(common2);
//------------------------
/*
Reverse Only Numbers
Write a function that receives an array and reverse only the numbers in the array.
Example:
[1,w,e,2,r,7,8] => [8,w,e,7,r,2,1]
*/
let stupedArray = [1, "w", "e", 2, "r", 7, 8];
let orderedarray = [];
function reverseOnlyNumbers(stupedArray) {
  for (let i in stupedArray) {
    if (!isNaN(stupedArray[i])) {
      orderedarray.push(i);
    }
  }
  console.log(orderedarray);

  let x = orderedarray.length; // 4

  for (let i in orderedarray) {
    if (i >= orderedarray.length / 2) break;

    let temp = stupedArray[orderedarray[i]];
    stupedArray[orderedarray[i]] = stupedArray[orderedarray[x - i - 1]];
    stupedArray[orderedarray[x - i - 1]] = temp;
  }
}

reverseOnlyNumbers(stupedArray);
console.log(stupedArray);
/// its not mine ///
