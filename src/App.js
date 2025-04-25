import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayersList from "./components/PlayersList";
import "./App.css"

function App() {
  return (
    <div className="App">
      <h1 >Cartes FIFA des Joueurs</h1>
      <PlayersList />
    </div>
  );
}

export default App;
