import React, { Component } from "react";
import "./App.css";

class App extends Component {
  getStuff() {
    return <h1>KING</h1>;
  }

  getMorningGreeting() {
    return <h2>Good Morning</h2>;
  }
  

  getEveningGreeting() {
    return <h2>Good Evening </h2>;
  }

  showCompany(name, revenue) {
    return (
      <div>
        <h3>
          {name} makes every year :{revenue}
        </h3>
      </div>
    );
  }

  getClassName(temperature) {
    if (temperature < 15)
      return (
        <div id="weatherBox" className="freezing">
          1
        </div>
      );
    else if (temperature > 15 && temperature < 30)
      return (
        <div id="weatherBox" className="fair">
          2
        </div>
      );
    else
      return (
        <div id="weatherBox" className="hell-scape">
          3
        </div>
      );
  }

  render() {
    let companies = [
      { name: "Tesla", revenue: 140 },
      { name: "Microsoft", revenue: 300 },
      { name: "Google", revenue: 600 },
    ];

    return (
      <div>
        <div className="ex-space">
          <h4 className="ex-title">Spot-check 1</h4>
          <div className="exercise" id="spotcheck-1">
            {this.getStuff()}
          </div>
        </div>

        <div className="ex-space">
          <h4 className="ex-title">Spot-check 2</h4>
          <div className="exercise" id="spotcheck-2">
            {new Date().getHours() < 12
              ? this.getMorningGreeting()
              : this.getEveningGreeting()}
          </div>
        </div>

        <div className="ex-space">
          <h4 className="ex-title">Spot-check 3</h4>
          <div className="exercise" id="spotcheck-3">
            {companies.map((c) => {
              return this.showCompany(c.name, c.revenue);
            })}
          </div>
        </div>

        <div className="ex-space">
          <h4 className="ex-title">Exercise 1</h4>
          <div className="exercise" id="ex-1">
            {this.getClassName(29)}
          </div>
        </div>

        <div className="ex-space">
          <h4 className="ex-title">Exercise 2</h4>
          <div className="exercise" id="ex-2">
            {/* your code here */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
