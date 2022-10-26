import React from "react";
import "./main.css";

export default function Main() {
  return (
    <main>
      <div className="modal">
        <dialog>
          <iframe src="" frameborder="0"></iframe>
        </dialog>
        <section className="results">
          <article>
            <div className="id">1</div>
            <div className="details-outer">
              <div className="info-container">
                <a href="#">
                  <h2 className="title">Titel von Artikel</h2>
                </a>

                <div className="info-details">
                  <p>20hours ago</p>
                  <a href="#">quelle</a>
                  <a href="#">Author</a>
                </div>
              </div>
              <div className="additional">
                <div className="rating-container">
                <svg 
                  className="icon-rating" 
                  fill="var(--color-secondary)"  
                  viewBox="0 0 20 20" 
                  xmlns="SVG namespace">
                  <path 
                    d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z">
                  </path>
                </svg>
                  <a href="#" className="rating">
                    144 Points
                  </a>
                </div>
                <div className="comments-container">
                <svg 
                  className="icon-comments" 
                  fill="var(--color-secondary)" 
                  viewBox="0 0 20 20" 
                  xmlns="SVG namespace">
                    <path 
                      fill-rule="evenodd" 
                      d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" 
                      clip-rule="evenodd">
                    </path>
                </svg>
                  <a href="#" className="comments">
                    3 Comments
                  </a>
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
