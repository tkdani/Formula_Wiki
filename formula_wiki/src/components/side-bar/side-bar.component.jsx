import { Component } from "react";

import NextGp from "./next-gp/next-gp.component";
import "./side-bar.style.css";

class SideBar extends Component {
  render() {
    const { NextGrandP } = this.props;
    return (
      <div className="side-bar-container">
        <NextGp NextGP={NextGrandP} />
      </div>
    );
  }
}
export default SideBar;
