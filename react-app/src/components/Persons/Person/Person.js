import React from "react";
import classes from  './Person.css';

const person = (props) => {
  return (
    <div className={classes.Person}>
      <p>I'm {props.name} with {props.age} years old</p>
      <p>{props.children}</p>
      <input onChange={props.changeName} value={props.name }></input>
      <button onClick={props.delete}> delete me! </button>
    </div>
  )
}

export default person;