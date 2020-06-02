import React from "react";
import CallApi from "./CallApi";

function Events() {
  const source = "events";
  const titleName = "title";
  return (
    <div>
      <CallApi key={source} apiParam={source} titleName={titleName} />
    </div>
  );
}

export default Events;
