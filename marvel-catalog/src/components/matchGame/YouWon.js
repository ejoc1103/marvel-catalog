import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MainStyled = styled.div`
  display: grid;
  justify-content: center;
`;

const NavLinkStyled = styled(NavLink)`
  display: grid;
  grid-template-columns: 1fr;
  color: white;
  font-size: 1.2em;
  display: grid;
  width: 100%;
  justify-self: center;
  align-self: center;
  justify-content: center;
  padding: 15px;
  margin-right: 0;
  text-decoration: none;
  > img {
    justify-self: center;
    align-self: center;
    justify-content: center;
  }
`;

const PageStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  width: 80%;
  justify-self: center;
  text-align: center;
  justify-content: center;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const WinnerBannerStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background: #518cca;
  justify-self: center;
  text-align: center;
  justify-content: center;
  width: 60%;
  grid-gap: 5px;
  padding: 20px;
  > button {
    width: 50%;
    text-align: center;
    justify-self: center;
  }
`;

const YouWon = ({ resetGame, names, collection, clickCount }) => {
  return (
    <MainStyled>
      <WinnerBannerStyled>
        <h1>You Won!</h1>
        <h2>{`You did it in ${clickCount} attempts`}</h2>
        <button onClick={() => resetGame()}>Play Again</button>
      </WinnerBannerStyled>
      <PageStyled>
        {names.map((name, index) => (
          <div key={index}>
            <NavLinkStyled
              to={{
                pathname: `/characters/${collection[name].id}`,
              }}
            >
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
            </NavLinkStyled>
          </div>
        ))}
      </PageStyled>
    </MainStyled>
  );
};

export default YouWon;
