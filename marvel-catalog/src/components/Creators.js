import React from "react";
import CallApi from "./CallApi";

function Creators() {
  const source = "creators";
  const titleName = "fullName";
  return (
    <div>
      <CallApi apiParam={source} titleName={titleName} />
    </div>
  );
}

export default Creators;
