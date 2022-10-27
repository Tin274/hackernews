import React from "react";
import ResultTitle from "./ResultTitle";
import ResultInfoDetails from "./ResultInfoDetails";
import ResultRating from "./ResultRating";
import ResultComments from "./ResultComments";

export default function Result({ setModalOpen, modalOpen }) {
  return (
    <article>
      <div className="id">1</div>
      <div className="details-outer">
        <div className="info-container">
          <ResultTitle setModalOpen={setModalOpen} modalOpen={modalOpen} />
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
