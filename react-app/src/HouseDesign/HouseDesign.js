import React from 'react'

const houseDesign = (props) => {
  const styleBox = {
    "margin": "auto",
    "border": "1px solid #eee",
    "boxShadow": "0 2px 3px #ccc",
    "textAlign": "center",
  }
  return(
    <div style={styleBox} onClick={props.addScore}>
      <p>{props.category}</p>
      <img src={props.image} width="250px" height="250px"></img>
    </div>
  )
}

export default houseDesign