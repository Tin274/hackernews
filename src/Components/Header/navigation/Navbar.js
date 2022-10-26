import React from "react";
import Navitem from "./Navitem";
import StoryIcon from "./StoryIcon";
import JobIcon from "./JobIcon";
import QuestionIcon from "./QuestionIcon";
import Searchbar from "../../Assets/Searchbar/Searchbar";


export default function Navbar() {
  return(
    <nav className="navigation">
      <div className="navigation-container">
        <ul className="navlist">
          <Navitem><StoryIcon /></Navitem>
          <Navitem><JobIcon /></Navitem>
          <Navitem><QuestionIcon /></Navitem>
        </ul>
      </div>
      <div className="hidden-on-mobile searchbar-container">
          <Searchbar  />
        </div>
    </nav>
  )
}