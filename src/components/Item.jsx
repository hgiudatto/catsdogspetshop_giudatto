import React from 'react'
import { Link } from 'react-router-dom';
/* import { Button } from "@material-ui/core"; */

const Item = ({ description, price, stock, title, image, id }) => {
    return (
        <Link to={`/item/${id}`}>
            <img src={image} alt={title} />
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <h2>{price}</h2>
                <p>{stock}</p>
            </div>
        </Link>
    );
};

export default Item
