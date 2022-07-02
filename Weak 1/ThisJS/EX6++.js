/*
Extension 1
Now give the coffeeShop a money property and the ability to buy more beans with a buyBeans method.
The method should take one parameter - numBeans, and should reduce the amount of money depending on numBeans.
You decide how much the beans cost ~
*/

const coffeeShop = {
  beans: 40,
  money: 100,
  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12,
  },
  buyBeans: function (numBeans) {
    this.money -= numBeans * 0.5;
    this.beans += numBeans;
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
console.log(
  "number of beans and money befour buy beans=" +
    coffeeShop.beans +
    ", money=" +
    coffeeShop.money
);
coffeeShop.buyBeans(10);
console.log(
  "number of beans and money after buy beans=" +
    coffeeShop.beans +
    ", money=" +
    coffeeShop.money
);
coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
