import React, { Component } from 'react';
import '../App.css';
import "./InputMethod.css";
import Input_Method from './InputMethod';

class App extends Component {
  state = {
    persons: [{ id: 'sad1', name: " Av " }, { id: 'wr3d', name: " Ann" }, { id: 'nkkn', name: " Mnn " }, { id: 'asj2', name: " kara " },],
    Edit:false
  };


  editName = () => {
    const doesEdit = this.state.Edit;
    this.setState({Edit: !doesEdit})
    console.log("edd");
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id===id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }
  deletePersonHandlor = (personIndex) => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }


  render() {
    let persons = null;
    if (this.state.Edit) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return ( <Input_Method
             name={person.name}
             status={this.state.Edit}
             click={this.deletePersonHandlor.bind(index)}
             key={person.id}
             changed={(event)=>{
               this.nameChangedHandler(event, person.id)
             }}>
          Singh
        </Input_Method> )
          })}
        </div>
      )
    }
    return <div className="App">
   
        <h1>Hi, I'm a React App</h1>
        <button onClick = {this.editName} style ={{backgroundColor: 'white', cursor: 'pointer', border: '1px solid black', borderRadius: '5px', width: '79px', height: '38px'}} >toggle</button>
        {persons}

      </div>;
  }
}

export default App;
