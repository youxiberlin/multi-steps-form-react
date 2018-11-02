import React from 'react';

const Email = props => {
  return (
    <div>
      <label>
        <h3>What's your Email address?</h3>
      </label>
      <input id="e-mail" type="text" placeholder="E-mail" value={props.value} onChange={props.onChange} ></input>
    </div>
  );
};

export default Email;