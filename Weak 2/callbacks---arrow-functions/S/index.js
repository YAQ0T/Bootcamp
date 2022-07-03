const run = (name) => {
  console.log("Run, " + name + ", run!");
};
const yell = function (action) {
  let env = "Forest";
  action(env);
};
run(yell);
