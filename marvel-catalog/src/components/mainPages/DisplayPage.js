import React, { useEffect } from 'react';
import ChangePage from '../utilities/ChangePage';
import styled from 'styled-components';
import Search from '../utilities/Search';
import Loading from '../mainPages/Loading';
import CallApi from '../utilities/CallApi';
import { NavLink, useLocation } from 'react-router-dom';
//Main component for showing the collections on everthing but creators

//Styles with styled components
const PageStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  text-align: center;
  margin: 50px;
`;

const DisplayGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const PicStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  padding: 3px;
  > Link {
    justify-self: center;
  }
  > img {
    justify-self: center;
  }
`;

const NavLinkStyled = styled(NavLink)`
  color: white;
  text-decoration: none;
`;

function DisplayPage({
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
  setContentType,
}) {
  const { pathname } = useLocation();

  //Resets the search type and ordering selection to avoid errors when switching
  //between collections
  useEffect(() => {
    setOrder('');
    setParams({
      type: '',
      search: '',
    });
    setPage(0);
  }, [setOrder, pathname, setParams, setPage]);
  //call the function that calls the api to get characters, comics ...
  useEffect(() => {
    CallApi(
      pathname,
      setLoading,
      setContent,
      limit,
      order,
      page,
      params,
      setParams
    );
    setContentType(pathname);
  }, [
    limit,
    order,
    pathname,
    setContent,
    setLoading,
    page,
    params,
    setParams,
    setContentType,
  ]);

  //function for changing pages
  function handleClick(event) {
    const name = event.target.name;
    if (page !== 0) {
      if (name === 'back' && page !== 0) {
        setPage(page - 1);
      }
    }
    if (name === 'forward') {
      setPage(page + 1);
    }
  }
  if (loading) return <Loading />;
  return (
    <PageStyled>
      <Search
        setParams={setParams}
        searchType={pathname}
        setOrder={setOrder}
        order={order}
        setLimit={setLimit}
        limit={limit}
      />

      <DisplayGridStyled>
        {content.map(name => {
          return (
            <PicStyled key={name.id}>
              <NavLinkStyled
                to={{
                  pathname: `${pathname}/${name.id}`,
                  nameId: `${name.id}`,
                }}
              >
                <img
                  src={
                    name.thumbnail.path +
                    '/portrait_fantastic.' +
                    name.thumbnail.extension
                  }
                  alt={`Pic of ${name.name}`}
                />

                {name.fullName ? null : (
                  <div>
                    {name.name ? (
                      <div>
                        <h1>{name.name}</h1>
                      </div>
                    ) : (
                      <div>
                        <h1>{name.title}</h1>
                      </div>
                    )}
                  </div>
                )}
              </NavLinkStyled>
            </PicStyled>
          );
        })}
      </DisplayGridStyled>
      <ChangePage click={handleClick} />
    </PageStyled>
  );
}

export default DisplayPage;
