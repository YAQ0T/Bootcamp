const express = require("express");
const app = express();
const port = 3000;
const axios = require("axios");
app.get("/randomWords", (req, res) => {
  axios({
    method: "get",
    url: "https://random-word-api.herokuapp.com/word",
  }).then((res) => {
    axios({
      method: "get",
      url: "https://www.googleapis.com/books/v1/volumes?q=intitle:" + res,
    }).then((res) => {
      randomName(res);
    });
  });
  function randomName(give) {
    res.send(give.data.items);
  }
});

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
