import React from "react";
import { searchIcon } from "../../assets";

const Header = (props) => {
  return (
    <header className="header flex justify-sb">
      <div className="logo">
        <img src="/src/components/Header/images/musicapp.png" alt="W" />
      </div>
      <div>
        <img src={searchIcon} alt="Search" />
      </div>
    </header>
  );
};

export default Header;
