import React from "react";
const pageStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(auto, 1fr)",
  gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
  gridGap: "20px",
};

const YouWon = ({ resetGame, names, collection, clickCount }) => (
  <>
    <h1>You Won!</h1>
    <h2>{`You won in ${clickCount} attempts`}</h2>
    <div style={pageStyle}>
      {names.map((name) => (
        <div>
          <img
            className="cardImage"
            src={
              collection[name].front.path +
              "/portrait_fantastic." +
              collection[name].front.extension
            }
            alt={`Pic of ${collection[name].name}`}
          />
          <h2 key={collection[name].id}>{collection[name].name}</h2>
        </div>
      ))}
    </div>
    <button onClick={() => resetGame()}>Play Again</button>
  </>
);

export default YouWon;
