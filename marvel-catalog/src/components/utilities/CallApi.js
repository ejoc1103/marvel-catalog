import React, { useState, useEffect, useMemo } from "react";
import DisplayPage from "../mainPages/DisplayPage";
import DisplayList from "../mainPages/DisplayList";
import Search from "./Search";
import axios from "axios";
import { useRouteMatch } from "react-router-dom";
import { timestamp, publicKey, hash } from "../../utils";

const CallApi = () => {
  const { url } = useRouteMatch();
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState();
  const [page, setPage] = useState(0);
  const [params, setParams] = useState({
    type: "",
    search: "",
  });
  const [order, setOrder] = useState("");
  const [limit, setLimit] = useState(5);
  let pathName = "/characters";
  useEffect(() => {
    if (url !== "/") {
      pathName = url;
    }
    const fetchData = async () => {
      setLoading(true);
      console.log(params.search + "search stuff");
      const result = await axios.get(
        `http://gateway.marvel.com/v1/public${pathName}?${
          params.type + params.search
        }orderBy=${order}&limit=${limit}&offset=${
          page * limit
        }&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
      );
      setComics(result.data.data.results);
      setLoading(false);
    };

    fetchData();
  }, [page, params, url, order, limit]);

  //Resets search params so links don't break after a search
  const resetSearch = useMemo(
    () =>
      setParams({
        type: "",
        search: "",
      }),
    [url]
  );

  function handleClick(event) {
    const name = event.target.name;
    if (name === "forward") {
      setPage(page + 1);
    } else if (name === "back" && page !== 0) {
      setPage(page - 1);
    } else if (page === 0) {
      console.log("Do nada");
    }
  }

  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <Search
            setParams={setParams}
            searchType={url}
            setOrder={setOrder}
            order={order}
            setLimit={setLimit}
          />

          {url === "/creators" ? (
            <DisplayList data={comics} param={url} handleClick={handleClick} />
          ) : (
            <DisplayPage
              data={comics}
              param={pathName}
              handleClick={handleClick}
            />
          )}
        </div>
      )}
    </>
  );
};

export default CallApi;
