var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var personSchema = new Schema({
  hair: String,
  eyes: String,
  weight: Number,
  height: Number,
  salary: Number,
  numKids: Number,
  kids: [],
});

var Person = mongoose.model("PersonModel", personSchema);
module.exports = Person;
console.log("------------PERSON-----------------------");

Person.find(
  { height: { $gt: 180 }, salary: { $gt: 30000 } },
  function (err, people) {
    console.log("-------------------------");
    console.log(people);
  }
);
Person.find()
  .and([{ $or: [{ hair: "grey" }, { eyes: "grey" }] }, { weight: { $lt: 70 } }])
  .exec(function (err, people) {
    console.log("-------------------------");

    console.log(people);
  });

Person.find({ kids: { $elemMatch: { hair: "grey" } } }).exec(function (
  err,
  people
) {
  for (p in people) {
    var person = people[p];
    console.log("-------------------------");

    console.log("Person", p, "has kids:\n", person.kids);
  }
});
Person.find()
  .and([
    { weight: { $gt: 100 } },
    { kids: { $elemMatch: { weight: { $gt: 100 } } } },
  ])
  .exec(function (err, people) {
    console.log("-------------------------");

    for (p in people) {
      var person = people[p];
      console.log(
        "\nPerson",
        p,
        "has weight",
        person.weight,
        " and kids:\n",
        person.kids
      );
    }
  });
