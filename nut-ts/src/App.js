import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./modules/HomePage";
import AboutPage from "./modules/AboutPage";
function App() {
  return (
    <Router>
      <Route path="/" exact component={HomePage} />
      <Route path="/about" exact component={AboutPage} />
    </Router>
  );
}

export default App;
