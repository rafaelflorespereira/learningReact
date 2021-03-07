import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  // It only renders Persons if the state persons is changed
  //Array and objects are reference type so if you change the same array this function wouldnt work.
  //That is why it is needed to always create a new space in memory when working with array and objects in javascript.

  shouldComponentUpdate(nextProps) {
    console.log("[Persons.js] shouldComponentUpdate");
    return nextProps.persons !== this.props.persons ? true : false;
  }
  render() {
    return this.props.persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
          delete={() => this.props.delete(index)}
          changeName={(event) => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
