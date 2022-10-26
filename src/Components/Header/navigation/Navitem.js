import React from "react";

export default function Navitem(props) {
  return(
    <li className="white-circle">
        {props.children}
    </li>
  )
}