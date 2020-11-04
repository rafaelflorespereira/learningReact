import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import Userinput from './Person/UserInput'
import Useroutput from './Person/UserOutput'
import ValidationComponent from './Exercise2Components/ValidationComponent'
import CharComponent from './Exercise2Components/CharComponent'
import Radium from 'radium'

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
    showPersons: false,
    lengthSize: 0,
    characters: ''
  }

  switchNameHandler = (newName) => {
    this.setState((state) => {
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

  textLength = (event) => {
    this.setState((state) => {
      return state.lengthSize = event.target.value.length
    })
  }

  setCharacters = (event) => {
    this.setState(state => state.characters = event.target.value)
  }

  deleteCharacter = (index) => {
    const characters = [...this.state.characters]
    characters.splice(index, 1)
    this.setState({characters: characters.join('')})
  }

  render() {
    let persons = null
    const style = {
      backgroundColor: 'green',
      color: 'white',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              delete={() => this.deletePerson(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changeName={(event) => this.changeNameHandler(event, person.id)}
            />
          })}
        </div>
      )
    }

    let characters = null 

    if(this.state.characters.length > 0) {
      characters = (
        <div>
          {[...this.state.characters].map((char, index) => {
            return <CharComponent
              letter={char}
              delete={(index) => this.deleteCharacter(index)}
              key={index}
            />
          })}
        </div>
      )

      style.backgroundColor = 'red'

      if(this.state.characters.length < 2) {
        style.backgroundColor = 'red'
      }

      if(this.state.characters.length < 1) {
        
      }
    }

    return (
      <div className="App">
        <h1>Hi, I am a react App</h1>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler.bind(this, 'input')}>Switch Name</button>
        <button style={style} onClick={this.showPersonsHandler}>Show Persons</button>
        {persons}
        <h2>Exercise 1: Props and Handlers</h2>
        <Userinput user={this.state.users[0]} changeUsername={this.changeUsernameHandler}></Userinput>
        <Useroutput username={this.state.users[0].username}></Useroutput>
        <h2>Exercise 2: Lists and Conditionals</h2>
        <input 
          type="text" 
          onChange={(event) => this.setCharacters(event)}
          value={this.state.characters}
        ></input>
        {this.state.characters}
        <p>{this.state.characters.length}</p>
        <ValidationComponent
          size={this.state.characters.length}
        />
        {characters}
      </div>
    );
  }
}

export default Radium(App);
