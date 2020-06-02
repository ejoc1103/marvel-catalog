import React from "react";
import CallApi from "./CallApi";

function Series() {
  const source = "series";
  const titleName = "title";
  return (
    <div>
      <CallApi key={source} apiParam={source} titleName={titleName} />
    </div>
  );
}

export default Series;
