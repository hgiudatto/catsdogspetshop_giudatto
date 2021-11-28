import { useState } from "react";

const ItemCount = ({ stock, initial }) => {
    const [count, setCount] = useState(initial);
    /* const initial = 1; */

    const addItem = () => {
        const newValue = count + 1;
        if (newValue <= stock) {
            setCount(newValue);
        }
    }

    const quitItem = () => {
        const newValue = count - 1;
        if (newValue >= initial) {
            setCount(newValue);
        }
    }

    const onAddItem = () => {
        const msg = `Agregaste ${count} producto`;
        (count === 1) ? alert(msg) : alert(`${msg}s`);
    };

    return (
        <>
            <h1>Contador:</h1>
            <div>
                <button className="ui primary button" onClick={addItem}>+</button>
                <h1>{count}</h1>
                <button className="ui primary button" onClick={quitItem}>-</button>
            </div>
            <br></br>
            <button className="ui primary button" onClick={onAddItem}>Add to Cart</button>
        </>
    )
}

export default ItemCount;
