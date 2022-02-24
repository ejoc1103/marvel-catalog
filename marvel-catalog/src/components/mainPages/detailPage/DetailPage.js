import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../Loading';
import styled from 'styled-components';
import md5 from 'md5';
import { useLocation } from 'react-router-dom';

//Styled Components
const DetailPageStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 80%;
  justify-content: center;
  justify-self: center;
  grid-gap: 20px;

  > div {
    > h1 {
      background: white;
      text-align: center;
    }
    > div {
      > h1 {
        background: white;
        text-align: center;
      }
    }
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const NameDescStyled = styled.div`
  > div {
    > p {
      font-size: 1.5em;
    }
  }
`;

const DetailPage = () => {
  //state setup
  const [subject, setSubject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //path pulled from location hook
  const { pathname } = useLocation();
  //Get's data for specific selection when pulling the detail page
  useEffect(() => {
    const date = new Date();
    const timeStamp = date.getTime();
    const hash = md5(
      timeStamp + process.env.REACT_APP_PRIVATE_KEY + process.env.REACT_APP_PRIVATE_PUBLIC_KEY
    );
    const getData = async () => {
      if (error) setError(false);
      try {
        const res = await axios.get(
          `https://gateway.marvel.com/v1/public${pathname}?&ts=${timeStamp}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${hash}`
        );

        setLoading(false);
        setSubject(res.data.data.results[0]);
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError('ERR.');
      }
    };
    getData();
  }, [error, pathname]);

  // discern out the name from type of parameter
  const getName = typeOfParam => {
    if (subject) {
      if (typeOfParam.includes('/creators')) return subject.fullName;
      if (typeOfParam.includes('/characters')) return subject.name;
      return subject.title;
    }
  };

  const name = getName(pathname);

  if (loading || !subject) return <Loading />;
  if (error) return <div>{error}</div>;
  return (
    <DetailPageStyled>
      <>
        <div>
          <img
            className='book'
            src={
              subject.thumbnail.path +
              '/portrait_uncanny.' +
              subject.thumbnail.extension
            }
            alt={`Pic of ${subject.name}`}
          />
        </div>
        <NameDescStyled>
          <h1>{name}</h1>
          <div>
            {subject.description ? (
              <p>{subject.description}</p>
            ) : (
              <p>No Description Currently Available</p>
            )}
          </div>
        </NameDescStyled>
        {subject.comics ? (
          <div>
            <h1>Comics</h1>
            {subject.comics.items.map((item, index) => (
              <h2 key={index}>{item.name}</h2>
            ))}
          </div>
        ) : null}
        {subject.events ? (
          <>
            {subject.events.length > 0 ? (
              <div>
                <h1>Events</h1>
                {subject.events.items.map((item, index) => (
                  <h2 key={index}>{item.name}</h2>
                ))}{' '}
              </div>
            ) : null}
          </>
        ) : null}
        {subject.series ? (
          <div>
            {subject.series.name ? (
              <div>
                <h1>Series</h1>
                <h2>{subject.series.name}</h2>
              </div>
            ) : (
              <div>
                <h1>Series</h1>
                {subject.series.items.map((item, index) => (
                  <h2 key={index}>{item.name}</h2>
                ))}
              </div>
            )}
          </div>
        ) : null}
        {subject.stories ? (
          <div>
            <h1>Stories</h1>
            {subject.stories.items.map((item, index) => (
              <h2 key={index}>{item.name}</h2>
            ))}
          </div>
        ) : null}{' '}
      </>
    </DetailPageStyled>
  );
};

export default DetailPage;
