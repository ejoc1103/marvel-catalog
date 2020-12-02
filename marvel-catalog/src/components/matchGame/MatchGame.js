import React, { useState, useMemo } from "react";
import YouWon from "./YouWon";
import Card from "./Card";

import useCreateGame from "../../hooks/useCreateGame";

const pageStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(7, auto)",
  gridTemplateRows: "repeat(4, 250px)",
  gridGap: "10px",
};

function MatchGame() {
  const {
    collection,
    collectionFlips,
    setCollectionFlips,
    setReset,
    reset,
    setLoading,
    loading,
  } = useCreateGame(Math.floor(Math.random() * 1394));

  const [matched, setMatched] = useState([]);
  const [checkers, setCheckers] = useState([]);
  const [names, setNames] = useState([]);
  const [clickCount, setClickCount] = useState(0);

  const resetGame = () => {
    console.log("Reset Game");
    let checker = reset;
    setMatched([]);
    setCheckers([]);
    setReset(!checker);
    setCollectionFlips(Array.from(Array(20)));
    setLoading(true);
    setClickCount(0);
    setNames([]);
  };

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
      let number = clickCount;
      number++;
      setClickCount(number);
      if (collection[checkers[0]].id !== collection[checkers[1]].id) {
        setTimeout(() => {
          resetFlips();
        }, 1200);
      } else {
        let pair = [...checkers];
        let name = [];
        name.push(checkers[0]);
        setNames([...names, ...name]);
        setMatched([...matched, ...checkers]);

        setCheckers([]);
      }
    }
  }, [checkers]);
  console.log(matched);
  const flipCard = (i) => {
    if(checkers.length === 1 && i === checkers[0]){
      return
    }
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
      <h2>{clickCount}</h2>
      <div style={pageStyle}>
        {matched.length === 20 ? (
          <div style={pageStyle}>
          <YouWon
            resetGame={resetGame}
            names={names}
            collection={collection}
            clickCount={clickCount}
          />
          </div>
        ) : (
          <div style={pageStyle}>
            {collection.map((card, index) => (
              <Card
                key={index}
                index={index}
                id={card.id}
                front={card.front}
                back="back"
                isFlipped={collectionFlips[index]}
                handleClick={() => handleClick(index)}
                matched={matched}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MatchGame;
