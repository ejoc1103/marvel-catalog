import React, { useState } from "react";
import { useRouteMatch } from "react-router-dom";
const Search = ({ setParams, setOrder, setLimit }) => {
  const [search, setSearch] = useState("");
  const { url } = useRouteMatch();
  const handleChange = (e) => {
    const keyWord = e.target.value;
    setSearch(keyWord);
    console.log(url + search);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(setParams)
    url === "/comics" || url === "/series"
      ? setParams({
          type: "titleStartsWith=",
          search: search + "&",
        })
      : setParams({
          type: "nameStartsWith=",
          search: search + "&",
        });
    setSearch("");
  };
  const handleSelect = (e) => {
    const option = e.target.value;
    setOrder(option);
    console.log(e.target.value);
  };
  const handleLimit = (e) => {
    const option = e.target.value;
    setLimit(option);
    console.log(e.target.value);
  };
  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          onChange={handleChange}
          value={search}
        />

        <button type="submit">Submit</button>

        <select name="order" id="order" onChange={handleSelect}>
          <option value="">Select Order</option>

          <option value="name">Name</option>
          <option value="modified">Modified</option>
        </select>
        <select name="limit" id="limit" onChange={handleLimit}>
          <option value="">Select # per page</option>

          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </form>
    </div>
  );
};

export default Search;
