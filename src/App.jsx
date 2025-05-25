import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componends/header";
import Home from "./componends/home";
import Login from "./componends/login";
import Footer from "./componends/footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;