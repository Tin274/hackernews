import React, { useState } from "react";
import "./header.css";
import Logo from "./Logo";
import Navbar from "./navigation/Navbar";
import Searchbar from "../../Assets/Searchbar/Searchbar";
import Searchbutton from "../../Assets/Searchbar/searchitems/Searchbutton";
import Searchinput from "../../Assets/Searchbar/searchitems/Searchinput";

export default function Header({ setSearchTerm }) {
  
  return (
    <>
      <header id="top">
        <div className="header-container">
          <Logo />
          <Navbar setSearchTerm={setSearchTerm} />
        </div>
      </header>
      <div className="hidden-on-desktop searchbar-mobile">
        <Searchbar setSearchTerm={setSearchTerm} />
      </div>
    </>
  );
}
