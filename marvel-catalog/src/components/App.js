import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Info from "./mainPages/Info";
import Header from "./utilities/Header";
import DetailPage from "./mainPages/detailPage/DetailPage";
import MatchGame from "./matchGame/MatchGame";
import DisplayPage from "./mainPages/DisplayPage";
import DisplayList from "./mainPages/DisplayList";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
}

body {
  display: grid;
  background-color: #4e4d5c;
  background-image: url("https://www.transparenttextures.com/patterns/dark-brick-wall.png");
  font-family: 'Permanent Marker', cursive;
  grid-template-columns: 1fr;
  justify-content: center;
}
`;

const App = () => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState("");
  const [limit, setLimit] = useState(5);

  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <Switch>
          <Route path="/info">
            <Info />
          </Route>
          <Route path="/" exact>
            <DisplayPage
              content={content}
              setContent={setContent}
              loading={loading}
              setLoading={setLoading}
              order={order}
              setOrder={setOrder}
              limit={limit}
              setLimit={setLimit}
            />
          </Route>

          <Route path="/comics">
            <DisplayPage
              content={content}
              setContent={setContent}
              loading={loading}
              setLoading={setLoading}
              order={order}
              setOrder={setOrder}
              limit={limit}
              setLimit={setLimit}
            />
          </Route>
          <Route path="/events">
            <DisplayPage
              content={content}
              setContent={setContent}
              loading={loading}
              setLoading={setLoading}
              order={order}
              setOrder={setOrder}
              limit={limit}
              setLimit={setLimit}
            />
          </Route>
          <Route path="/series">
            <DisplayPage
              content={content}
              setContent={setContent}
              loading={loading}
              setLoading={setLoading}
              order={order}
              setOrder={setOrder}
              limit={limit}
              setLimit={setLimit}
            />
          </Route>
          <Route path="/creators">
            <DisplayList
              content={content}
              setContent={setContent}
              loading={loading}
              setLoading={setLoading}
              order={order}
              setOrder={setOrder}
              limit={limit}
              setLimit={setLimit}
            />
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
