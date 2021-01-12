import React from "react";
import { Link } from "react-router-dom";
const listStyle = {
  display: "inline",
  color: "white",
};
const headThreeStyle = {
  display: "inline",
  padding: "1em",
  color: "white",
};
const navStyle = {
  overflow: "hidden",
  display: "grid",
  gridTemplateColumns: "repeat(9, auto)",
  gridAutoFlow: "dense",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#ff0000",
  padding: "14px",
  margin: "0 0 20em 0",
};

const Header = () => {
  return (
    <div>
      <ul>
        <div style={navStyle}>
          <h1 className="navbar-brand logo">Marvel</h1>
          <li style={listStyle}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <h3>Characters</h3>
            </Link>
          </li>
          <li style={listStyle}>
            <Link to="/comics" style={{ textDecoration: "none" }}>
              <h3 style={headThreeStyle}>Comics</h3>
            </Link>
          </li>
          <li style={listStyle}>
            <Link to="/events" style={{ textDecoration: "none" }}>
              <h3 style={headThreeStyle}>Events</h3>
            </Link>
          </li>
          <li style={listStyle}>
            <Link to="/series" style={{ textDecoration: "none" }}>
              <h3 style={headThreeStyle}>Series</h3>
            </Link>
          </li>
          <li style={listStyle}>
            <Link to="/creators" style={{ textDecoration: "none" }}>
              <h3 style={headThreeStyle}>Creators</h3>
            </Link>
          </li>
          <li style={listStyle}>
            <Link to="/matchgame" style={{ textDecoration: "none" }}>
              <h3 style={headThreeStyle}>Matching Game</h3>
            </Link>
          </li>
          <li style={listStyle}>
            <Link to="/info" style={{ textDecoration: "none" }}>
              <h3 style={headThreeStyle}>More Info</h3>
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Header;
