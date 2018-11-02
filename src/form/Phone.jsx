import React from 'react';

const Phone = props => {
  return (
    <div>
      <label>
        <h3>What's your phone number?</h3>
      </label>
      <input id="phone" type="text" placeholder="xxx-xxxx-xxxx"
        value={props.value} onChange={props.onChange}></input>
    </div>
  );
};

export default Phone;