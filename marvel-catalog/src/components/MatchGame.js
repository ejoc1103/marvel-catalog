import React, { useState, useEffect } from "react";
// import Header from './components/header/Header';
import Card from "./Card";
// import GameOver from './components/card/GameOver';
import useCreateGame from "../hooks/useCreateGame";

function MatchGame() {
  const [cards, setCards] = useState([]);
  const collection = useCreateGame(Math.floor(Math.random() * 1000));
  useEffect(() => {
    console.log(collection + "collection");
    setCards(() => {
      collection.map((character) => ({
        id: character.id,
        name: character.name,
        front: character.thumbnail,
        back: "back",
        flipped: false,
      }));
    });
    console.log(cards + "cards");
  }, []);

  const handleClick = (e) => {};

  return (
    <div>
      <h1>Match Game</h1>
      {cards.map((card, index) => (
        <Card
          key={index}
          index={index}
          id={card.id}
          front={card.front}
          back="back"
          isFlipped={card.flipped}
          handleClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}

export default MatchGame;
