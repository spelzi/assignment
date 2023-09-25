import React from "react";
import { products } from "../Product";

// import products description to export to card div 
const Description = () => {

    console.log(products)
    return (
        <p>{products.description}</p>
    )
}

export default Description;
