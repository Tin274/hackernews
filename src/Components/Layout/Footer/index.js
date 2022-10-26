import React from "react";
import './footer.css';
import Searchbar from "../../Assets/Searchbar/Searchbar";
import Logo from "../Header/Logo";
import NavList from "./navigation/NavList";
import Copyright from "./navigation/Copyright";

export default function Footer(){

    return(
        <footer>
          <div className="footer-container">

          

            <Logo />

            <div className="footer-additional">
              <div className="search-container">
              <Searchbar className="hidden-on-mobile"/>
              </div>
              <div className="nav-container">
                <NavList />
                <Copyright />
              </div>
            </div>
          </div>
        





          {/* <div className="footer-container">
          <Logo />
            <NavList />
            <div className="copyright-container">
              <Searchbar className="hidden-on-mobile"/>
              <Copyright />
            </div>
          </div> */}
        </footer>
    )
}