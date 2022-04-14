import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Demo from "./Components/Demo";
import Main from "./Components/Main/Main";
import "./Style/style.css";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          {/* <Route path="/demo" element={<Demo />} /> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
