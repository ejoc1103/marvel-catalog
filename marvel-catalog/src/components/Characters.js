import React from "react";
import CallApi from "./CallApi";

function Characters(props) {
  const source = "characters";
  const titleName = "name";
  const search = props.keyWord;
  return (
    <div>
      <CallApi keyWord={search} apiParam={source} titleName={titleName} />
    </div>
  );
}

export default Characters;
