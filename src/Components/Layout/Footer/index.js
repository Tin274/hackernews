import React from "react";
import "./footer.css";
import Searchbar from "../../Assets/Searchbar/Searchbar";
import Logo from "../Header/Logo";
import NavList from "./navigation/NavList";
import Copyright from "./navigation/Copyright";

export default function Footer({ setSearchTerm }) {
  return (
    <footer>
      <div className="footer-container">
        <Logo />
        <div className="footer-additional">
          <div className="search-container">
            <Searchbar setSearchTerm={setSearchTerm} />
          </div>
          <div className="nav-container">
            <NavList />
            <Copyright />
          </div>
        </div>
      </div>
    </footer>
  );
}
