import React, { useState, useEffect } from "react";
import axios from "axios";
import { timestamp, publicKey, hash } from "../utils";
import { useParams, useLocation } from "react-router-dom";

const DetailPage = () => {
  const { nameId } = useParams();
  const [subject, setSubject] = useState({});
  const [imgInfo, setImgInfo] = useState({});

  const location = useLocation();
  const { type } = location.state;
  console.log(type);
  useEffect(() => {
    axios
      .get(
        `http://gateway.marvel.com/v1/public/${type}/${nameId}?&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
      )
      .then((res) => {
        setSubject(res.data.data.results[0]);
        setImgInfo(res.data.data.results[0].thumbnail);
      });
  }, [nameId]);

  console.log(subject.comics);
  return (
    <div className="container">
      <img
        className="book"
        src={imgInfo.path + "/portrait_uncanny." + imgInfo.extension}
        alt={`Pic of ${subject.name}`}
      />
      <h1>{subject.name}</h1>
      <h3>{subject.description}</h3>
    </div>
  );
};

export default DetailPage;
