import React, { useState } from "react";
import ChangePage from "./ChangePage";
import { BrowserRouter as Router, Link } from "react-router-dom";
import App from "./App";

function DisplayPage(props) {
  const [nameToggle, displayName] = useState(false);

  function handleClick(event) {
    const name = event.target.name;
    if (name === "forward") {
      props.changePage(props.currentPage + 1);
    } else if (name === "back") {
      props.changePage(props.currentPage - 1);
    }
  }
  function handleMouseOver() {
    displayName(!nameToggle);
  }

  return (
    <>
      <div className="container">
        {props.data.map((name) => {
          return (
            <div key={name.id}>
              <div>
                <img
                  src={
                    name.thumbnail.path +
                    "/portrait_fantastic." +
                    name.thumbnail.extension
                  }
                  alt={`Pic of ${name.name}`}
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOver}
                />
              </div>
              {name.name ? (
                <h1 onMouseOver={handleMouseOver} onMouseOut={handleMouseOver}>
                  {nameToggle ? name.name : name.name.substring(0, 8)}
                </h1>
              ) : (
                <h1 onMouseOver={handleMouseOver} onMouseOut={handleMouseOver}>
                  {nameToggle ? name.title : name.title.substring(0, 8)}
                </h1>
              )}
            </div>
          );
        })}
      </div>

      <ChangePage click={handleClick} />
    </>
  );
}

export default DisplayPage;
