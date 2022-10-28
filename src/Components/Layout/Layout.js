import React from "react";
import Header from "./Header/index";
import Footer from "./Footer/index";

export default function Layout({ children, setSearchTerm }) {
  return (
    <>
      <Header setSearchTerm={setSearchTerm} />

      {children}

      <Footer setSearchTerm={setSearchTerm} />
    </>
  );
}
