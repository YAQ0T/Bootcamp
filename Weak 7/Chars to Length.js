/*
[]=>null
[a]=>a1
*/

function charsToLength(str) {
  let newstr = "";
  let lastChar;
  let count = 1;
  lastChar = str[0];
  if (str.length == 0) return null;
  if (str.length == 1) return str[0] + "1";
  for (let i = 1; i < str.length; i++) {
    if (lastChar == str[i]) {
      count++;
    } else {
      newstr += lastChar + count;

      lastChar = str[i];
      count = 1;
    }
  }
  newstr += lastChar + count;

  return newstr;
}

console.log(charsToLength("a"));
