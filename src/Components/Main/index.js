import React, {useState, useEffect} from "react";
import "./main.css";
import Result from "./Result/Result";
import CircularProgress from '@mui/material/CircularProgress';

export default function Main() {

  const url = "https://hn.algolia.com/api/v1/search?query=&tags=front_page"

  const [articles, setArticles] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [articleList, setArticleList] = useState([]);

  async function fetchArticles() {
    setIsLoading(true)
    const response = await fetch(url)
    const data = await response.json();
    setArticles(data)
  }

   useEffect(()=>{
    
    if(articles){
      setArticleList(articles.hits.map((article, index) => {
        return (
          <Result key={article.objectID} article={article} index={index} />
        )
      })) 
      setIsLoading(false)
    }
  }, [articles]);

  useEffect(()=>{
    fetchArticles();
  }, []);

  if(isLoading){
    return(
      <main className="loadingCircle">
        <CircularProgress color="secondary" />
      </main>
    )
  };
  
  return (
    <main>
      <div className="modal">
        <dialog>
          <iframe src="" frameBorder="0"></iframe>
        </dialog>
        <section className="results">

          {articleList}
                
        </section>
      </div>
    </main>
  );
}
