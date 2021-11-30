import { useState } from "react";
import { Button } from "@material-ui/core";

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
                <button style={{ backgroundColor: '#e71837', color: '#FFFFFF' }} onClick={addItem}>+</button>
                <h1>{count}</h1>
                <button style={{ backgroundColor: '#536895', color: '#FFFFFF' }} onClick={quitItem}>-</button>
            </div>
            <br></br>
            <Button style={{ backgroundColor: '#12824C', color: '#FFFFFF' }} onClick={onAddItem}>Add to Cart</Button>
        </>
    )
}

export default ItemCount;
