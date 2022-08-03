const mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/mongooseStars", {
  useNewUrlParser: true,
});

const SolarSystem = new Schema({
  planets: [{ type: Schema.Types.ObjectId, ref: "planet" }],
  starName: String,
});

const Planet = new Schema({
  name: String, //reference to a Book document
  system: { type: Schema.Types.ObjectId, ref: "solar" },
  visitors: [{ type: Schema.Types.ObjectId, ref: "visitor" }], //reference to a Critic document
});

const Visitor = new Schema({
  name: String,
  homePlanet: { type: Schema.Types.ObjectId, ref: "planet" },
  visitedPlanets: [{ type: Schema.Types.ObjectId, ref: "planet" }], //reference to an array of Review documents
});

const solar = mongoose.model("solar", SolarSystem);
const planet = mongoose.model("planet", Planet);
const visitor = mongoose.model("visitor", Visitor);

let S = new solar({
  planets: [],
  starName: "SaS",
});
let P = new planet({
  name: "YAQOT",
  system: S,
  visitors: [],
});
let V = new visitor({
  name: "Izzat",
  homePlanet: P,
  visitedPlanets: [],
});
// S.planets.push(P);
// P.visitors.push(V);
// V.visitedPlanets.push(P);

// console.log(S);
// console.log("--------------------------------------");
// console.log(P);
// console.log("--------------------------------------");
// console.log(V);
// S.save();
// P.save();
// V.save();

//Find a visitor’s list of visited planets
visitor
  .find({})
  .populate({
    path: "visitedPlanets",
    populate: {
      path: "name system visitors",
    },
  })
  .exec(function (err, visitors) {
    for (let visitor of visitors) {
      // console.log(visitor.visitedPlanets[0].name);
      for (i of visitor.visitedPlanets) {
        console.log("-----------Ex1---------------");

        console.log(i.name);
      }
    }
  });
planet
  .find({})
  .populate({ path: "visitors", populate: { path: "name" } })
  .exec(function (err, visitor) {
    for (let j of visitor) {
      //    console.log(visitors.visitors);
      // for (let i of j) {
      //   console.log(i);
      // }
      //  console.log(j.visitors);
      for (let i of j.visitors) {
        console.log("-------EX2-----------");

        console.log(i.name);
      }
    }
  });

solar
  .find({})
  .populate({ path: "planets", populate: { path: "visitors" } })
  .exec(function (err, solar) {
    console.log("---------Ex3--------");
    for (i of solar) {
      for (j of i.planets) {
        for (k of j.visitors) console.log(k.name);
      }
    }
  });
