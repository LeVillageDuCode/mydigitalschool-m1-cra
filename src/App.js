import './App.css';
import MyNav from './MyNav';
import FoodList from './FoodList';

import {useState} from 'react';
import PlayerList from './PlayerList';


function App() {
  // title: valeur de ma donnée, là maintenant tout de suite
  // setTitle: fonction qui va te permettre de modifier ta donnée quand t'en auras envie
  // "Hello World": valeur initiale de ma donnée
  const [title, setTitle] = useState("Hello World!");

  function hellow() {
    console.log("coucou");
    setTitle("Helooooooooooooooooo");
  }

  return (
    <div className="App">
      <h1 onClick={hellow}>{title}</h1>

      <MyNav />
      <FoodList />
    </div>
  );
}

export default App;
