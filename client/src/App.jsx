import React from "react";
import { Navbar } from "./Components";
import { Hero, Core, AboutUs, Trust } from "./Pages";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="container1">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/core" element={<Core />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="trust" element={<Trust />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
