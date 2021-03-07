import React, { Component } from "react";
import classes from "./Person.css";

class Person extends Component {
  render() {
    return (
      <div className={classes.Person}>
        <p>
          I'm {this.props.name} with {this.props.age} years old
        </p>
        <p>{this.props.children}</p>
        <input onChange={this.props.changeName} value={this.props.name}></input>
        <button onClick={this.props.delete}> delete me! </button>
      </div>
    );
  }
}

export default Person;
