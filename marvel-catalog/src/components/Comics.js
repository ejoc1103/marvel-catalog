import React from "react";
import CallApi from "./CallApi";

const Comics = () => {
  const source = "comics";
  const titleName = "title";
  return (
    <div>
      <CallApi apiParam={source} titleName={titleName} />
    </div>
  );
};

export default Comics;
