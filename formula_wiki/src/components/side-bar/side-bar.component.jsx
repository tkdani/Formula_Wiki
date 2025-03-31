import { Component } from "react";

import NextGp from "./next-gp/next-gp.component";
import Leaderboard from "./leaderboard/leaderboard.component";
import "./side-bar.style.css";

class SideBar extends Component {
  constructor() {
    super();

    this.state = {
      nextSession: [],
    };
  }

  componentDidMount() {
    fetch("https://api.openf1.org/v1/sessions?meeting_key=latest")
      .then((response) => response.json())
      .then((jsonContent) =>
        this.setState(() => {
          return { nextSession: jsonContent };
        })
      );
  }

  render() {
    const { nextSession } = this.state;
    return (
      <div className="side-bar-container">
        <NextGp session={nextSession} />
        <Leaderboard />
      </div>
    );
  }
}
export default SideBar;
