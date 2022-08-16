const str = "if you are a winner";
const ALPHA = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let MAX;

function HSW(str) {
  str = str.split(" ");
  console.log(str);
  let M = new Map();
  count = 1;
  for (let i of ALPHA) {
    M[i] = count;
    count++;
  }
  oldCount = 0;
  let strcount = "";
  count = 0;
  for (let i of str) {
    for (let j = 0; j < i.length; j++) {
      count = M[i[j]] + count;
    }

    if (oldCount < count) {
      oldCount = count;
      strcount = i;
    }
    count = 0;
  }

  console.log(strcount);
}
HSW(str);

/*


*/
