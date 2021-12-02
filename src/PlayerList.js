import {useState} from 'react';

export default function PlayerList() {
    const [players, setPlayers] = useState([
        'Sub Zero', 'Riku', 'Elie', 'Tom', 'Cloud'
    ])

    /*
    tableau initial: players: ['Sub Zero', 'Riku', 'Elie']
    tableau de sortie: playersJSX [
        '<p>Sub Zero</p>',
        '<p>Riku</p>',
        '<p>Elie</p>']

    Dès qu'il a un tableau, il est capable d'afficher les valeurs une par une
    <p>Sub Zero</p>
    <p>Riku</p>
    <p>Elie</p>
    */
    const playersJSX = players.map(player => <p>{player}</p>)

    return (
        <div>
            {playersJSX}
        </div>
    )
}
