import React, { useState, useEffect } from "react";
import axios from "axios";
import { timestamp, publicKey, hash } from "../utils";
import { useParams, useLocation } from "react-router-dom";

const DetailPage = ({ param }) => {
  const { nameId } = useParams();
  const location = useLocation();

  const [subject, setSubject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { type } = location.state;

  useEffect(() => {
    const getData = async () => {
      if (error) setError(false);
      try {
        const res = await axios.get(
          `http://gateway.marvel.com/v1/public/${type}/${nameId}?&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
        );

        setLoading(false);
        setSubject(res.data.data.results[0]);
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError("ERR.");
      }
    };
    getData();
  }, [nameId]);

  console.log(subject);
  // discern out the name from type of parameter
  const getName = (typeOfParam) => {
    if (subject) {
      if (typeOfParam === "/creators") return subject.fullName;
      if (typeOfParam === "/characters") return subject.name;
      return subject.title;
    }
  };

  // get name
  const name = getName(type);
  if (loading || !subject) return <div>LOADING !!!</div>;
  if (error) return <div>{error}</div>;
  return (
    <div className="container">
      <img
        className="book"
        src={
          subject.thumbnail.path +
          "/portrait_uncanny." +
          subject.thumbnail.extension
        }
        alt={`Pic of ${subject.name}`}
      />
      <h1>{name}</h1>

      {subject.description ? (
        <h3>{subject.description}</h3>
      ) : (
        <h3>No Description Available</h3>
      )}
      {subject.comics ? (
        <div>
          <h1>Comics</h1>
          {subject.comics.items.map((item, index) => (
            <h1 key={index}>{item.name}</h1>
          ))}
        </div>
      ) : null}

      {subject.events ? (
        <div>
          <h1>Events</h1>
          {subject.events.items.map((item, index) => (
            <h1 key={index}>{item.name}</h1>
          ))}{" "}
        </div>
      ) : null}
      {subject.series ? (
        <div>
          {subject.series.name ? (
            <div>
              <h1>Series</h1>
              <h1>{subject.series.name}</h1>
            </div>
          ) : (
            <div>
              <h1>Series</h1>
              {subject.series.items.map((item, index) => (
                <h1 key={index}>{item.name}</h1>
              ))}
            </div>
          )}
        </div>
      ) : null}

      {subject.stories ? (
        <div>
          <h1>Stories</h1>
          {subject.stories.items.map((item, index) => (
            <h1 key={index}>{item.name}</h1>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default DetailPage;
