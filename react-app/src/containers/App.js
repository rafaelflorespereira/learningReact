import React, { Component } from 'react'
import classes from './App.css'
import Persons from '../components/Persons/Persons' 
import CharComponent from '../components/Exercise2Components/CharComponent'
import HouseDesign from '../components/HouseDesign/HouseDesign'
import styleData from '../assets/data/livingRoomStyles' 
import Cockpit from '../components/Cockpit/Cockpit'
import Ex1Cockpit from '../components/Exercise1/Exercise1Cockpit'
import Ex2Cockpit from '../components/Exercise2Components/Exercise2Cockpit'

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
    houseDesigns: styleData,
    score: {style: '',score: 0},
    turn: 0,
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

  //! STYLE QUIZ

  getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  }

  addDesignScore(item) {
    const userScore = this.state.houseDesigns 
    userScore.map(houseStyle => {
      if(houseStyle.style === item.style)
      return houseStyle.score++
    })
    const turn = this.state.turn + 1
    this.getDesignScore()
    this.setState({houseDesigns: userScore, turn})
  }

  getDesignScore() {
    let best = this.state.score
    this.state.houseDesigns.map(p => {
      if(p.score > best.score) {
        return best = p
    }})
    console.log(best)
    this.setState({score: best})
  }

  //!RENDER
  render() {
    let persons = null

    if (this.state.showPersons) {
      persons = (
        <Persons 
          delete={this.deletePerson}
          changeName={this.changeNameHandler}
          persons={this.state.persons}
        />
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
    }
    //!style quiz
    let houseDesigns = null
    
    if(this.state.turn < 10) {
      houseDesigns = (
        <div>
          <h3>Escolha o seu estilo preferido</h3>
          <div className={classes.BoxStyle}>
            {
              this.getRandom(this.state.houseDesigns, 3).map((design,index) => {
                return <HouseDesign 
                category={design.style}
                image={design.url}
                key={design.id}
                addScore={() => this.addDesignScore(design)}
                />
              })}
          </div>
        </div>
      )
    } else {
      houseDesigns = (
        <div>
          <h3>Seu estilo Favorito é: </h3>
          <div className={classes.boxStyle}>
            <HouseDesign 
              category={this.state.score.style}
              image={this.state.score.url}
            />
          </div>
        </div>
      )
    }
    //!style quiz

    return (
      <div className={classes.App}>
        <Cockpit 
          showPersons={this.state.showPersons}
          showHandler={this.showPersonsHandler}/>
        {persons}
        <Ex1Cockpit 
          users={this.state.users}
          nameHandler={this.changeNameHandler}
        />
        <Ex2Cockpit 
          setCharacters={this.setCharacters}
          characters={this.state.characters}/>
        {characters}
        <h2>The turn is: {this.state.turn}</h2>
        <p>{this.state.score.score}</p>
        <p>{this.state.score.style}</p>
        {houseDesigns}
      </div>
    );
  }
}

export default App;
