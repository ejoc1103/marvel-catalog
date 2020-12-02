import React from "react";
import ChangePage from "../utilities/ChangePage";
import { Link } from "react-router-dom";

const DisplayList = ({ data, param, handleClick }) => {
  return (
    <>
      <div className="container">
        {data.map((name) => {
          return (
            <div className="creator item" key={name.id}>
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
