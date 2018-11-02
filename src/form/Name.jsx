import React from 'react';

const Name = props => {

  return (
    <div>
      <label>
        <h3>What's your full name?</h3>
      </label>
      <input type="text" placeholder="Name" value={props.value} onChange={props.onChange} />
    </div>
  );
};

export default Name;