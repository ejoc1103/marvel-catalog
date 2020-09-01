import React, { useState } from "react";
import ChangePage from "./ChangePage";

import { Link } from "react-router-dom";

function DisplayPage(props) {
  const [nameToggle, displayName] = useState(false);

  return (
    <>
      <div className="container">
        {props.data.map((name) => {
          return (
            <div key={name.id}>
              <div>
                <Link
                  to={{
                    pathname: `/${name.id}`,
                    state: {
                      type: props.param,
                    },
                  }}
                >
                  <img
                    className="book"
                    src={
                      name.thumbnail.path +
                      "/portrait_fantastic." +
                      name.thumbnail.extension
                    }
                    alt={`Pic of ${name.name}`}
                  />
                  {name.fullName ? null : (
                    <div className="label">
                      {name.name ? (
                        <h1>{name.name.substring(0, 8)}</h1>
                      ) : (
                        <h1>{name.title.substring(0, 8)}</h1>
                      )}
                    </div>
                  )}
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
