import { React, useState, useEffect } from 'react';
import ItemCount from './ItemCount';
import getProducts from "../services/productsPromise";
import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts
            .then(res => {
                setProducts(res)
            })
            .catch(err => alert('We are in trouble', err))
    }, []);

    return (
        <>
            <h2>Item List Container</h2>
            <h3>{greeting}</h3>
            <ItemCount stock={5} initial={1} />
            <ItemList products={products} />
        </>
    );
};

export default ItemListContainer
