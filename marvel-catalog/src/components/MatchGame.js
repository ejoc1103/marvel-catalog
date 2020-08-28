import React, { useState, useEffect } from "react";

import Card from "./Card";

import useCreateGame from "../hooks/useCreateGame";

function MatchGame() {
  // const [cards, setCards] = useState(Array.from);
  const {collection, collectionFlips, setCollectionFlips} = useCreateGame(Math.floor(Math.random() * 1000));

  //   setCards(collection);  this causes too many re-renders but just using collection doesn't re-render at all so the cards don't flip
  const handleClick = (i) => {
    const mutableState = [...collectionFlips];
    mutableState[i] = !mutableState[i]
    setCollectionFlips(mutableState);
  };
  
  return (
    <div>
      <h1>Match Game</h1>
      <div className="container">
        {collection.map((card, index) => (
          <Card
            key={index}
            index={index}
            id={card.id}
            front={card.front}
            back="back"
            isFlipped={collectionFlips[index]}
            handleClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default MatchGame;
