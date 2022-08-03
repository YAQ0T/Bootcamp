const express = require("express");
const personjs = require("./person.js");

const app = express();

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = 3000;

app.post("/person", function (req, res) {
  let personData = req.body;
  console.log(personData);
  personjs.savePersonDataInDataBase(personData);
  res.send("POST request to the homepage");
});

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
