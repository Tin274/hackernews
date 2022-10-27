import React, { useState, useEffect } from "react";
import "./main.css";
import Result from "./Result/Result";
import Modal from "./Modal/Modal";

export default function Main() {
  const url = "https://hn.algolia.com/api/v1/search?query=&tags=front_page";

  const [articles, setArticles] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [articleList, setArticleList] = useState([]);

  const [modalOpen, setModalOpen] = useState(false);
  const [iframeUrl, setIframeUrl] = useState("");

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
          return (
            <Result
              key={article.id}
              article={article}
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
              setIframeUrl={setIframeUrl}
            />
          );
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
      <Modal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        iframeUrl={iframeUrl}
      />
      <section className="results">{articleList}</section>
    </main>
  );
}
