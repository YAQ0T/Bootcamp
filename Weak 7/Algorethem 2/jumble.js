function jumble(arr1, arr2) {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  let str = arr1.concat(arr2);
  let awnserStr = [];
  for (let i = 0; i < str.length; i++) {
    let random = getRandomInt(str.length);
    awnserStr.push(str[random]);
    str.splice(random, 1);
    i--;
  }
  return awnserStr;
}

const colors = ["red", "indigo", "white", "teal", "yellow"];
const foods = ["bread", "cheese", "cucumber"];
console.log(jumble(colors, foods));
