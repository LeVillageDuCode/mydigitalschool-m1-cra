import { useState } from 'react'
import FoodItem from './FoodItem'
import './FoodList.css'

export default function FoodList() {
    const [foodItems, setFoodItems] = useState([
        {title: 'Framoge', quantity: '200g'},
        {title: 'Jambon', quantity: '2 tranches'},
        {title: 'Pizza', quantity: '3 parts'}
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

                <li className="adding">En cours d'ajout: {foodInput} </li>
            </ul>
        </div>
    )
}
