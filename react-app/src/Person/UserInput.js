import React from "react";

const userInput = (props) => {
  return (
    <div>
  <input onChange={props.changeUsername} value={props.user.username}></input>
    </div>
  )
}

export default userInput;