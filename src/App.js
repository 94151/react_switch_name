import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
class App extends Component {
 
 state = {
  persons: [
   {name:'Muskan' ,age:22 },
   {name:'Rimi' ,age:23 },
   {name:'Ritika' ,age:24 } 
  ],
  otherState: 'some other value'
 }

  newChangeHandler = (event) => {
   this.setState({
        persons: [
         {name: 'Max' ,age:22 },
         {name: event.target.value ,age:23 },
         {name:'Ritika' ,age:28 } 
        ]
        } 

      )
  }

  switchNameHandler = (newName) =>{
    // console.log('Name change');
    this.setState({
        persons: [
         {name: newName ,age:22 },
         {name:'Rimi' ,age:23 },
         {name:'Ritika' ,age:28 } 
        ]
        } 

      )
  }
  render() {
    const style = {
      backgroundColor: 'White',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <button style={style} onClick= {() => this.switchNameHandler('Muskan!!')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} 
                age={this.state.persons[2].age} 
                click= {this.switchNameHandler.bind(this, 'Max')}
                change= {this.newChangeHandler}> My hobbies are: Cooking </Person>
      </div>
    );
  }
}

export default App;
