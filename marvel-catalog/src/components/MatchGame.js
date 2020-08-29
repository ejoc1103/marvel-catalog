import React, { useState, useEffect } from "react";

import Card from "./Card";

import useCreateGame from "../hooks/useCreateGame";

function MatchGame() {
  const { collection, collectionFlips, setCollectionFlips } = useCreateGame(
    Math.floor(Math.random() * 1000)
  );
  const [count, setCount] = useState(0);
  const [matchCounter, setMatchCounter] = useState(0);
  const [cardOne, setCardOne] = useState(null);
  const [cardTwo, setCardTwo] = useState(null);
  useEffect(() => {
    console.log("Does this get hit?");
    const checkAnswer = () => {
      if (cardOne && cardTwo) {
        if (collection[cardOne].id !== collection[cardTwo].id) {
          const mutableState = [...collectionFlips];

          mutableState[cardOne] = !mutableState[cardOne];
          mutableState[cardTwo] = !mutableState[cardTwo];

          setCollectionFlips(mutableState);
        } else {
          let mutableState = matchCounter;
          mutableState++;
          console.log(matchCounter + "Thats another match");
          setMatchCounter(mutableState);
        }
      } else {
        console.log("No card One & card two");
      }


    };
    checkAnswer();
    setCount(0);
    setCardOne(null);
    setCardTwo(null);
  }, [cardTwo]);

  const handleClick = (i) => {
    if (count === 0) {
      setCardOne(i);
      setCount(1);
    } else if (count === 1) {
      setCardTwo(i);
    }
    const mutableState = [...collectionFlips];

    mutableState[i] = !mutableState[i];

    setTimeout(setCollectionFlips(mutableState), 1000);
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
