import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Rafael', age: '28'},
      { name: 'John', age: '28'},
      { name: 'Leda', age: '29'}
    ]
  }

  switchNameHandler = (newName) => {
    this.setState((state) =>{
      return state.persons[0].name = newName
    })
    console.log(this.state.persons)
  }

  changeNameHandler = (event) => {
    this.setState( (state) => {
      return state.persons[1].name = event.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a react App</h1>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler.bind(this, 'input')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          changeName={this.changeNameHandler}
          age={this.state.persons[0].age}></Person>
        <Person 
          name={this.state.persons[1].name} 
          changeName={this.changeNameHandler}
          age={this.state.persons[1].age}>I have children!</Person>
        <Person 
          name={this.state.persons[2].name} 
          changeName={this.changeNameHandler}
          age={this.state.persons[2].age}></Person>
      </div>
    );
  }
}

export default App;
