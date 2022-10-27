import React from "react";
import "./Modal.css";

export default function Modal({ modalOpen, setModalOpen, iframeUrl }) {
  function closeModal() {
    setModalOpen((modalOpen = !modalOpen));
    console.log(modalOpen);
  }

  return (
    <div className="modal-container">
      <dialog open={modalOpen}>
        <button onClick={closeModal}>X</button>
        <iframe src={iframeUrl} frameborder="0"></iframe>
      </dialog>
    </div>
  );
}
