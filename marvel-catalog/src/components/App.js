import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./mainPages/Home";
import Header from "./utilities/Header";

import DetailPage from "./mainPages/detailPage/DetailPage";
import MatchGame from "./matchGame/MatchGame";
import CallApi from "./utilities/CallApi";
const App = () => {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/characters">
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
      </Router>
    </>
  );
};

export default App;
