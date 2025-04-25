// src/components/PlayersList.js
import React from "react";
import Player from "./Player";
import players from "./players";

const PlayersList = () => {
  return (
    <div className="players-container">
      {players.map((player, index) => (
        <Player
          key={index}
          name={player.name}
          team={player.team}
          nationality={player.nationality}
          shirtNumber={player.shirtNumber}
          age={player.age}
          imageUrl={player.imageUrl}
        />
      ))}
    </div>
  );
};


export default PlayersList;
