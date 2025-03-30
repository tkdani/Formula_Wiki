import { Component } from "react";

import "./next-gp.style.css";

class NextGp extends Component {
  render() {
    const { NextGP } = this.props;
    if (!NextGP || NextGP.length === 0) {
      return <h3 className="Loading-txt">Loading...</h3>;
    }
    return (
      <div className="next-gp-container">
        <div className="next-gp-header">Next Grand Prix</div>
        <div className="next-gp-name">{NextGP[0].meeting_name}</div>
      </div>
    );
  }
}
export default NextGp;
