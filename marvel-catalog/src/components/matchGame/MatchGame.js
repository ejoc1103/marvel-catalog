import React, { useState, useEffect } from "react";
import YouWon from "./YouWon";
import Card from "./Card";
import Loading from "../mainPages/Loading";
import styled from "styled-components";

import useCreateGame from "../../hooks/useCreateGame";

const MainGameStyled = styled.div`
  display: grid;
  justify-content: center;
  > h1 {
    text-align: center;
  }
  > select {
    width: 25%;
    margin: 0 0 20px 0;
  }
  > button {
    width: 25%;
    margin: 20px 0 20px 0;
    padding: 5px;
  }
`;

const GameBoardStyled = styled.div`
  display: grid;
  grid-template-columns: ${({ level }) => {
    if (level === "40") {
      return "repeat(10, auto)";
    } else if (level === "20") {
      return "repeat(5, auto)";
    } else {
      return "repeat(4, auto)";
    }
  }};
  padding-bottom: 40px;
`;

function MatchGame() {
  const [reset, setReset] = useState(false);
  const [collectionFlips, setCollectionFlips] = useState(Array.from(Array(20)));
  const [matched, setMatched] = useState([]);
  const [checkers, setCheckers] = useState([]);
  const [names, setNames] = useState([]);
  const [clickCount, setClickCount] = useState(0);
  const [checks, setChecks] = useState(0);
  const [level, setLevel] = useState("20");
  const { collection, setLoading, loading } = useCreateGame(reset, level);
  //Reset to a new game after user clicks play again on YouWon page
  const resetGame = () => {
    console.log("Reset Game");
    setMatched([]);
    setCheckers([]);
    setReset(!reset);
    setCollectionFlips(Array.from(Array(20)));
    setLoading(true);
    setClickCount(0);
    setNames([]);
  };
  //Flips the cards back over if you didn't get a match
  const resetFlips = () => {
    const mutableState = [...collectionFlips];

    mutableState[checkers[0]] = false;
    mutableState[checkers[1]] = false;

    setCollectionFlips(mutableState);
    setChecks(0);
  };

  //Checks to see if the two cards you chose match and then either flips
  //The cards back over if they didn't or leaves them and adds them to the matched array

  const checkAnswer = () => {
    setClickCount(prevState => prevState + 1);
    if (collection[checkers[0]].id !== collection[checkers[1]].id) {
      setTimeout(() => {
        resetFlips();
      }, 1200);

      setCheckers([]);
    } else {
      let name = [];
      name.push(checkers[0]);
      setNames([...names, ...name]);
      setMatched([...matched, ...checkers]);
      setCheckers([]);
      setChecks(0);
    }
  };
  //calls the checkAnser function after you have selected two cards
  useEffect(() => {
    if (checkers.length === 2) {
      checkAnswer();
    }
  });

  const handleClick = index => {
    //Checks that the same card wasn't clicked twice
    if (checkers.length === 1 && index === checkers[0]) {
      return;
    }

    setChecks(prevState => prevState + 1);

    //Adds the index to the checkers
    const tempArr = [...checkers, index];
    setCheckers(tempArr);

    //Sets mutableState to collection Flips
    const mutableState = [...collectionFlips];
    //Flips the card at the index
    mutableState[index] = !mutableState[index];
    //Sets the flip in state
    setCollectionFlips(mutableState);
  };

  //function to handle when you chose the level you wish to play the game at and then resets the
  //game in case you start on a harder level and change mid game
  const handleChange = e => {
    setLevel(e.target.value);
    resetGame();
  };
  if (loading) return <Loading />;
  return (
    <MainGameStyled>
      <h1 level={level}>Character Match Game</h1>

      {matched.length !== parseInt(level) ? (
        <>
          <h2>Attempts: {clickCount}</h2>
          <button onClick={() => resetGame()}>Reset Game</button>
          <select name="level" id="level" onChange={handleChange} value={level}>
            <option value="20">Normal</option>
            <option value="12">Easy</option>
            <option value="40">Hard</option>
          </select>
        </>
      ) : null}

      <div>
        {matched.length === parseInt(level) ? (
          <div>
            <YouWon
              resetGame={resetGame}
              names={names}
              collection={collection}
              clickCount={clickCount}
            />
          </div>
        ) : (
          <GameBoardStyled level={level}>
            {collection.map((card, index) => (
              <Card
                key={index}
                index={index}
                id={card.id}
                front={card.front}
                back="back"
                isFlipped={collectionFlips[index]}
                handleClick={checks < 2 ? () => handleClick(index) : null}
                matched={matched}
                checkers={checkers}
                level={level}
              />
            ))}
          </GameBoardStyled>
        )}
      </div>
    </MainGameStyled>
  );
}

export default MatchGame;
