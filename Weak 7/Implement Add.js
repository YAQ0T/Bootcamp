function add(int1, int2) {
  if (int2) return int1 + int2;
  else
    return function (int2) {
      return int1 + int2;
    };
}

console.log(add(2, 5)); // 7
console.log(add(2)(5)); // 7
