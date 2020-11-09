import React from 'react'

import Userinput from './UserInput' 
import Useroutput from './UserOutput'
const Ex1Cockpit = (props) => {
  return (
    <div>
      <h2>Exercise 1: Props and Handlers</h2>
      <Userinput 
        user={props.users[0]} 
        changeUsername={props.nameHandler}></Userinput>
      <Useroutput 
        username={props.users[0].username}></Useroutput>
    </div>
  )
}

export default Ex1Cockpit