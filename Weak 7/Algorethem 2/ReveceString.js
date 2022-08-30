const reverse = function (str) {
  // let reversed = //your code
  // //more code..or not - it's possible to do this in one line ;)
  // return reversed
  if (str.length < 1) return null;
  else if (str.length == 1) return str;

  let arraystr = [];
  for (let i = str.length - 1; i >= 0; i--) arraystr.push(str[i]);
  return arraystr.join("");
};

console.log(reverse("f")); //should return "tac"
console.log(reverse("race car")); //should return "rac ecar"
