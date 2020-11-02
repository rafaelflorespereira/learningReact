import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import Userinput from './Person/UserInput'
import Useroutput from './Person/UserOutput'

class App extends Component {
  state = {
    persons: [
      { id: 'asdfkler', name: 'Rafael', age: '28'},
      { id: 'asdewasdasc', name: 'Pipi', age: '28'},
      { id: 'sdawqweqw', name: 'Leda', age: '29'}
    ],
    users: [
      { id: 0, username: 'Rafael'},
      { id: 1, username: 'Leda'},
      { id: 2, username: 'Pitty'}
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState((state) =>{
      return state.persons[0].name = newName
    })
    console.log(this.state.persons)
  }

  changeNameHandler = (event, personId) => {
    const personIndex = this.state.persons.findIndex(p => p.id === personId)
    const person = {...this.state.persons[personIndex]}
    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({persons})
  }

  changeUsernameHandler = (event) => {
    this.setState((state) => {
      return state.users[0].username = event.target.value
    })
  }

  showPersonsHandler = () => {
    this.setState((state) => {
      return state.showPersons = !state.showPersons
    })
  }

  deletePerson = (index) => {
    const persons = [...this.state.persons]
    persons.splice(index, 1)
    this.setState({persons})
  }

  render() {
    let persons = null

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              delete={() => this.deletePerson(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changeName={(event) => { this.changeNameHandler(event, person.id) }}
            />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I am a react App</h1>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler.bind(this, 'input')}>Switch Name</button>
        <button onClick={this.showPersonsHandler}>Show Persons</button>
        {persons}
        <h2>Exercise 1: Props and Handlers</h2>
        <Userinput user={this.state.users[0]} changeUsername={this.changeUsernameHandler}></Userinput>
        <Useroutput username={this.state.users[0].username}></Useroutput>
      </div>
    );
  }
}

export default App;
