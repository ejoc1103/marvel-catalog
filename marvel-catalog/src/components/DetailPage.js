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
        console.log('loas', res);
        setLoading(false);
        setSubject(res.data.data.results[0]);
      } catch (err) {
        console.log(err)
        setLoading(false);
        setError("Hey You done fucked up.");
      }
    };
    getData();
  }, [nameId]);

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
  if (loading || !subject) return <div>LOADING !!!</div>
  if (error) return <div>{error}</div>
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
      <h1>{subject.name}</h1>
      <h1>{subject.title}</h1>
      <h1>{subject.fullName}</h1>
      {subject.description ? (
        <h3>{name}</h3>
      ) : (
        <h3>No Description Available</h3>
      )}
    </div>
  );
};

export default DetailPage;
