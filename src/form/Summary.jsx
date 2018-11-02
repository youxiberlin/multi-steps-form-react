import React from 'react';

const Summary = props => {
  return (
    <div>
      <h3>Summary</h3>
      <ul>
        <li>Name: {props.name}</li>
        <li>E-mail: {props.email}</li>
        <li>Phone: {props.phone}</li>
        <li>Salary: {props.salary}</li>
      </ul>
    </div>
  );
};

export default Summary;