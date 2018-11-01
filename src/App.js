import React, { Component } from 'react';
import Indicator from './Indicator';
import Name from './form/Name'
import Email from './form/Email';
import Phone from './form/Phone';
import Salary from './form/Salary';
import Summary from './form/Summary';
import Thanks from './form/Thanks';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      name: "",
      email: "",
      phone: "",
      salary: "",
      summary: "",
    }

    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.nameChange = this.nameChange.bind(this);
  }

  nameChange(event) {
    this.setState({ name: event.target.value });
  }

  render() {
    console.log(this.state.step);
    const step = this.state.step
    let form;
    if (step === 1) form = <Name value={this.state.name} onChange={this.nameChange} />;
    else if (step === 2) form = <Email />;
    else if (step === 3) form = <Phone />;
    else if (step === 4) form = <Salary />;
    else if (step === 5) form = <Summary />;
    else if (step === 6) form = <Thanks />;

    return (
      <div>
        <Indicator step={this.state.step} />
        <form id="form" action="">
          {form}
        </form>
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
