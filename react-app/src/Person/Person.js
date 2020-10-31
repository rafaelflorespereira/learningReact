import React from "react";

const person = (props) => {
  return (
    <div>
      <p>I'm {props.name} with {props.age} years old</p>
      <p>{props.children}</p>
      <label for="changeName"></label>
      <input id="changeName" onChange={props.changeNameO} value={props.name }></input>
    </div>
  )
}

export default person;