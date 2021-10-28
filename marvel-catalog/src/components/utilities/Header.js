import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import styled, { ThemeContext } from "styled-components";
import { useLocation } from "react-router-dom";
import Toggle from "./Toggle";

const StyledHeader = styled.nav`
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: dense;
  align-items: center;
  justify-items: center;
  background-color: ${({ theme }) => theme.primary};
  padding: 40px;

  > h3 {
    color: white;
  }

  .is-active {
    color: ${({ theme }) => theme.secondary};
    background: ${({ theme }) => theme.background};
    margin: 20px;
  }

  .different-active {
    color: ${({ theme }) => theme.third};
    text-decoration: none;
  }
`;

const ListStyled = styled.ul`
  display: grid;
  width: 100%;

  grid-template-columns: 1fr 6fr;
  gap: 20px;
  padding-right: 20px;
  list-style-type: none;
  top: 0;
  justify-content: center;
  align-items: center;
  justify-self: center;
  margin-right: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileListStyled = styled.ul`
  display: ${props => (props.open ? "grid" : "none")};
  grid-template-columns: 1fr 1fr;
  text-align: center;
`;

const ListItemStyled = styled.li`
  display: grid;
  color: white;
  text-align: center;
`;

const MobileMenuIcon = styled.div`
  min-width: 25px;
  padding: 5px;
  justify-content: center;
  justify-self: center;
  > div {
    text-align: center;
    color: black;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const NavLinkStyled = styled(NavLink)`
  color: white;
  font-size: 1.2em;
  display: grid;
  width: 100%;
  justify-self: end;
  align-self: center;
  justify-content: center;
  padding: 15px;
  margin-right: 0;
`;

const HomeLinkStyled = styled(NavLink)`
  font-size: 3em;
  color: ${({ theme }) => theme.secondary};
  margin: 20px;
  text-decoration: none;
  padding: 20px;
  @media (max-width: 768px) {
    display: none;
  }
`;
const MobileHomeLinkStyled = styled(NavLink)`
  display: grid;
  text-align: center;
  font-size: 1.8em;
  padding: 10px;
`;
const NormalLinksStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-self: end;
  @media (max-width: 1150px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
const Header = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { id, setTheme } = useContext(ThemeContext);
  console.log(id);
  return (
    <StyledHeader>
      <MobileMenuIcon onClick={() => setMenuOpen(prevState => !prevState)}>
        <MobileHomeLinkStyled exact to="/" activeClassName="different-active">
          <h1>Marvel</h1>
          {pathname === "/" ? (
            <Toggle isActive={id === "xmen"} onToggle={setTheme} />
          ) : null}
        </MobileHomeLinkStyled>
        <div>{menuOpen ? <h2>Close Menu</h2> : <h2>Open Menu</h2>}</div>
        <MobileListStyled open={menuOpen}>
          <ListItemStyled>
            <NavLinkStyled to="/characters" activeClassName="is-active">
              <h3>Characters</h3>
            </NavLinkStyled>
          </ListItemStyled>
          <ListItemStyled>
            <NavLinkStyled to="/comics" activeClassName="is-active">
              <h3>Comics</h3>
            </NavLinkStyled>
          </ListItemStyled>
          <ListItemStyled>
            <NavLinkStyled to="/events" activeClassName="is-active">
              <h3>Events</h3>
            </NavLinkStyled>
          </ListItemStyled>
          <ListItemStyled>
            <NavLinkStyled to="/series" activeClassName="is-active">
              <h3>Series</h3>
            </NavLinkStyled>
          </ListItemStyled>
          <ListItemStyled>
            <NavLinkStyled to="/creators" activeClassName="is-active">
              <h3>Creators</h3>
            </NavLinkStyled>
          </ListItemStyled>
          <ListItemStyled>
            <NavLinkStyled to="/matchgame" activeClassName="is-active">
              <h3>Matching Game</h3>
            </NavLinkStyled>
          </ListItemStyled>
        </MobileListStyled>
      </MobileMenuIcon>

      <ListStyled open={menuOpen}>
        <ListItemStyled>
          <HomeLinkStyled
            exact
            to="/"
            activeClassName="different-active"
            open={menuOpen}
          >
            <h1>Marvel</h1>
            {pathname === "/" ? (
              <Toggle isActive={id === "xmen"} onToggle={setTheme} />
            ) : null}
          </HomeLinkStyled>
        </ListItemStyled>
        <NormalLinksStyled>
          <ListItemStyled>
            <NavLinkStyled to="/characters" activeClassName="is-active">
              <h3>Characters</h3>
            </NavLinkStyled>
          </ListItemStyled>
          <ListItemStyled>
            <NavLinkStyled to="/comics" activeClassName="is-active">
              <h3>Comics</h3>
            </NavLinkStyled>
          </ListItemStyled>
          <ListItemStyled>
            <NavLinkStyled to="/events" activeClassName="is-active">
              <h3>Events</h3>
            </NavLinkStyled>
          </ListItemStyled>
          <ListItemStyled>
            <NavLinkStyled to="/series" activeClassName="is-active">
              <h3>Series</h3>
            </NavLinkStyled>
          </ListItemStyled>
          <ListItemStyled>
            <NavLinkStyled to="/creators" activeClassName="is-active">
              <h3>Creators</h3>
            </NavLinkStyled>
          </ListItemStyled>
          <ListItemStyled>
            <NavLinkStyled to="/matchgame" activeClassName="is-active">
              <h3>Matching Game</h3>
            </NavLinkStyled>
          </ListItemStyled>
        </NormalLinksStyled>
      </ListStyled>
    </StyledHeader>
  );
};

export default Header;
