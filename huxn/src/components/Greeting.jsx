import React from 'react'


const Greeting = () => {
  let Timeofday = "afternoon"
  if(Timeofday == "morning"){
    return <h2>Good Morning</h2>
  }
  else if(Timeofday == "afternoon"){
    return <h2>Good Afternoon</h2>
  }
  else{
    return <h2>Invalid input</h2>
  }
}

export default Greeting;