import React from 'react'

const StyleCard = () => {
    const Styles = {backgroundColor: "lightblue",
  padding: "15px",
  borderRadius: "10px",
  color: "darkblue"};
  return (
    <div>
        <h1 style={Styles}>Title</h1>
        <p style={Styles}>Lorem ipsum dolor sit amet.</p>
    </div>
  )
}

export default StyleCard