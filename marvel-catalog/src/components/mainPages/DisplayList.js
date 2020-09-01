import React from "react";
import ChangePage from "./ChangePage";
import { Link } from "react-router-dom";

const DisplayList = ({ data, param, handleClick }) => {
  return (
    <>
      <div className="container">
        {data.map((name) => {
          return (
            <div className="creator" key={name.id}>
              <Link
                to={{
                  pathname: `/${name.id}`,
                  state: {
                    type: param,
                  },
                }}
              >
                {<h1>{name.fullName}</h1>}
              </Link>
            </div>
          );
        })}
      </div>
      <ChangePage click={handleClick} />
    </>
  );
};

export default DisplayList;
