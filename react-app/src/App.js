import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import Userinput from './Person/UserInput'
import Useroutput from './Person/UserOutput'

class App extends Component {
  state = {
    persons: [
      { name: 'Rafael', age: '28'},
      { name: 'John', age: '28'},
      { name: 'Leda', age: '29'}
    ],
    users: [
      { id: 0, username: 'Rafael'},
      { id: 1, username: 'Leda'},
      { id: 2, username: 'Pitty'}
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

  changeUsernameHandler = (event) => {
    this.setState((state) => {
      return state.users[0].username = event.target.value
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
        <h2>Exercise 1: Props and Handlers</h2>
        <Userinput user={this.state.users[0]} changeUsername={this.changeUsernameHandler}></Userinput>
        <Useroutput username={this.state.users[0].username}></Useroutput>
      </div>
    );
  }
}

export default App;
