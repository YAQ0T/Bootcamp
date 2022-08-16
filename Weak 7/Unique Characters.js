function uniqueCharacters(str) {
  str = str.toLowerCase();
  let strSet = new Set(str);
  if (str.length == strSet.size) return true;
  else return false;
}
console.log(uniqueCharacters("hello"));
console.log(uniqueCharacters("cat"));
