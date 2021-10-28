import React from "react";
import styled from "styled-components";

const ChangePageStyled = styled.div`
  display: grid;
  justify-self: center;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  > button {
    width: 350px;
    height: 60px;
    border-radius: 15%;
    background-color: ${({ theme }) => theme.primary};
    font-size: 2em;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
function ChangePage({ click }) {
  return (
    <ChangePageStyled>
      <button onClick={click} name="back">
        Back
      </button>
      <button onClick={click} name="forward">
        Forward
      </button>
    </ChangePageStyled>
  );
}

export default ChangePage;
