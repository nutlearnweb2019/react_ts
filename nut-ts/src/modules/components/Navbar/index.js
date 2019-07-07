import React from "react";

import style from "./style.module.css";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  increase = value => {
    this.setState(state => ({ counter: state.counter + value }));
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-brand">Navbar</div>
        <div className={`${style.container} ${style.fontLarge}`}>CCC</div>
      </nav>
    );
  }
}

export default Navbar;
