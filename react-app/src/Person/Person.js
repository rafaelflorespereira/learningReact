import React from "react";
import './Person.css';
import styled from 'styled-components'
const person = (props) => {
  const StyledPersonDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    padding: 16px;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    text-align: center;
    
    @media (min-width: 500px):
      width: '450px';
    }
  `
  return (
    <StyledPersonDiv>
      <p>I'm {props.name} with {props.age} years old</p>
      <p>{props.children}</p>
      <label >username</label>
      <input onChange={props.changeName} value={props.name }></input>
      <button onClick={props.delete}> delete me! </button>
    </StyledPersonDiv>
  )
}

export default person;