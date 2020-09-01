import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <nav>
        <Link to="/characters">Characters </Link>
        <Link to="/comics">Comics </Link>
        <Link to="/events">Events </Link>
        <Link to="/series">Series </Link>
        <Link to="/creators">Creators </Link>
        <Link to="/matchgame">Matching Game</Link>
      </nav>
    </div>
  );
};

export default Navbar;
