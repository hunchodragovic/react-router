import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<>
          <Header/> <Home />
        </>
        }
        />
       
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
