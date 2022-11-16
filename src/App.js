import HeaderContainer from "./container/headerContainer";
import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from './pages';
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <Router>
      <HeaderContainer/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </Router>

  );
}

export default App;
