import { useState } from 'react'
import FoodItem from './FoodItem'

export default function FoodList() {
    const [foodItems, setFoodItems] = useState([
        {id: 1, title: 'Framoge', quantity: '200g'},
        {id: 2, title: 'Jambon', quantity: '2 tranches'},
        {id: 3, title: 'Pizza', quantity: '3 parts'}
    ])

    const [foodInput, setFoodInput] = useState("")

    function handleFoodInput(e) {
        setFoodInput(e.target.value)
    }

    return (
        <div className="foodItems">
            <input type="text" value={foodInput} onChange={handleFoodInput} />
            <ul>
                {foodItems.map(foodItem => (
                    <FoodItem title={foodItem.title} quantity={foodItem.quantity} />
                ))}
                <li>En cours d'ajout: {foodInput} </li>
            </ul>
        </div>
    )
}
