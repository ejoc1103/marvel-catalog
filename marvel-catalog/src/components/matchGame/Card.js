import React from "react";
import ReactCardFlip from "react-card-flip";
import pic from "../../images/Captain_America_Shield.png";
import styled from "styled-components";

const ImgStyled = styled.img`
  width: 50px;
  height: 100px;
  @media (min-width: 600px) {
    width: 100px;
    height: 150px;
  }
  @media (min-width: 768px) {
    width: 150px;
    height: 200px;
  }
`;
const Card = ({ id, isFlipped, handleClick, index, front, matched }) => (
  <ReactCardFlip
    isFlipped={isFlipped}
    flipSpeedBackToFront={1}
    flipSpeedFrontToBack={1}
  >
    <button id={id} onClick={handleClick} key="front">
      <ImgStyled src={pic} alt="back of card" className="cardImage" />
    </button>
    {matched.includes(index) ? (
      <ImgStyled
        className="cardImage"
        id={id}
        name={index}
        src={front.path + "/portrait_xlarge." + front.extension}
        alt={`Pic of ${front.name}`}
      ></ImgStyled>
    ) : (
      <button id={id} onClick={handleClick} key="back">
        <div>
          <ImgStyled
            className="cardImage"
            id={id}
            name={index}
            src={front.path + "/portrait_xlarge." + front.extension}
            alt={`Pic of ${front.name}`}
          ></ImgStyled>
        </div>
      </button>
    )}
  </ReactCardFlip>
);

export default Card;
