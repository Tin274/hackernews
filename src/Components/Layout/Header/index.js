import React from "react";
import "./header.css";
import Logo from "./Logo";
import Navbar from "./navigation/Navbar";
import Searchbar from "../../Assets/Searchbar/Searchbar";

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
