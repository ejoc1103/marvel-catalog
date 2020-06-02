import React, { useState } from "react";
const Search = (props) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    const keyWord = e.target.value;
    setSearch(keyWord);
  };

  const handleSubmit = () => {
    console.log("Called? " + search);
    props.searchType === "comics" || props.searchType === "series"
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
  return (
    <>
      <input
        type="text"
        placeholder="Search"
        onChange={handleChange}
        value={search}
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
};

export default Search;
