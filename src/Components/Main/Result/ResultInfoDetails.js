import { fontWeight } from "@mui/system";
import React from "react";
import moment from "moment";

export default function ResultInfoDetails({title, created, author, url}) {



  return (
    <div className="info-details">
      <p>{moment(created).startOf('hour').fromNow()}</p>
      <a href={url} title={title} target="blank" style={{fontWeight:"bold"}} > Zum Artikel </a>
      <p>Autor: <span style={{fontWeight:"bold"}}>{author} </span></p>
    </div>
  );
}
