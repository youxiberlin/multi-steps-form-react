import React from 'react';

const Indicator = props => {
  const step = props.step;
  let number = (100 / 6) * step

  const indicatorStyle = {
    width: number + "%",
    height: "3vh",
    background: "rgb(169, 180, 204)"
  }

  return (
    <div className="indicator" style={indicatorStyle}></div>
  );
}


export default Indicator;