import React from "react";
import classes from "./Cockpit.css";

const Cockpit = (props) => {
  let buttonClass = [classes.Button];
  const assignedClasses = [];
  if (props.showPersons) {
    buttonClass.push(classes.Red);
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }

  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working</p>
      <button
        alt={props.showPersons.toString()}
        className={buttonClass.join(" ")}
        onClick={props.showHandler}
      >
        Show Persons
      </button>
    </div>
  );
};

export default React.memo(Cockpit); // It might not need to update with the reendering
