import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const headThreeStyle = {
  display: "inline",
  padding: "1em",
  color: "white",
};
const StyledNav = styled.nav`
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-auto-flow: dense;
  align-items: center;
  justify-content: center;
  background-color: #e23636;
  padding: 14px;
  margin: 0 0 20em 0;
`;

const ListStyled = styled.ul`
  display: grid;

  width: 100%;

  grid-template-columns: repeat(7, 1fr);
  gap: 20px;
  padding-right: 20px;
  list-style-type: none;
  top: 0;
  justify-content: center;
  align-items: center;
  justify-self: center;
  margin-right: 20px;

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? "grid" : "none")};
    grid-template-columns: 1fr;
    position: fixed;
    background: #e23636;
    width: 30%;
    margin-right: 5px;
    top: 50px;
    right: 0;
  }
`;

const ListItemStyled = styled.li`
  display: inline;
  color: white;
  text-align: center;
`;

const MobileMenuIcon = styled.div`
  margin: auto 0 auto auto;
  width: 25px;
  min-width: 25px;
  padding: 5px;
  > div {
    height: 3px;
    background: black;
    margin: 5px 0;
    width: 100%;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(menuOpen);
  return (
    <StyledNav>
      <h1 className="navbar-brand logo">Marvel</h1>
      <MobileMenuIcon onClick={() => setMenuOpen(prevState => !prevState)}>
        <div />
        <div />
        <div />
      </MobileMenuIcon>

      <ListStyled open={menuOpen}>
        <ListItemStyled>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <h3>Characters</h3>
          </NavLink>
        </ListItemStyled>
        <ListItemStyled>
          <NavLink to="/comics" style={{ textDecoration: "none" }}>
            <h3 style={headThreeStyle}>Comics</h3>
          </NavLink>
        </ListItemStyled>
        <ListItemStyled>
          <NavLink to="/events" style={{ textDecoration: "none" }}>
            <h3 style={headThreeStyle}>Events</h3>
          </NavLink>
        </ListItemStyled>
        <ListItemStyled>
          <NavLink to="/series" style={{ textDecoration: "none" }}>
            <h3 style={headThreeStyle}>Series</h3>
          </NavLink>
        </ListItemStyled>
        <ListItemStyled>
          <NavLink to="/creators" style={{ textDecoration: "none" }}>
            <h3 style={headThreeStyle}>Creators</h3>
          </NavLink>
        </ListItemStyled>
        <ListItemStyled>
          <NavLink to="/matchgame" style={{ textDecoration: "none" }}>
            <h3 style={headThreeStyle}>Matching Game</h3>
          </NavLink>
        </ListItemStyled>
        <ListItemStyled>
          <NavLink to="/info" style={{ textDecoration: "none" }}>
            <h3 style={headThreeStyle}>More Info</h3>
          </NavLink>
        </ListItemStyled>
      </ListStyled>
    </StyledNav>
  );
};

export default Header;
