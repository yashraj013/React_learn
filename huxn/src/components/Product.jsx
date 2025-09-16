import React from 'react'

const Product = () => {
  return (
    <Order
        name = "Product Name"  
        price = {2100}   
    />
  )
}

const Order = ({name, price}) => {
  return (
    <div>
        <h2>{name}</h2>
        <h4>{price}</h4>
    </div>
  )
}

export default Product