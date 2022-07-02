/*
Extension 1
Now give the coffeeShop a money property and the ability to buy more beans with a buyBeans method.
The method should take one parameter - numBeans, and should reduce the amount of money depending on numBeans.
You decide how much the beans cost ~
Extension 2
This is a business! We need more money to buy more beans!
Change the drinkRequirements object so that instead of latte: 10, it looks like this
latte: {beanRequirement: 10, price: 5} - for each drink
Create a buyDrink method that accepts 1 parameter: drinkType. The method should:
Increase money depending on the price of drinkType
Call the makeDrink method

*/

const coffeeShop = {
  beans: 40,
  money: 100,
  drinkRequirements: {
    first$name: 2,
    latte: {
      beansRequirements: 10,
      price: 5,
    },
    americano: {
      beansRequirements: 5,
      price: 2.5,
    },
    doubleShot: {
      beansRequirements: 15,
      price: 7.5,
    },
    frenchPress: {
      beansRequirements: 12,
      price: 6,
    },
  },
  buyBeans: function (numBeans) {
    this.money -= numBeans * 0.5;
    this.beans += numBeans;
  },
  buyDrink: function (drinktype) {
    if (this.drinkRequirements.first$name != undefined) {
      this.money += this.drinkRequirements[drinktype].price;
    }
    this.makeDrink(drinktype);
  },
  makeDrink: function (drinkType) {
    let flage = 0;

    for (i in this.drinkRequirements) {
      console.log(drinkType);
      if (drinkType == i) flage = 1;
    }

    if (!flage) console.log("we dont have it");
    else if (this.beans > this.drinkRequirements[drinkType.beansRequirements]) {
      this.beans -= this.drinkRequirements[drinkType].beansRequirements;
    } else console.log("Sorry, we're all out of beans");
  },
};

coffeeShop.makeDrink("latte");
coffeeShop.buyDrink("americano");
coffeeShop.buyDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.buyDrink("doubleShot");
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
coffeeShop.buyDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
