import React from "react";

function Home() {
  return (
    <>
      <div className="homeStyle">
        <div className="item">
          <h1>Welcome to Marvel Catalog Viewer</h1>
        </div>
        <div className="item">
          <h3>
            Browse around at your favorite Marvel characters, comics and
            creators.
          </h3>
        </div>
      </div>
      <style jsx>
        {`
          .homeStyle {
            display: "grid";
            grid-template-columns: "1fr";
            grid-template-rows: "1fr 1fr 1fr";
            justify-items: "center";
          }
        `}
      </style>
    </>
  );
}

export default Home;
