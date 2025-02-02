import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      // Pass the search text only
      onSearch(searchText);
    }
  };

  return (
    <div className="search_button">
      <h4>What are you looking for?</h4>
      <form className="a" onSubmit={handleSearch}>
        <input
          type="search"
          className="form-control"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;

