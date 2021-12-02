import { useState } from 'react'
import FoodItem from './FoodItem'
import './FoodList.css'

export default function FoodList() {
    const [foodItems, setFoodItems] = useState([
        {title: 'Framoge'},
        {title: 'Jambon'},
        {title: 'Pizza'}
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
                    <FoodItem title={foodItem.title} quantity="100g" />
                ))}

                <li className="adding">En cours d'ajout: {foodInput} </li>
            </ul>
        </div>
    )
}
