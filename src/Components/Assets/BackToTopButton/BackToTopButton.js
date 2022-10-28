import React from "react";
import "./BackToTopButton.css";

export default function BackToTopButton() {
  return (
    <a id="backToTop" href="#top">
      <svg
        className="w-6 h-6"
        fill="var(--color-secondary)"
        viewBox="0 0 20 20"
        xmlns="SVG namespace"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
          clipRule="evenodd"
        ></path>
      </svg>
    </a>
  );
}
