const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/PersonExs", { useNewUrlParser: true });

const Schema = mongoose.Schema;
const PersonExSchema = new Schema({
  firstName: String,
  lastName: String,
  age: Number,
});
const Person = mongoose.model("personExs", PersonExSchema);
function savePersonDataInDataBase(personData) {
  P1 = new Person(PersonData);
  P1.save();
}

module.exports = { savePersonDataInDataBase };
