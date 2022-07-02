/*Add the following code to some main.js file:
const coffeeShop = {
  beans: 40,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12
  },

  makeDrink: function (drinkType) {
    // TODO: Finish this method
  }
}

coffeeShop.makeDrink("latte"); 
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
Read over it, then complete the makeDrink method so that it:
Only allows you make a drink if it’s a drink in the drinkRequirements object. Otherwise alert: "Sorry, we don’t make "
Reduces the beans count according to the drinkRequirements object and the given drinkType
Alerts “Sorry, we’re all out of beans!” if there are not enough beans to make that drink*/
const coffeeShop = {
  beans: 40,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12,
  },

  makeDrink: function (drinkType) {
    if (this.drinkRequirements[drinkType] == undefined)
      console.log("Sorry, we don’t make " + drinkType);
    else if (this.beans >= this.drinkRequirements[drinkType]) {
      console.log(this.beans);
      this.beans -= this.drinkRequirements[drinkType];
    } else console.log("Sorry, we're all out of beans");
  },
};

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
