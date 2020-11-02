import React from "react";
import './Person.css';

const person = (props) => {
  return (
    <div className="Person">
      <p>I'm {props.name} with {props.age} years old</p>
      <p>{props.children}</p>
      <label htmlFor="changeName"></label>
      <input id="changeName" onChange={props.changeName} value={props.name }></input>
    </div>
  )
}

export default person;