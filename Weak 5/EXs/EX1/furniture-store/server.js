const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));

const store = [
  { name: "table", inventory: 3, price: 800 },
  { name: "chair", inventory: 16, price: 120 },
  { name: "couch", inventory: 1, price: 1200 },
  { name: "picture frame", inventory: 31, price: 70 },
];
function find(name) {
  for (let i = 0; i < store.length; i++) {
    if (store[i].name == name) {
      return i;
    }
  }
}
app.get("/", (req, res) => {});
app.get("/priceCheck/:name", (req, res) => {
  let name = req.params.name;
  let indexOfPrice = find(name);

  let tempObj = {};
  if (!isNaN(indexOfPrice)) {
    tempObj.price = store[indexOfPrice].price;
  } else tempObj.price = null;

  res.send(tempObj);
});
app.get("/buy/:name", (req, res) => {
  let name = req.params.name;
  let indexOfname = find(name);
  store[indexOfname].inventory--;
  console.log(store);
  res.send(store);
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
