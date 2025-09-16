import React from 'react'

const Properties = () => {
  return (
    <User
        name = "Yashraj Pal"
        age = {21}
    />
  )
}

const User = (props) => {
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <p>Age: {props.age}</p>
        </div>
    )
}

export default Properties