import React from 'react'

const houseDesign = (props) => {
  const styleBox = {
    "margin": "0 25px",
    "padding": "16px",
    "border": "1px solid #eee",
    "boxShadow": "0 2px 3px #ccc",
    "textAlign": "center",
    "float": "left",
    "width": "17%"
  }
  return(
    <div style={styleBox} onClick={props.addScore}>
      <p>{props.category}</p>
    </div>
  )
}

export default houseDesign