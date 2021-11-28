import React from 'react'
import ItemCount from './ItemCount';

const ItemListContainer = ({ greeting }) => {
    return (
        <>
            <h2>Item List Container</h2>
            <h3>{greeting}</h3>
            <ItemCount stock={5} initial={1} />
        </>
    );
};

export default ItemListContainer
