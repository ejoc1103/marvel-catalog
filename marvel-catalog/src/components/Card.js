import React from "react";
import ReactCardFlip from "react-card-flip";
import pic from "../images/Captain_America_Shield.png"
const Card = ({ id, isFlipped, handleClick, index, front }) => (
  <ReactCardFlip
    isFlipped={isFlipped}
    flipSpeedBackToFront={1}
    flipSpeedFrontToBack={1}
  >
    <button id={id} onClick={handleClick} key="front">
     
      {<img src={pic} alt="back of card" className="cardImage"/>}
    </button>
    <button id={id} onClick={handleClick} key="back">
      <div>
        <img
        className="cardImage"
          id={id}
          name={index}
          src={front.path + "/portrait_fantastic." + front.extension}
          alt={`Pic of ${front.name}`}
        ></img>
      </div>
    </button>
  </ReactCardFlip>
);

export default Card;
