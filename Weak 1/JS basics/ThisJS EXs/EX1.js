/*Exercise 1
Copy/paste the following code into some .js file. Fix the errors to make it work:
const person = {
  hungry: true,

  feed: function () {
    if (hungry) {
      hungry = false;
      alert('Im no longer hungry!')
    }
  }
}  

person.feed() //should alert "I'm no longer hungry"

*/
const person = {
  hungry: true,

  feed: function () {
    if (this.hungry) {
      hungry = false;
      alert("Im no longer hungry!");
    }
  },
};

person.feed(); //should alert "I'm no longer hungry"
