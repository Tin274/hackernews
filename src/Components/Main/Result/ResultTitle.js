import React from "react";

export default function ResultTitle({
  setModalOpen,
  modalOpen,
  title,
  setIframeUrl,
  url,
}) {
  function toggleModal() {
    setModalOpen((modalOpen = !modalOpen));
    console.log(modalOpen);
  }
  function fillIframe() {
    setIframeUrl(url);
  }

  const startAndFillModal = () => {
    toggleModal();
    fillIframe();
  };

  return (
    <h2 onClick={startAndFillModal} className="title">
      {title}
    </h2>
  );
}
