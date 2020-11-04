import React from 'react'
import './CharComponent.css'

const charComponent = (props) => {
    return (
        <div onClick={props.delete} className="CharComponent">
            <p>{props.letter}</p>
        </div>
    )
}

export default charComponent