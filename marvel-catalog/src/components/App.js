import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./utilities/Header";
import HomePage from "./mainPages/HomePage";
import MatchGame from "./matchGame/MatchGame";
import DisplayPage from "./mainPages/DisplayPage";
import DisplayList from "./mainPages/DisplayList";
import styled, { createGlobalStyle } from "styled-components";
import DetailPage from "./mainPages/detailPage/DetailPage";

const GlobalStyle = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
}

body {
  background-color: #4e4d5c;
  background-image: url("https://www.transparenttextures.com/patterns/dark-brick-wall.png");
  font-family: 'Permanent Marker', cursive;
}
`;

const MainStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
`;

const App = () => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState("");
  const [limit, setLimit] = useState(8);
  const [page, setPage] = useState(0);
  const [params, setParams] = useState({
    type: "",
    search: "",
  });
  const [contentType, setContentType] = useState("");
  return (
    <MainStyled>
      <GlobalStyle />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/characters/:nameId">
            <DetailPage />
          </Route>
          <Route path="/characters">
            <DisplayPage
              content={content}
              setContent={setContent}
              loading={loading}
              setLoading={setLoading}
              order={order}
              setOrder={setOrder}
              limit={limit}
              setLimit={setLimit}
              page={page}
              setPage={setPage}
              params={params}
              setParams={setParams}
              setContentType={setContentType}
            />
          </Route>
          <Route path="/comics/:nameId">
            <DetailPage />
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
              page={page}
              setPage={setPage}
              params={params}
              setParams={setParams}
              setContentType={setContentType}
            />
          </Route>
          <Route path="/events/:nameId">
            <DetailPage />
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
              page={page}
              setPage={setPage}
              params={params}
              setParams={setParams}
              setContentType={setContentType}
            />
          </Route>
          <Route path="/series/:nameId">
            <DetailPage />
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
              page={page}
              setPage={setPage}
              params={params}
              setParams={setParams}
              setContentType={setContentType}
            />
          </Route>
          <Route path="/creators/:nameId">
            <DetailPage />
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
              page={page}
              setPage={setPage}
              params={params}
              setParams={setParams}
              contentType={contentType}
              setContentType={setContentType}
            />
          </Route>
          <Route path="/matchgame/:nameId">
            <DetailPage />
          </Route>
          <Route path="/matchgame">
            <MatchGame
              setContent={setContent}
              content={content}
              params={params}
            />
          </Route>

          <Route path="*">
            <h1>Page Does not exist</h1>
          </Route>
        </Switch>
      </Router>
    </MainStyled>
  );
};

export default App;
