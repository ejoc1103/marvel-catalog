import React, { useEffect } from "react";
import ChangePage from "../utilities/ChangePage";
import styled from "styled-components";
import Search from "../utilities/Search";
import Loading from "../mainPages/Loading";
import callApi from "../utilities/callApi";
import { Link, useLocation } from "react-router-dom";
//Component for the creators page Needs to be different becasue its all writing and no imgages

//Styling with styled components
const MainListStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  text-align: center;
  margin: 50px;
`;

const DisplayListStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const NameStyled = styled.div`
  justify-content: start;
  border: 2px solid black;
`;

const LinkStyled = styled(Link)`
  color: white;
  font-size: 1.2em;
  display: grid;
  width: 100%;
  justify-self: start;
  padding: 15px;
  margin-right: 0;
  text-decoration: none;

  > h1 {
    color: #e23636;
    text-decoration: underline white;
    text-align: start;
  }
`;

const CreationsStyled = styled.div`
  display: grid;
  grid-auto-flow: 1fr;
  > h2,
  h3 {
    text-align: start;
  }
`;

const DisplayList = ({
  setOrder,
  order,
  limit,
  setLimit,
  content,
  setContent,
  loading,
  setLoading,
  page,
  setPage,
  params,
  setParams,
  contentType,
  setContentType,
}) => {
  const { pathname } = useLocation();

  //Pulls in the info for the page from the callApi function any time the page
  //Gets pulled up
  useEffect(() => {
    //Resets the search type and ordering selection to avoid errors when switching
    //between collections
    if (contentType !== "/creators") {
      setOrder("");
      setParams({
        type: "",
        search: "",
      });
      setPage(0);
    }
    callApi(pathname, setLoading, setContent, limit, order, page, params);
    setContentType("/creators");
  }, [limit, order, setContent, setLoading, page, params, pathname, contentType, setContentType, setOrder, setParams, setPage]);
  //function for working changing pages
  function handleClick(event) {
    const name = event.target.name;
    if (page !== 0) {
      if (name === "back" && page !== 0) {
        setPage(page - 1);
      }
    }
    if (name === "forward") {
      setPage(page + 1);
    }
  }

  if (loading || contentType !== "/creators") return <Loading />;

  return (
    <MainListStyled>
      <Search
        setParams={setParams}
        searchType={pathname}
        setOrder={setOrder}
        order={order}
        setLimit={setLimit}
      />

      <DisplayListStyled>
        {content.map(name => {
          return (
            <NameStyled key={name.id}>
              <LinkStyled
                to={{
                  pathname: `/creators/${name.id}`,
                }}
              >
                <h1>Name: {name.fullName}</h1>
                <CreationsStyled>
                  {name.comics.items.length > 0 ? (
                    <h2>Notable Works:</h2>
                  ) : (
                    <h2>No Listed Notable Works</h2>
                  )}
                  {name.comics.items.map(({ name }, index) => {
                    if (index < 4) {
                      return <h3 key={index}>{name}</h3>;
                    } else {
                      return false;
                    }
                  })}
                </CreationsStyled>
              </LinkStyled>
            </NameStyled>
          );
        })}
      </DisplayListStyled>

      <ChangePage click={handleClick} />
    </MainListStyled>
  );
};

export default DisplayList;
