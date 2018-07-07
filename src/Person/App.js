import React, { Component } from 'react';
import '../App.css';
import Person from './Person';

class App extends Component {

  state = {
    persons:[
      { name: 'Avkaran', age: 2 },
      { name: 'Menu', age: 10 }
    ]
  }

  SwitchNameHolder = (newName) => {
    this.setState({
      persons: [
        { name: 'Av', age: 28 },
        { name: newName, age: 50}
      ]
    })
  }

  render() {
    const style = {
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      color: 'black',
      padding:'8px',
      cursor:'pointer'
    };



    return <div className="App">
        <h1>Hi, I'm a React App</h1>
        {/* <h1>{this.state.persons[1].name}</h1> */}
        
        <button style={style} onClick={this.SwitchNameHolder.bind(this, "Meller")}>Switch</button>
      <Person
       name={this.state.persons[0].name}
       age={this.state.persons[0].age}
       click={this.SwitchNameHolder.bind(this,"999.Av")}
       >Singh</Person>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> Singh</Person>
      </div>;
  }
}

export default App;
