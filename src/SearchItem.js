import React from "react";

const SearchItem = ({ search, setSearch }) => {
  return (
    <form className="searchItem">
      <label htmlFor="search">Search</label>
      <input
        type="text"
        id="search"
        value={search}
        placeholder="Search..."
        name="search"
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchItem;
