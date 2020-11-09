import React from 'react'

import classes from './Cockpit.css'
const Cockpit = (props) => {
    let buttonClass = [classes.Button]
    if(props.showPersons) {
        buttonClass.push(classes.Red)
    }
    return(
        <div className={classes.Cockpit}>
            <h1>Hi, I am a react App</h1>
            <p>This is really working</p>
            <button
                alt={props.showPersons.toString()}
                className={buttonClass.join(" ")}
                onClick={props.showHandler}
                >Show Persons
            </button>
        </div>
    )
}

export default Cockpit
