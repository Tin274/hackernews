import React from "react";
import Searchinput from "./searchitems/Searchinput";
import Searchbutton from "./searchitems/Searchbutton";
import "./searchbar.css";

export default function Searchbar() {
  return(
      <div className="searchbar">
        <Searchinput />
        <Searchbutton />
      </div>
  )
}