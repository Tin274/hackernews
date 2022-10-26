import React from "react";

export default function ResultRating() {
  return (
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
  );
}
