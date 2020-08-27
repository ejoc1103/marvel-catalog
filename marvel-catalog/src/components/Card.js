import React from "react";
import ReactCardFlip from "react-card-flip";

const Card = ({ id, isFlipped, handleClick, index, front }) => (
  <div>
    {isFlipped ? (
      <button id={id} onClick={handleClick} key="back">
        <div>
          <img
            id={id}
            name={index}
            src={front.path + "/portrait_fantastic." + front.extension}
            alt={`Pic of ${front.name}`}
          ></img>
        </div>
      </button>
    ) : (
      <button id={id} onClick={handleClick} key="front">
        {" "}
        {!isFlipped ? <h1>True</h1> : <h1>False</h1>}
      </button>
    )}
  </div>
);

export default Card;

{
  /* <ReactCardFlip
isFlipped={isFlipped}
flipSpeedBackToFront={1}
flipSpeedFrontToBack={1}
>

</ReactCardFlip> */
}
