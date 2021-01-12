import React from "react";
import ChangePage from "../utilities/ChangePage";

import { Link } from "react-router-dom";
const pageStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
  gridGap: "20px",
};

const picStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridGap: "10px",
};

function DisplayPage(props) {
  console.log(props.param);
  return (
    <>
      <div style={pageStyle}>
        {props.data.map((name) => {
          return (
            <div key={name.id} style={picStyle}>
              <div>
                <Link
                  to={{
                    pathname: `/${name.id}`,
                    state: {
                      type: props.param,
                    },
                  }}
                >
                  <div>
                    <img
                      className="book"
                      src={
                        name.thumbnail.path +
                        "/portrait_fantastic." +
                        name.thumbnail.extension
                      }
                      alt={`Pic of ${name.name}`}
                    />
                  </div>
                  <div>
                    {name.fullName ? null : (
                      <div>
                        {name.name ? (
                          <div>
                            <h1>{name.name}</h1>
                            <h2>{name.description}</h2>
                          </div>
                        ) : (
                          <div>
                            <h1>{name.title}</h1>
                            <h2>{name.discription}</h2>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <ChangePage click={props.handleClick} />
    </>
  );
}

export default DisplayPage;
