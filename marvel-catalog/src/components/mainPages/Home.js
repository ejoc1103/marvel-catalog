import React from "react";
import image from "../../images/home.jpg";
function Home() {
  return (
    <div>
      <h1>Welcome to Marvel Catalog Viewer</h1>
      <h3>
        Browse around at your favorite Marvel characters, comics and creators.
      </h3>
      <img src={image} alt="Home Page Image" className="homeImage" />
    </div>
  );
}

export default Home;
