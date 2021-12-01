import { useState, useEffect } from 'react';
import getProducts from '../services/productsPromise';
import { useParams } from 'react-router-dom';
import { ItemDetail } from "./ItemDetail";

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    console.log('item', item);
    console.log(useParams);
    const { id } = useParams();
    console.log("id de useParams", id);
    console.log("Tipo de Dato ID", typeof id);

    useEffect(() => {
        getProducts.then((res) => {
            setItem(res.find((prod) => prod.id === parseInt(id)));
        });
    }, [id]);
    return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
