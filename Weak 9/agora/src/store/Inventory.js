import { makeObservable, observable } from "mobx";
import { ACTION } from "mobx/dist/internal";
import React, { Component } from "react";
import Item from "./Item";

export default class Inventory extends Component {
  constructor() {
    this.Items = [];

    makeObservable(this, {
      Items: observable,
      addItem: ACTION,
      buyItem: ACTION,
      changePrice: ACTION,
    });
  }
  addItem(name, price, quantity) {
    let flag = 1;
    this.Items.map((i) => {
      if (i.name == name) {
        i.quantity += 1;
        flag = 0;
      }
    });
    if (flag == 1) {
      let item = new Item(name, price, quantity);
      this.Items.push(item);
    }
  }
  buyItem(name) {
    this.Items.map((i, index) => {
      if (i.name === name) {
        if (i.quantity > 0) {
          i.quantity -= 1;
        } else {
          this.Items.splice(index, 1);
        }
      }
    });
    //     It should find the relevant item, and subtract 1 from the quantity of the item
    // If the quantity is 0 the item should be removed from the items array
  }
  changePrice(name, price) {
    this.Items.map((i) => {
      if (i.name === name) {
        i.price = price;
      }
    }); // It should find the item and update it’s price to the price provided
  }
}
