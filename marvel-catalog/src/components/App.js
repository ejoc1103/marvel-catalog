import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Characters from "./Characters";
import Comics from "./Comics";
import Events from "./Events";
import Series from "./Series";
import Creators from "./Creators";
import HighLightPage from "./HighLightPage";
import Home from "./Home";
import Header from "./Header";
const App = () => {
  return (
    <>
      <Header />
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/characters">Characters</Link>
            </li>
            <li>
              <Link to="/comics">Comics</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/series">Series</Link>
            </li>
            <li>
              <Link to="/creators">Creators</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/highlightpage">
              <HighLightPage />
            </Route>
            <Route path="/creators">
              <Creators />
            </Route>
            <Route path="/series">
              <Series />
            </Route>
            <Route path="/events">
              <Events />
            </Route>
            <Route path="/characters">
              <Characters />
            </Route>
            <Route path="/comics">
              <Comics />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
