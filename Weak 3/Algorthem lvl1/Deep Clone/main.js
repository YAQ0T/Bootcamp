function deepClone(obj) {
  let newObj = {};
  newObj.b = obj.b.a;
  newObj.b3 = [];
  newObj.b3.push(obj.b3[0]);
  newObj.b3.push(obj.b3[1].a2);

  return newObj;
}
let x = { a: "b", a2: ["first", "second"] };
let y = { b: x, b3: ["firtsY", x] };
let z = deepClone(y);
console.log(z);
