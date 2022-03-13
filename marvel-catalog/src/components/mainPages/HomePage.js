import React from 'react';
import styled from 'styled-components';
import photo from '../../images/homepagephoto.jpg';

const HomePageStyled = styled.div`
  display: grid;
  grid-template-areas:
    'header'
    'text'
    'image';
  justify-content: center;
  > h1 {
    font-size: 4em;
    text-align: center;
    grid-area: header;
  }
  > p {
    font-size: 2em;
    padding: 0 20px 0 20px;
    text-align: center;
    grid-area: text;
  }
  @media (max-width: 600px) {
    grid-template-areas:
      'header'
      'image'
      'text';
  }
`;

const ImageStyled = styled.img`
  width: 80%;
  justify-self: center;
  margin-bottom: 40px;
  grid-area: image;
`;

const HomePage = () => {
  return (
    <HomePageStyled>
      <h1>Welcome</h1>
      <p>
        Please browse around through Marvel's collections or play the Match Game
      </p>
      <ImageStyled src={photo} alt='Marvel Heros Motif' />
    </HomePageStyled>
  );
};

export default HomePage;
