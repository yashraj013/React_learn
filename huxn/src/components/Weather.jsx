import React from 'react'

const Weather = () => {
    let temp = 6;
  
    if(temp < 15){
        return <h2>It's cold outside</h2>
    }
    else if(temp >= 15 && temp <= 25){
        return <h2>It's nice outside</h2>
    }
    else if(temp > 25){
        return <h2>It's hot outside</h2>
    }
}


export default Weather