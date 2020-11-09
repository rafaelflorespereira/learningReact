import React from 'react'
import Person from './Person/Person'

const Persons = (props) => props.persons.map((person, index) => {
    return <Person
        key={person.id}
        name={person.name}
        age={person.age}
        delete={() => props.delete(index)}
        changeName={(event) => props.changed(event, person.id)}
        />
    })

export default Persons