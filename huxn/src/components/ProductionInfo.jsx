import React from 'react'

const Product = {
    Name: "Laptop",
    Price: 1700,
    Availability: "Yes"
}
const ProductionInfo = () => {
  return (
    <div>
        <h2>Name: {Product.Name}</h2>
        <h2>Price: ${Product.Price}</h2>
        <h2>Availability: {Product.Availability}</h2>

    </div>
  )
}

export default ProductionInfo