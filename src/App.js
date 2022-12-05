import HeaderContainer from "./container/headerContainer";
import React, { useEffect, useContext } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from './pages';
import Footer from "./components/Footer/Footer";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <Router>
      <HeaderContainer/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      <Footer/>
    </Router>

  );
}

export default App;
