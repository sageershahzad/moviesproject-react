import React, { Component } from "react";

let skiData = {
  total: 60,
  powder: 20,
  backcountry: 15,
  goal: 100
};
class SkiDayCounter extends Component {
  getPercent = decimal => {
    return decimal * 100 + "%";
  };

  calcGoalProgress = (total, goal) => {
    return this.getPercent(total / goal);
  };

  render() {
    const { total, powder, backcountry, goal } = skiData;
    return (
      <section>
        <div>
          <h1>Total Days: {total}</h1>
        </div>
        <div>
          <h1>Powder Days: {powder}</h1>
        </div>
        <div>
          <h1>Backcountry Days: {backcountry}</h1>
        </div>
        <div>
          <h1>Goal: {this.calcGoalProgress(total, goal)}</h1>
        </div>
      </section>
    );
  }
}

export default SkiDayCounter;
