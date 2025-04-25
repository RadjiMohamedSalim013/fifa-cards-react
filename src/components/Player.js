// src/components/Player.js
import React from "react";
import Card from "react-bootstrap/Card";

const Player = ({ name, team, nationality, shirtNumber, age, imageUrl }) => {
  return (
    <Card >
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Équipe :</strong> {team} <br />
          <strong>Nationalité :</strong> {nationality} <br />
          <strong>Âge :</strong> {age} <br />
          <strong>N° :</strong> {shirtNumber}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;
