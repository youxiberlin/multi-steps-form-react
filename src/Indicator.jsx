import React, { Component } from 'react';

class Indicator extends Component {
  calcWidth(step) {
    let width = 0;
    for (let i = 1; i <= step; i++) {
      width += 100 / 6
    }
    return width;
  }

  render() {
    const step = this.props.step;
    let number = this.calcWidth(step);

    const indicatorStyle = {
      width: number + "%",
      height: "5vh",
      backgroundColor: "blue"
    }

    return (
      <div className="indicator" style={indicatorStyle}></div>
    );
  }
}

export default Indicator;