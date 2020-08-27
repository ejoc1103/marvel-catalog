import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home";
import Header from "./Header";
import Navbar from "./Navbar";
import DetailPage from "./DetailPage";
import MatchGame from "./MatchGame";
import CallApi from "./CallApi";
const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Navbar />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/characters">
            <CallApi titleName="name" />
          </Route>
          <Route path="/comics">
            <CallApi titleName="title" />
          </Route>
          <Route path="/events">
            <CallApi titleName="title" />
          </Route>
          <Route path="/series">
            <CallApi titleName="title" />
          </Route>
          <Route path="/creators">
            <CallApi titleName="fullName" />
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
