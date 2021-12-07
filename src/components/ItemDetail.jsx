import React, { useState, useContext } from 'react'
import ItemCount from "./ItemCount";
import { CartContext } from "./CartContext";

const ItemDetail = (props) => {
    const { description, price, stock, title, image } = props.item;
    const [itemsCount, setItemsCount] = useState(0);
    const { cart, setCart } = useContext(CartContext);
    const [counter, setCounter] = useState(0);


    const onAdd = (quantityToAdd) => {
        // en desafio context tomar el item de las props y agregarselo al carrito
        setItemsCount(quantityToAdd);
        setCounter(quantityToAdd);
    };

    const onAddToCart = () => {
        setCart([...cart, { quantity: counter, data: props.items }]);
    };

    return (
        <div className="flex bg-danger">
            <h3>ItemDetail</h3>
            <h3>{title}</h3>
            <p>{description}</p>
            <h2>{price}</h2>
            <p>{stock}</p>
            <img src={`${image}`} alt={`${image}`}></img>
            <ItemCount onAdd={onAdd} />
        </div>
    );
};

export default ItemDetail;

