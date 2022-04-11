import React from "react";
import { Menu, Home } from "./Components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Style/style.css";

const App = () => {
  return (
    <>
      <Router>
          <Menu />
        <Routes>
        </Routes>
      </Router>
    </>
  );
};

export default App;
