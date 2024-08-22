import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { ThemeContext } from 'styled-components';
import { useLocation } from 'react-router-dom';
import Toggle from './Toggle';

const StyledHeader = styled.nav`
  overflow: visible;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: dense;
  align-items: center;
  justify-items: center;
  background-color: ${({ theme }) => theme.primary};
  padding: 10px;
  height: 25vh;
  z-index: 100;

  .is-active {
    color: ${({ theme }) => theme.background};
    background: ${({ theme }) => theme.third};
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
  padding-right: 20px;
  list-style-type: none;
  top: 0;
  justify-content: center;
  align-items: center;
  justify-self: center;
  margin-right: 20px;

  @media (max-width: 850px) {
    display: none;
  }
`;

const MobileListStyled = styled.ul`
  display: ${props => (props.open ? 'grid' : 'none')};
  grid-template-columns: 1fr 1fr;
  text-align: center;
`;

const HomeItemStyled = styled.li`
  display: grid;
  color: white;
  text-align: center;
`;

const ListItemStyled = styled.li`
  display: grid;
  text-align: center;
  background-color: ${({ theme }) => theme.third};
  border: 5px solid ${({ theme }) => theme.secondary};
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

  @media (min-width: 850px) {
    display: none;
  }
`;

const NavLinkStyled = styled(NavLink)`
  display: grid;
  color: black;
  font-size: 1.2em;
  display: grid;
  width: 100%;
  justify-self: end;
  align-self: center;
  justify-content: center;
`;

const HomeLinkStyled = styled(NavLink)`
  font-size: 3em;
  color: ${({ theme }) => theme.secondary};
  margin: 20px;
  text-decoration: none;
  padding: 20px;
  @media (max-width: 850px) {
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
  gap: 15px;
  grid-template-columns: repeat(6, 1fr);
  @media (max-width: 1150px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
const H3Styled = styled.h3`
  text-align: center;
  padding: 5px;
`;
const Header = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { id, setTheme } = useContext(ThemeContext);

  return (
    <StyledHeader>
      <MobileMenuIcon onClick={() => setMenuOpen(prevState => !prevState)}>
        <MobileHomeLinkStyled to='/' activeclassname='different-active' end>
          <h1>Marvel</h1>
          {pathname === '/' ? (
            <Toggle isActive={id === 'xmen'} onToggle={setTheme} />
          ) : null}
        </MobileHomeLinkStyled>
        <div>{menuOpen ? <h2>Close Menu</h2> : <h2>Open Menu</h2>}</div>
        <MobileListStyled open={menuOpen}>
          <ListItemStyled>
            <NavLinkStyled to='/characters' activeclassmame='is-active'>
              <H3Styled>Characters</H3Styled>
            </NavLinkStyled>
          </ListItemStyled>
          <ListItemStyled>
            <NavLinkStyled to='/comics' activeclassname='is-active'>
              <H3Styled>Comics</H3Styled>
            </NavLinkStyled>
          </ListItemStyled>
          <ListItemStyled>
            <NavLinkStyled to='/events' activeclassname='is-active'>
              <H3Styled>Events</H3Styled>
            </NavLinkStyled>
          </ListItemStyled>
          <ListItemStyled>
            <NavLinkStyled to='/series' activeclassname='is-active'>
              <H3Styled>Series</H3Styled>
            </NavLinkStyled>
          </ListItemStyled>
          <ListItemStyled>
            <NavLinkStyled to='/creators' activeclassname='is-active'>
              <H3Styled>Creators</H3Styled>
            </NavLinkStyled>
          </ListItemStyled>
          <ListItemStyled>
            <NavLinkStyled to='/matchgame' activeclassname='is-active'>
              <H3Styled>Matching Game</H3Styled>
            </NavLinkStyled>
          </ListItemStyled>
        </MobileListStyled>
      </MobileMenuIcon>

      <ListStyled open={menuOpen}>
        <HomeItemStyled>
          <HomeLinkStyled
            to='/'
            activeclassname='different-active'
            open={menuOpen}
            end
          >
            <h1>Marvel</h1>
            {pathname === '/' ? (
              <Toggle isActive={id === 'xmen'} onToggle={setTheme} />
            ) : null}
          </HomeLinkStyled>
        </HomeItemStyled>
        <NormalLinksStyled>
          <ListItemStyled>
            <NavLinkStyled to='/characters' activeclassname='is-active'>
              <H3Styled>Characters</H3Styled>
            </NavLinkStyled>
          </ListItemStyled>
          <ListItemStyled>
            <NavLinkStyled to='/comics' activeclassname='is-active'>
              <H3Styled>Comics</H3Styled>
            </NavLinkStyled>
          </ListItemStyled>
          <ListItemStyled>
            <NavLinkStyled to='/events' activeclassname='is-active'>
              <H3Styled>Events</H3Styled>
            </NavLinkStyled>
          </ListItemStyled>
          <ListItemStyled>
            <NavLinkStyled to='/series' activeclassname='is-active'>
              <H3Styled>Series</H3Styled>
            </NavLinkStyled>
          </ListItemStyled>
          <ListItemStyled>
            <NavLinkStyled to='/creators' activeclassname='is-active'>
              <H3Styled>Creators</H3Styled>
            </NavLinkStyled>
          </ListItemStyled>
          <ListItemStyled>
            <NavLinkStyled to='/matchgame' activeclassname='is-active'>
              <H3Styled>Matching Game</H3Styled>
            </NavLinkStyled>
          </ListItemStyled>
        </NormalLinksStyled>
      </ListStyled>
    </StyledHeader>
  );
};

export default Header;
