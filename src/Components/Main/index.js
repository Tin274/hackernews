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
                  <svg></svg>
                  <a href="#" className="rating">
                    144 Points
                  </a>
                </div>
                <div className="comments-container">
                  <svg></svg>
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
