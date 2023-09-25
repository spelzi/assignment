import React from "react";
import { products } from "../Product";


const Description = () => {

    console.log(products)
    return (
        <p>{products.description}</p>
    )
}

export default Description;
