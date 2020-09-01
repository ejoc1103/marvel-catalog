import React, { useState, useMemo } from "react";

import Card from "./Card";

import useCreateGame from "../hooks/useCreateGame";

function MatchGame() {
  const {
    collection,
    collectionFlips,
    setCollectionFlips,
    loading,
  } = useCreateGame(Math.floor(Math.random() * 1000));

  const [matchCounter, setMatchCounter] = useState(0);
  const [checkers, setCheckers] = useState([]);

  const resetFlips = () => {
    console.log("reset Flips");
    const mutableState = [...collectionFlips];

    mutableState[checkers[0]] = !mutableState[checkers[0]];
    mutableState[checkers[1]] = !mutableState[checkers[1]];

    setCollectionFlips(mutableState);

    setCheckers([]);
  };
  const checkAnswer = useMemo(() => {
    console.log("check Answer");
    if (checkers.length === 2) {
      if (collection[checkers[0]].id !== collection[checkers[1]].id) {
        setTimeout(() => {
          resetFlips();
        }, 2000);
      } else {
        let mutableState = matchCounter;
        mutableState++;
        console.log(matchCounter + "Thats another match");
        setCheckers([]);
        setMatchCounter(mutableState);
      }
    }
  }, [checkers]);

  const flipCard = (i) => {
    const tempArr = [...checkers, i];
    setCheckers(tempArr);
    const mutableState = [...collectionFlips];

    mutableState[i] = !mutableState[i];
    console.log("card flip");
    setCollectionFlips(mutableState);
  };

  const handleClick = (i) => {
    flipCard(i);
  };

  if (loading) return <div>LOADING !!!</div>;
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
