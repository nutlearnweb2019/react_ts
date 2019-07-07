import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import s from "../components/Navbar/style.module.css";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Navbar a={2} />
        <div>Home Page</div>
        <Link to="/about">Go to About</Link>
        <div className={`${s.container} ${s.fontLarge}`}>CCC</div>
      </div>
    );
  }
}

export default HomePage;
