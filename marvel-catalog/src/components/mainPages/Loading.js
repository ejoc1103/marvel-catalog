import React from "react";
import loading from "../../images/loading.png";
import styled from "styled-components";
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
  return (
    <LoadingStyled>
      <h1>. . . Avengers Are Assembling</h1>
      <img src={loading} alt="Avengers Assemble" />
    </LoadingStyled>
  );
};

export default Loading;
