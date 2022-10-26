import React from "react";
import './footer.css';
import Searchbar from "../Searchbar/Searchbar";
import Logo from "../Header/Logo";
import NavList from "./navigation/NavList";
import Copyright from "./navigation/Copyright";

export default function Footer(){

    return(
        <div className="footer">
          <div className="footer-container">
            <Logo />
            <NavList />
            <div className="copyright-container">
              <Searchbar className="hidden-on-mobile"/>
              <Copyright />
            </div>
          </div>
        </div>
    )
}