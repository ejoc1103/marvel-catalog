import React from "react";

function ChangePage(props) {
  return (
    <>
      <button onClick={props.click} name="back">
        Back
      </button>
      <button onClick={props.click} name="forward">
        Forward
      </button>
    </>
  );
}

export default ChangePage;
