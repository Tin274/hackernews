import React from "react";
import ResultTitle from "./ResultTitle";
import ResultInfoDetails from "./ResultInfoDetails";
import ResultRating from "./ResultRating";
import ResultComments from "./ResultComments";

export default function Result({article, index}) {

  return (
    <article>
      <div className="id">{index + 1}</div>
      <div className="details-outer">
        <div className="info-container">
          <ResultTitle title={article.title}/>
          <ResultInfoDetails title={article.title} created={article.created_at} url={article.url} author={article.author}/>
        </div>
        <div className="additional">
          <ResultRating points={article.points}/>

          <ResultComments comments={article.num_comments}/>
        </div>
      </div>
    </article>
  );
}

