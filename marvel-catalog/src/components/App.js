import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Info from "./mainPages/Info";
import Header from "./utilities/Header";

import DetailPage from "./mainPages/detailPage/DetailPage";
import MatchGame from "./matchGame/MatchGame";
import CallApi from "./utilities/CallApi";

const mainStyle = {
  display: "grid",
  gridTemplateRows: "repeat(3, auto)",
};
const headerStyle = {
  margin: "0 0 2em 0",
};

const App = () => {
  return (
    <>
      <Router>
        <div style={mainStyle}>
          <div>
            <Header style={headerStyle} />
          </div>

          <Switch>
            <Route path="/info">
              <Info />
            </Route>
            <Route path="/" exact>
              <CallApi />
            </Route>

            <Route path="/comics">
              <CallApi />
            </Route>
            <Route path="/events">
              <CallApi />
            </Route>
            <Route path="/series">
              <CallApi />
            </Route>
            <Route path="/creators">
              <CallApi />
            </Route>
            <Route path="/matchgame">
              <MatchGame />
            </Route>
            <Route path="/:nameId">
              <DetailPage />
            </Route>

            <Route path="*">
              <h1>Page Does not exist</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
