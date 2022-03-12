import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const SearchStyled = styled.div`
  display: grid;
  justify-items: center;
  > form {
    > select {
      font-size: 1.4em;
    }
    > input {
      font-size: 1.4em;
    }
  }
  > button {
    font-size: 1.4em;
    width: 30%;
  }
`;
const Search = ({ setParams, setOrder, setLimit, order, limit }) => {
  const [search, setSearch] = useState('');
  const { pathname } = useLocation();

  const handleChange = e => {
    const keyWord = e.target.value;
    setSearch(keyWord);
  };

  const handleSubmit = e => {
    e.preventDefault();
    pathname === '/comics' || pathname === '/series'
      ? setParams({
          type: 'titleStartsWith=',
          search: search + '&',
        })
      : setParams({
          type: 'nameStartsWith=',
          search: search + '&',
        });
  };
  const handleReset = () => {
    pathname === '/comics' || pathname === '/series'
      ? setParams({
          type: '',
          search: '',
        })
      : setParams({
          type: '',
          search: '',
        });
  };

  const handleSelect = e => {
    const option = e.target.value;
    setOrder(option);
  };
  const handleLimit = e => {
    const option = e.target.value;
    setLimit(option);
  };
  return (
    <SearchStyled>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Search'
          onChange={handleChange}
          value={search}
        />

        <select name='order' id='order' onChange={handleSelect} value={order}>
          {pathname === '/characters' ? (
            <>
              <option value='' disabled>
                Select Order
              </option>
              <option value='name'>Name A-Z</option>
              <option value='modified'>Modified Most Revent</option>
              <option value='-name'>Name Z-A</option>
              <option value='-modified'>Modified Longest Ago</option>
            </>
          ) : null}
          {pathname === '/comics' ? (
            <>
              <option value='' disabled>
                Select Order
              </option>
              <option value='title'>Title A-Z</option>
              <option value='onsaleDate'>On Sale Date Most Recent</option>
              <option value='issueNumber'>Lowest Issue Number</option>
              <option value='modified'>Modified Most Revent</option>
              <option value='-name'>Name Z-A</option>
              <option value='-onsaleDate'>On Sale Date Oldest</option>
              <option value='-issueNumber'>Highest Issue Number</option>
              <option value='-modified'>Modified Oldest</option>
            </>
          ) : null}
          {pathname === '/events' ? (
            <>
              <option value='' disabled>
                Select Order
              </option>
              <option value='name'>Name A-Z</option>
              <option value='startDate'>Newest Start Date</option>
              <option value='modified'>Modified Most Recent</option>
              <option value='-name'>Name Z-A</option>
              <option value='-startDate'>Oldest Start Date</option>
              <option value='-modified'>Modified Oldest</option>
            </>
          ) : null}
          {pathname === '/series' ? (
            <>
              <option value='' disabled>
                Select Order
              </option>
              <option value='title'>Title A-Z</option>
              <option value='startYear'>Oldest Start Year</option>
              <option value='modified'>Modified Most Recent</option>
              <option value='-title'>Name Z-A</option>
              <option value='-startYear'>Newest Start Year</option>
              <option value='-modified'>Modified Oldest</option>
            </>
          ) : null}
          {pathname === '/creators' ? (
            <>
              <option value='' disabled>
                Select Order
              </option>
              <option value='lastName'>Last Name A-Z</option>
              <option value='firstName'>First Name A-Z</option>
              <option value='modified'>Modified Most Recent</option>
              <option value='-lastName'>Last Name Z-A</option>
              <option value='-firstName'>First Name Z-A</option>
              <option value='-modified'>Modified Oldest</option>
            </>
          ) : null}
        </select>
        <select name='limit' id='limit' onChange={handleLimit} value={limit}>
          <option value='' disabled>
            Select # per page
          </option>
          <option value='8'>8</option>
          <option value='20'>20</option>
          <option value='40'>40</option>
        </select>
        <input type='submit' />
      </form>
      <button onClick={() => handleReset()}>Reset Search</button>
    </SearchStyled>
  );
};

export default Search;
