import { Component } from "react";

import "./next-gp.style.css";

class NextGp extends Component {
  render() {
    const { session } = this.props;
    if (!session || session.length === 0) {
      return <h3 className="Loading-txt">Loading...</h3>;
    }
    return (
      <div className="session-container">
        <div className="next-gp-container">
          <div className="next-gp-header">Next Grand Prix</div>
          <div className="next-gp-name">{session[0].circuit_short_name}</div>
        </div>
        <div className="next-session-container">
          <div className="next-gp-header">Weekend structure</div>
          {session.map((gp) => {
            return (
              <div key={gp.session_name}>
                <div>{gp.session_name}</div>
                <div>
                  <div>
                    {new Date(gp.date_start).toLocaleTimeString("hu-HU", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                    {" - "}
                    {new Date(gp.date_end).toLocaleTimeString("hu-HU", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default NextGp;
