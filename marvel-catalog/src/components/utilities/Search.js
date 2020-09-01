import React, { useState } from "react";
const Search = (props) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    const keyWord = e.target.value;
    setSearch(keyWord);
  };

  const handleSubmit = () => {
    console.log(props.searchType);
    props.searchType === "/comics" || props.searchType === "/series"
      ? props.createSearch({
          type: "titleStartsWith=",
          search: search + "&",
        })
      : props.createSearch({
          type: "nameStartsWith=",
          search: search + "&",
        });
    setSearch("");
  };
  const handleSelect = (e) => {
    const option = e.target.value;
    props.setOrder(option);
    console.log(e.target.value);
  };
  const handleLimit = (e) => {
    const option = e.target.value;
    props.setLimit(option);
    console.log(e.target.value);
  };
  return (
    <div className="search">
      <form>
        <input
          type="text"
          placeholder="Search"
          onChange={handleChange}
          value={search}
        />

        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>

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
