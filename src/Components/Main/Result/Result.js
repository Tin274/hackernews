import React from "react";
import ResultTitle from "./ResultTitle";
import ResultInfoDetails from "./ResultInfoDetails";
import ResultRating from "./ResultRating";
import ResultComments from "./ResultComments";

export default function Result() {
  return (
    <article>
      <div className="id">1</div>
      <div className="details-outer">
        <div className="info-container">
          <ResultTitle />
          <ResultInfoDetails />
        </div>
        <div className="additional">
          <ResultRating />

          <ResultComments />
        </div>
      </div>
    </article>
  );
}
