import { useState } from "react"

export default function Form() {
    const [firstname, setFirstname] = useState("")

    function handleFirstname(event) {
        console.log(event.target.value);
        setFirstname(event.target.value)
    }

    return (
        <div className="form">
            <h2>Mon formulaire: {firstname}  </h2>
            <form>
                <input type="text" value={firstname} onChange={handleFirstname} />
            </form>
        </div>
    )
}
