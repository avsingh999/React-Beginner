import React, { Component } from 'react';
import '../App.css';
import "./InputMethod.css";
import Imput_Method from './InputMethod';

class App extends Component {
  state = {
    persons: [{ name: " Avkaran " }],
    Edit:false
  };

  nameChanged = (event) => {
    this.setState({
      persons: [{ name: event.target.value }]
    });
  };

  editName = () => {
    const doesEdit = this.state.Edit;
    this.setState({Edit: !doesEdit})
    console.log("edd");
  }

  render() {
    return <div className="App">
        <h1>Hi, I'm a React App</h1>
        {/* <button onClick = {this.editName}>toggle</button> */}

        <Imput_Method name={this.state.persons[0].name} changed={this.nameChanged} status={this.state.Edit} click={this.editName}>
          Singh
        </Imput_Method>
      </div>;
  }
}

export default App;
