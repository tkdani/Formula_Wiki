import { useState, useEffect } from "react";

const CurrentGp = () => {
  const [currentSession, setCurrentSession] = useState("");
  const [currentMeeting, setCurrentMeeting] = useState([]);

  useEffect(() => {
    fetch("https://api.openf1.org/v1/sessions?meeting_key=latest")
      .then((response) => response.json())
      .then((jsonContent) => setCurrentMeeting(jsonContent));

    fetch("https://api.openf1.org/v1/sessions?session_key=latest")
      .then((response) => response.json())
      .then((jsonContent) => setCurrentSession(jsonContent[0].session_name));
  }, []);
  return (
    <div className="current-gp-container">
      <div className="current-meeting-detail">
        <div>Grand Prix</div>
        <div>{currentMeeting[0].circuit_short_name}</div>
      </div>
    </div>
  );
};

export default CurrentGp;
