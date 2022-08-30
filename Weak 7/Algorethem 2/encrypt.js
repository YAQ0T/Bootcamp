function encrypt(str) {
  str = str.split("");
  console.log(str);
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "z") str[i] = "a";
    else {
      str[i] = str[i].charCodeAt(0) + 1;
      str[i] = String.fromCharCode(str[i]);
    }
  }
  return str.join("");
}

console.log(encrypt("cat"));
