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
      salary: false,
      salaryValue: "",
      summary: "",
      errorMsg: "",
    }

    this.next = this.next.bind(this);
    this.validate = this.validate.bind(this);
    this.prev = this.prev.bind(this);
    this.nameChange = this.nameChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.phoneChange = this.phoneChange.bind(this);
    this.salaryChange = this.salaryChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  nameChange(event) {
    this.setState({ name: event.target.value });
  }
  emailChange(event) {
    this.setState({ email: event.target.value });
  }
  phoneChange(event) {
    this.setState({ phone: event.target.value });
  }
  salaryChange(event) {
    this.setState({
      salary: event.target.checked,
      salaryValue: event.target.value
    });
  }

  render() {
    const step = this.state.step;
    let form;


    // getting a section based on the current step
    if (step === 1) form = <Name value={this.state.name} onChange={this.nameChange} />;
    else if (step === 2) form = <Email value={this.state.email} onChange={this.emailChange} />;
    else if (step === 3) form = <Phone value={this.state.phone} onChange={this.phoneChange} />;
    else if (step === 4) form = <Salary state={this.state.salary} onChange={this.salaryChange} />;
    else if (step === 5) form = <Summary name={this.state.name} email={this.state.email} phone={this.state.phone} salary={this.state.salaryValue} />;
    else if (step === 6) form = <Thanks />;


    // previous / next buttons
    let prev;
    if (step === 1 || step === 6) prev = "";
    else prev = <button className="btn" onClick={this.prev}>{String.fromCharCode(8592)}</button>;

    let next;
    if (step === 6) next = "";
    else if (step === 5) next = <button className="btn" onClick={this.validate}>Submit</button>;
    else next = <button className="btn" onClick={this.validate}>{String.fromCharCode(8594)}</button>;

    // step counter
    let stepCounter = "";
    if (step < 6) stepCounter = <p className="step-counter">{this.state.step} / 6</p>;

    return (
      <div>
        <Indicator step={this.state.step} />
        <div className="wrapper">
          <form id="form" action="" onSubmit={e => e.preventDefault()} onKeyPress={this.handleKeyPress}>
            {form}
          </form>
          <div className="text-center">
            {prev}
            {next}
            <p className="error-msg">{this.state.errorMsg}</p>
            {stepCounter}
          </div>
        </div>
      </div>
    )
  }

  validate() {
    const step = this.state.step;
    if (step === 1) {
      let valid = this.validateName()
      if (!valid) {
        this.setState({
          errorMsg: "please fill in your full name",
        })
      } else {
        this.next()
      }
    } else if (step === 2) {
      let valid = this.validateEmail()
      if (!valid) {
        this.setState({
          errorMsg: "please fill in your E-mail",
        })
      } else {
        this.next()
      }
    } else if (step === 3) {
      let valid = this.validatePhone()
      if (!valid) {
        this.setState({
          errorMsg: "please fill in your phone number",
        })
      } else {
        this.next()
      }
    } else if (step === 4) {
      let valid = this.validateSalary()
      if (!valid) {
        this.setState({
          errorMsg: "please fill in your salary",
        })
      } else {
        this.next()
      }
    } else if (step === 5) {
      this.next()
    } else if (step === 6) {
      return;
    }

  }

  next() {
    let step = this.state.step;
    step++;
    this.setState({
      step: step++,
      errorMsg: ""
    })
  }

  prev() {
    let step = this.state.step;
    step--;
    this.setState({
      step: step
    })
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.validate();
    }
  }

  validateName() {
    const splittedName = this.state.name.split(" ")
    if (splittedName.length === 0 || splittedName.length === 1 || splittedName[1] === "") return false;
    else return true;
  }

  validateEmail() {
    if (this.state.email.includes("@")) return true;
    else return false;
  }

  validatePhone() {
    return this.state.phone ? true : false;
  }

  validateSalary() {
    return this.state.salary ? true : false;
  }



}

export default App;
