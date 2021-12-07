import React, { useState, useContext } from 'react'
import ItemCount from "./ItemCount";
import { CartContext } from "./CartContext";

const Cart = () => {

    const { cart } = useContext(CartContext);
    console.log(cart);

    return (
        <>
            <h2>The Cart</h2>
        </>
    )

}

export default Cart
