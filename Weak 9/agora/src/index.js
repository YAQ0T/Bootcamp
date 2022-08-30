import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Item from "./store/Item";
import Inventory from "./store/Inventory";

const root = ReactDOM.createRoot(document.getElementById("root"));
let Iphone = new Item("xs", 2000, 5);
let HeadPhones = new Item("mi", 300, 50);
let inventoryList = new Inventory();
inventoryList.list.push(Iphone);
inventoryList.list.push(HeadPhones);

ReactDOM.render(<App store={inventoryList} />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
