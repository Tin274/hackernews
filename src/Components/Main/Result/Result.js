import React, { useState } from "react";
import ResultTitle from "./ResultTitle";
import ResultInfoDetails from "./ResultInfoDetails";
import ResultRating from "./ResultRating";
import ResultComments from "./ResultComments";


export default function Result({
  article,
  setModalOpen,
  modalOpen,
  setIframeUrl,
  index
}) {
  return (
    <article>
      <div className="id">{index + 1}</div>
      <div className="details-outer">
        <div className="info-container">
          <ResultTitle
            setModalOpen={setModalOpen}
            modalOpen={modalOpen}
            title={article.title}
            url={article.url}
            setIframeUrl={setIframeUrl}
          />
          <ResultInfoDetails
            title={article.title}
            created={article.created_at}
            url={article.url}
            author={article.author}
          />
        </div>
        <div className="additional">
          <ResultRating points={article.points} />

          <ResultComments comments={article.num_comments} />
        </div>
      </div>
    </article>
  );
}
