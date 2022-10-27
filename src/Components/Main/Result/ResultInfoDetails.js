import React from "react";

export default function ResultInfoDetails({title, created, author, url}) {

  // const startDateTime = {created};
  // const timeNow = startDateTime.getTime();

  // let newDate = new Date();
  // let newDateNow = newDate.getTime();

  // let timer;

  // function updateClock

  return (
    <div className="info-details">
      <p>{created}</p>
      <a href={url} title={title} target="blank" > Zum Artikel </a>
      <p>Autor: {author} </p>
    </div>
  );
}
