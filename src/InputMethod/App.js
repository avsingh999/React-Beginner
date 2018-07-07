import React, { Component } from 'react';
import '../App.css';
import "./InputMethod.css";
import Imput_Method from './InputMethod';

class App extends Component {
  state = {
    persons: [{ name: " _____ " }]
  };

  nameChanged = event => {
    this.setState({
      persons: [{ name: event.target.value }]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        {/* <h1>{this.state.persons[1].name}</h1> */}
        <Imput_Method
          name={this.state.persons[0].name}
          changed={this.nameChanged}
        >
          Singh
        </Imput_Method>
      </div>
    );
  }
}

export default App;
