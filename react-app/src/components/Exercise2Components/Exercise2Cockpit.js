import React from 'react'

import ValidationComponent from './ValidationComponent'
const Ex2Cockpit = (props) => {
  return (
    <div>
      <h2>Exercise 2: Lists and Conditionals</h2>
      <input 
        type="text" 
        onChange={(event) => props.setCharacters(event)}
        value={props.characters}
      ></input>
      {props.characters}
      <p>{props.characters.length}</p>
      <ValidationComponent
        size={props.characters.length}
      />
    </div>
  )
}

export default Ex2Cockpit