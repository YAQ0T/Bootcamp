import { makeObservable, observable } from "mobx";
import React, { Component } from "react";

export default class Item extends Component {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    makeObservable(this, {
      name: observable,
      price: observable,
      quantity: observable,
    });
  }
}
