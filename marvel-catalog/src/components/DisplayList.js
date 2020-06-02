import React, { useState } from "react";
import ChangePage from "./ChangePage";

const DisplayList = (props) => {
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
      <ol>
        {props.data.map((name) => {
          return (
            <li key={name.id}>
              <div>
                <img
                  src={
                    name.thumbnail.path +
                    "/portrait_small." +
                    name.thumbnail.extension
                  }
                  alt={`Pic of ${name.name}`}
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOver}
                />
              </div>
              <h1 onMouseOver={handleMouseOver} onMouseOut={handleMouseOver}>
                {nameToggle ? name.fullName : name.fullName.substring(0, 8)}
              </h1>
            </li>
          );
        })}
      </ol>
      <ChangePage click={handleClick} />
    </>
  );
};

export default DisplayList;
