import React, { useState, useEffect } from "react";
import "./main.css";
import Result from "./Result/Result";

export default function Main() {
  const url = "https://hn.algolia.com/api/v1/search?query=&tags=front_page";

  const [articles, setArticles] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [articleList, setArticleList] = useState([]);

  async function fetchArticles() {
    setIsLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setArticles(data);
  }

  useEffect(() => {
    if (articles) {
      setArticleList(
        articles.hits.map((article) => {
          return <Result key={article.id} article={article} />;
        })
      );
      setIsLoading(false);
    }
  }, [articles]);

  useEffect(() => {
    fetchArticles();
  }, []);

  if (isLoading) {
    return <h1>Articles are loading...</h1>;
  }

  return (
    <main>
      <div className="modal">
        <dialog>
          <iframe src="" frameBorder="0"></iframe>
        </dialog>
        <section className="results">{articleList}</section>
      </div>
    </main>
  );
}
