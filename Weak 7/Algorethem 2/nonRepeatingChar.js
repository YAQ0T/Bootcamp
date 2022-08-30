function getFirstNonRepeatingChar(str) {
  if (str.length == 0) return null;
  else if (str.length == 1) return str[0];
  let strObj = {};
  for (let i = 0; i < str.length; i++) {
    if (!strObj[str[i]]) strObj[str[i]] = 1;
    else strObj[str[i]] += 1;
  }
  console.log(strObj);
  for (let i in strObj) {
    if (strObj[i] == 1) return i;
  }
}
console.log(getFirstNonRepeatingChar("2"));
