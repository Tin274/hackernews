import React from "react";
import "./header.css";
import Logo from "./Logo"
import Navbar from "./navigation/Navbar";
import Searchbar from "../Searchbar/Searchbar";


export default function Header(){
  return (
    <div>
      <div className="header">
        <div className="header-container">
          <Logo />
          <Navbar />
        </div>
      </div>
      <div className="hidden-on-desktop searchbar-mobile">
        <Searchbar />
      </div>
    </div>
  )
}