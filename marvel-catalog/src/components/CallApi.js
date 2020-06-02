import React, { useState, useEffect } from "react";
import DisplayPage from "./DisplayPage";
import DisplayList from "./DisplayList";
import Search from "./Search";
import axios from "axios";
import { timestamp, publicKey, hash } from "../utils";

const CallApi = (props) => {
  const [comics, callComics] = useState([]);
  const [page, setPage] = useState(0);
  const [params, setParams] = useState({
    type: "",
    search: "",
  });
  const limit = 18;
  const type = props.apiParam;
  console.log(params.type);
  useEffect(() => {
    axios
      .get(
        `http://gateway.marvel.com/v1/public/${props.apiParam}?${
          params.type + params.search
        }limit=${limit}&offset=${
          page * limit
        }&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
      )
      .then((res) => {
        console.log("Do I get called");
        callComics(res.data.data.results);
      });
  }, [page, params]);

  return (
    <>
      <Search createSearch={setParams} searchType={props.apiParam} />
      {type === "creators" ? (
        <DisplayList data={comics} changePage={setPage} currentPage={page} />
      ) : (
        <DisplayPage data={comics} changePage={setPage} currentPage={page} />
      )}
    </>
  );
};

export default CallApi;
