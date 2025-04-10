import { useState, useEffect } from "react";
import "./current-gp-info.style.css";
const CurrentGp = () => {
  const [currentMeeting, setCurrentMeeting] = useState(null);
  const [currentSession, setCurrentSession] = useState("");

  useEffect(() => {
    fetch("https://api.openf1.org/v1/sessions?meeting_key=latest")
      .then((response) => response.json())
      .then((jsonContent) => setCurrentMeeting(jsonContent));
    fetch("https://api.openf1.org/v1/sessions?session_key=latest")
      .then((response) => response.json())
      .then((jsonContent) => setCurrentSession(jsonContent[0].session_name));
  }, []);

  const formatTime = (dateTime) => {
    const date = new Date(dateTime);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="side-bar-container">
      <div className="gp-container">
        <div className="current-header">Live</div>
        <div className="current-session">{currentSession}</div>
      </div>
      <div className="gp-container">
        <div className="current-header">Grand Prix</div>
        {currentMeeting == null ? (
          <div className="current-container">Loading...</div>
        ) : (
          <div className="current-container">
            <div className="current-detail-container">
              <div>Country:</div>
              <div>{currentMeeting[0].country_name}</div>
            </div>
            <div className="current-detail-container">
              <div>Circuit:</div>
              <div>{currentMeeting[0].circuit_short_name}</div>
            </div>
          </div>
        )}
      </div>
      <div className="gp-container">
        <div className="current-header">Calendar</div>
        {currentMeeting == null ? (
          <div className="current-container">Loading...</div>
        ) : (
          currentMeeting.map((meeting) => {
            return (
              <div className="current-detail-container">
                <div>{meeting.session_name}:</div>
                <div>
                  {formatTime(meeting.date_start) +
                    " - " +
                    formatTime(meeting.date_end)}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default CurrentGp;
