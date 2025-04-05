import { useState, useEffect } from "react";

import NextGp from "./next-gp/next-gp.component";
import Leaderboard from "./leaderboard/leaderboard.component";
import "./side-bar.style.css";

const SideBar = () => {
  const [nextSession, setNextSession] = useState([]);

  useEffect(() => {
    fetch("https://api.openf1.org/v1/sessions?meeting_key=latest")
      .then((response) => response.json())
      .then((jsonContent) => setNextSession(jsonContent));
  }, []);

  return (
    <div className="side-bar-container">
      <NextGp session={nextSession} />
      <Leaderboard />
    </div>
  );
};
export default SideBar;
