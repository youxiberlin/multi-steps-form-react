import React from 'react';

const Salary = props => {
  return (
    <div>
      <label>
        <h3>Please choose your salary.</h3>
      </label>
      <div className="flex">
        <input className="form-check-input" type="radio" name="radios" id="exampleRadios1" value="0 - 1.000"
          checked={props.state} onChange={props.onChange}></input>
        <label htmlFor="exampleRadios1">0-1.000</label>
      </div>
      <div className="flex">
        <input className="form-check-input" type="radio" name="radios" id="exampleRadios2" value="1.000 - 2.000"
          checked={props.state} onChange={props.onChange}></input>
        <label htmlFor="exampleRadios2">
          1.000 - 2.000
          </label>
      </div>
      <div className="flex">
        <input className="form-check-input" type="radio" name="radios" id="exampleRadios3" value="2.000 - 3.000"
          checked={props.state} onChange={props.onChange}
        ></input>
        <label htmlFor="exampleRadios3">
          2.000 - 3.000
          </label>
      </div>
      <div className="flex">
        <input className="form-check-input" type="radio" name="radios" id="exampleRadios4" value="3.000 - 4.000"
          checked={props.state} onChange={props.onChange}
        ></input>
        <label htmlFor="exampleRadios4">
          3.000 - 4.000
          </label>
      </div>
    </div>
  );
};

export default Salary;