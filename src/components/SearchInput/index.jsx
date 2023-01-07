import React from "react";
import { searchIconGrey } from "../../assets";
import "./style.css";
const SearchInput = () => {
  return (
    <div className="search-input-container flex">
      <img src={searchIconGrey} alt="" />
      <input placeholder="Find your music" />
    </div>
  );
};

export default SearchInput;
