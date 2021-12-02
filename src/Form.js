import { useState } from "react"

export default function Form() {
    const [users, setUsers] = useState([
        {firstname: "JB"}
    ])
    const [firstname, setFirstname] = useState("")

    function handleFirstname(event) {
        setFirstname(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log("J'ai soumis le formulaire")

        const newUser = {firstname: firstname}
        console.log(newUser);

        // ...users -> ça récupère chacun des éléments de users,
        // et ça les met à la suite dans le nouveau tableau
        // ,newUser : ajoute à la fin notre nouvel utilisateur
        setUsers([...users, newUser]);

    }

    // let isVisible;
    // if(firstname === "") {
    //     isVisible = <span>Pas d'ajout en cours!</span>
    // }
    // else {
    //     isVisible =  <h3>Utilisateur en cours d'ajout: {firstname} </h3>
    // }

    // const isVisible = firstname === "" ?
    //     <span>Pas d'ajout en cours!</span>
    //     : <h3>Utilisateur en cours d'ajout: {firstname} </h3>

    return (
        <div className="form">
            <h2>Mon formulaire   </h2>
            {firstname === "" ?
                <span>Pas d'ajout en cours!</span>
                : <h3>Utilisateur en cours d'ajout: {firstname} </h3>}

            <form onSubmit={handleSubmit}>
                <input type="text" value={firstname} onChange={handleFirstname} />
                <button type="submit">OK</button>
            </form>

            <ul>
                {users.map(user => <li>{user.firstname}</li>)}
            </ul>
        </div>
    )
}
