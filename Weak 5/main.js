const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
//app.use(express.static(path.join(__dirname, "dist")));

app.get("/", (req, res) => {
  console.log("hi im here");

  let params = req.query;
  console.log(params.city);
  res.send(params);
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
