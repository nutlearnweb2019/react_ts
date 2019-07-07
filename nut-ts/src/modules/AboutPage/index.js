import React, { Component } from "react";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <div>
        <div>About</div>
        <Link to="/">Go to Home Page</Link>
      </div>
    );
  }
}

export default About;
