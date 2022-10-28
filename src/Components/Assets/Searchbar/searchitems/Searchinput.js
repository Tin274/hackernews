import React from "react";

export default function Searchinput({ searchInputValue, setSearchInputValue }) {
  function handleChange(event) {
    console.log("event value", event.target.value);
    setSearchInputValue(event.target.value);
    console.log("search input value", searchInputValue);
  }
  return (
    <>
      <input
        onChange={handleChange}
        className="searchinput"
        type="text"
        name="search"
        placeholder="search"
      ></input>
    </>
  );
}
