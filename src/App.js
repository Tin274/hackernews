import "./App.css";
import { useState } from "react";
import Layout from "./Components/Layout/Layout";
import Main from "./Components/Main";

function App() {
  const [searchTerm, setSearchTerm] = useState("&tags=front_page");
  return (
    <div className="App">
      <Layout setSearchTerm={setSearchTerm}>
        <Main searchTerm={searchTerm} />
      </Layout>
    </div>
  );
}

export default App;
