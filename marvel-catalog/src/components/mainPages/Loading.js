import React, { useContext } from "react";
import loading from "../../images/loading.png";
import xmen from "../../images/xmen.jpg";
import Spinner from "../utilities/Spinner";
import styled, { ThemeContext } from "styled-components";

const LoadingStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  > h1,
  img {
    justify-self: center;
    text-align: center;
  }
  @media (max-width: 600px) {
    > img {
      width: 80%;
    }
  }
`;
const Loading = () => {
  const theme = useContext(ThemeContext);
  let pic = loading;
  if (theme.id !== "avengers") {
    pic = xmen;
  }
  return (
    <LoadingStyled>
      <Spinner />
      {theme.id === "avengers" ? (
        <h1>. . . Avengers Are Assembling!</h1>
      ) : (
        <h1>. . . Assembling the team!</h1>
      )}
      <img src={pic} alt="Avengers Assemble" />
    </LoadingStyled>
  );
};

export default Loading;
