import React from 'react';

const Name = props => {

  return (
    <div>
      <label>
        <h3>What's your full name?</h3>
      </label>
      <input type="text" placeholder="Name" value={props.value} onChange={props.onChange} />
      {/* <input id="name" type="text" placeholder="Name"
      ></input> */}
    </div>
  );
};

export default Name;