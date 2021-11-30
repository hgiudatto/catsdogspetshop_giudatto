import React from 'react'
/* import { Button } from "@material-ui/core"; */

const Item = ({ description, price, stock, title, image }) => {
    return (
        <>
            <img src={image} alt={title} />
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <h2>{price}</h2>
                <p>{stock}</p>
            </div>
        </>
    );
};

export default Item
