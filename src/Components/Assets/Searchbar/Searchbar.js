import React, { useState } from "react";
import Searchinput from "./searchitems/Searchinput";
import Searchbutton from "./searchitems/Searchbutton";
import "./searchbar.css";

export default function Searchbar({ setSearchTerm }) {
  const [searchInputValue, setSearchInputValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setSearchTerm(searchInputValue);
  }

  return (
    <form onSubmit={handleSubmit} className="searchbar">
      <Searchinput
        searchInputValue={searchInputValue}
        setSearchInputValue={setSearchInputValue}
      />
      <Searchbutton />
    </form>
  );
}
