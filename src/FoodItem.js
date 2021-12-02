import {useState} from 'react';

function FoodItem({title, quantity}) {
    let [count, setCount] = useState(0);

    function incrementCount(event) {
        console.log(event.target);
        setCount(count+1)
    }

    return (
        <li>{title} {quantity}
            <button onClick={incrementCount}>Ajouté {count} fois</button>
        </li>
    )
}

export default FoodItem
