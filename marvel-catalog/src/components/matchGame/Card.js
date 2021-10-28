import React, { useContext } from "react";
import ReactCardFlip from "react-card-flip";
import pic1 from "../../images/Captain_America_Shield.png";
import pic2 from "../../images/wolverine.jpg";
import styled, { ThemeContext } from "styled-components";

//Uses the react-card-flip npm package to flip cards that have characters
//on one side and a stock photo for the backs

const ImgStyled = styled.img`
  width: ${({ level }) => {
    return level === "40" ? "25px" : "50px";
  }};
  height: ${({ level }) => {
    return level === "40" ? "80px" : "100px";
  }};
  @media (min-width: 600px) {
    width: ${({ level }) => {
      return level === "40" ? "75px" : "100px";
    }};
    height: ${({ level }) => {
      return level === "40" ? "130px" : "150px";
    }};
  }
  @media (min-width: 768px) {
    width: ${({ level }) => {
      return level === "40" ? "130px" : "150px";
    }};
    height: ${({ level }) => {
      return level === "40" ? "180px" : "200px";
    }};
  }
`;
const Card = ({ id, isFlipped, handleClick, index, front, matched, level }) => {
  const theme = useContext(ThemeContext);
  let pic = pic1;
  if (theme.id !== "avengers") {
    pic = pic2;
  }
  return (
    <ReactCardFlip
      isFlipped={isFlipped}
      flipSpeedBackToFront={1}
      flipSpeedFrontToBack={1}
    >
      <button id={id} onClick={handleClick} key="front">
        <ImgStyled
          src={pic}
          alt="back of card"
          className="cardImage"
          level={level}
        />
      </button>
      {matched.includes(index) ? (
        <ImgStyled
          className="cardImage"
          id={id}
          name={index}
          src={front.path + "/portrait_xlarge." + front.extension}
          alt={`Pic of ${front.name}`}
          level={level}
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
              level={level}
            ></ImgStyled>
          </div>
        </button>
      )}
    </ReactCardFlip>
  );
};

export default Card;
