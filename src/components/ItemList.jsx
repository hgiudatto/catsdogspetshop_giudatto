import React from 'react'
import Item from './Item'

const ItemList = ({ products }) => {
    return (
        <div>
            {products.map((product) => {
                return (
                    <Item
                        key={product.id}
                        description={product.description}
                        category={product.category}
                        image={product.image}
                        price={product.price}
                        stock={product.stock}
                        title={product.title}
                        id={product.id}
                    />
                );
            })}
        </div>
    );
};

export default ItemList
