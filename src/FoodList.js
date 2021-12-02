import { useState } from 'react'
import FoodItem from './FoodItem'
import './FoodList.css'
import { v4 as uuidv4 } from 'uuid'

export default function FoodList() {
    const [foodItems, setFoodItems] = useState([
        {id:1, title: 'Framoge'},
        {id:2, title: 'Jambon'},
        {id:3, title: 'Pizza'}
    ])

    const [foodInput, setFoodInput] = useState("")

    function handleFoodInput(e) {
        setFoodInput(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Soumis un nouvel ingrédient");

        const newFoodItem = {id: uuidv4(), title: foodInput}
        setFoodItems([...foodItems, newFoodItem])

        setFoodInput("")
    }

    return (
        <div className="foodItems">
            <form onSubmit={handleSubmit}>
                <input type="text" value={foodInput} onChange={handleFoodInput} />
                <button type="submit">Ok</button>
            </form>
            <ul>
                {foodItems.map(foodItem => (
                    <FoodItem key={foodItem.id} title={foodItem.title} quantity="100g" />
                ))}

                <li className="adding">En cours d'ajout: {foodInput} </li>
            </ul>
        </div>
    )
}
