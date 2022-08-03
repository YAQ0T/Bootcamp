const express = require("express");
const router = express.Router();

let wordCounter = { izzat: 5, Ahmad: 100 };

router.get("/sanity", (req, res) => {
  res.send("GET request to the homepage");
});
router.get("/:word", (req, res) => {
  {
    let word = req.params.word;
    if (wordCounter[word] >= 0) {
      console.log(`hi` + wordCounter[word]);
    } else {
      wordCounter[word] = 0;
    }
    console.log(wordCounter);
  }
  res.send("done");
});
router.post("/word", (req, res) => {
  let word = req.body;
  console.log(word.text);
  if (wordCounter[word.text]) {
    wordCounter[word.text]++;
  } else wordCounter[word.text] = 1;
  res.send(wordCounter);
});
////////////////////////
module.exports = router;
