function mathOperation() {
  let add = (x, y) => x + y;

  let multiply = (x, y) => x * y;

  let multyDiv = (x, y, z) => (y / z) * x;

  return {
    add: add,
    multi: multiply,
    mD: multyDiv,
  };
}
let mO = mathOperation();

console.log(mO.add(13, 29));
console.log(mO.multi(1.75, 242));
console.log(mO.mD(7, 36, 6));
