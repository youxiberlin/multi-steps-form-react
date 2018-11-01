import React, { Component } from 'react';
import Indicator from './Indicator';
import Form from './Form';
// import Prev from './Prev';
// import Next from './Next';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
    }
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  render() {
    console.log(this.state.step);
    return (
      <div>
        <Indicator step={this.state.step} />
        <Form step={this.state.step} />
        <button onClick={this.prev}>Prev</button>
        <button onClick={this.next}>Next</button>
      </div>
    )
  }

  next() {
    let step = this.state.step;
    step++;
    this.setState({
      step: step
    })
  }

  prev() {
    let step = this.state.step;
    step--;
    this.setState({
      step: step
    })
  }

}

export default App;
