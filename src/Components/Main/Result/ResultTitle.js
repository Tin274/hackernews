import React from "react";

export default function ResultTitle({ setModalOpen, modalOpen }) {
  function toggleModal() {
    setModalOpen((modalOpen = !modalOpen));
    console.log(modalOpen);
  }

  return (
    <h2 onClick={toggleModal} className="title">
      Titel von Artikel
    </h2>
  );
}
