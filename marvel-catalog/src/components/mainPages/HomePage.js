import React from "react";
import styled from "styled-components";
import photo from "../../images/homepagephoto.jpg";
const HomePageStyled = styled.div`
  display: grid;
  justify-content: center;
  > h1 {
    font-size: 4em;
    text-align: center;
  }
  > p {
    font-size: 2em;
    text-align: center;
  }
`;

const ImageStyled = styled.img`
  width: 80%;
  justify-self: center;
`;

const HomePage = () => {
  return (
    <HomePageStyled>
      <h1>Welcome Home</h1>
      <p>
        Please browse around through Marvel's collections or play the Match Game
      </p>
      <ImageStyled src={photo} alt="Marvel Heros Motif" />
    </HomePageStyled>
  );
};

export default HomePage;
