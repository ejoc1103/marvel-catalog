import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  console.log("Did this work?");
  return (
    <div>
      <ul>
        <div className="nav sticky">
          <h1 className="navbar-brand logo">Marvel</h1>
          <li>
            <Link to="/" style={{ textDecoration: "none" }}>
              <h3>Characters</h3>
            </Link>
          </li>
          <li>
            <Link to="/comics" style={{ textDecoration: "none" }}>
              <h3>Comics</h3>
            </Link>
          </li>
          <li>
            <Link to="/events" style={{ textDecoration: "none" }}>
              <h3>Events</h3>
            </Link>
          </li>
          <li>
            <Link to="/series" style={{ textDecoration: "none" }}>
              <h3>Series</h3>
            </Link>
          </li>
          <li>
            <Link to="/creators" style={{ textDecoration: "none" }}>
              <h3>Creators</h3>
            </Link>
          </li>
          <li>
            <Link to="/matchgame" style={{ textDecoration: "none" }}>
              <h3>Matching Game</h3>
            </Link>
          </li>
          <li>
            <Link to="/info" style={{ textDecoration: "none" }}>
              <h3>More Info</h3>
            </Link>
          </li>
        </div>
      </ul>

      <style jsx>{`
        li {
          display: inline;
          color: white;
        }
        h3 {
          display: inline;
          padding: 1em;
          color: white;
        }
        .nav {
          overflow: hidden;
          display: grid;
          grid-template-columns: repeat(9, auto);
          grid-auto-flow: dense;
          align-items: center;
          justify-content: center;
          background-color: #ff0000;
          padding: 14px;
          margin: 0 0 20em 0;
        }
        .sticky {
          position: fixed;
          top: 0;
          width: 100%;
      
        }
      `}</style>
    </div>
  );
};

export default Header;
