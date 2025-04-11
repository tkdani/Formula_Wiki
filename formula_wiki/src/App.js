import { useState, useEffect } from "react";
import "./App.css";

import PageName from "./components/page-name/page-name.component";
import SearchBar from "./components/search-bar/search-bar.component";
import DriverCardList from "./components/card-list/driver-card-list/driver-card-list.component";
import TeamsCardList from "./components/card-list/team-card-list/team-card-list.component";
import CurrentGp from "./components/side-bar/right-side-bar/current-gp-info.component";

import driversData from "./drivers.json";
import teamsData from "./teams.json";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [drivers, setDrivers] = useState([]);
  const [filteredDrivers, setFilteredDrivers] = useState(drivers);
  const [teams, setTeams] = useState([]);
  const [filteredTeams, setFilteredTeams] = useState(teams);
  const [view, setView] = useState("drivers");

  useEffect(() => {
    setDrivers(driversData);
  }, []);
  useEffect(() => {
    setTeams(teamsData);
  }, []);

  useEffect(() => {
    if (view === "teams") {
      const filteredTeamsList = teams.filter((team) => {
        return team.name.toLocaleLowerCase().includes(searchField);
      });
      setFilteredTeams(filteredTeamsList);
    } else {
      const filteredDriversList = drivers.filter((driver) => {
        return driver.name.toLocaleLowerCase().includes(searchField);
      });
      setFilteredDrivers(filteredDriversList);
    }
  }, [drivers, teams, searchField, view]);

  const onChangeHandler = (event) => {
    const searchInput = event.target.value;
    setSearchField(searchInput);
  };

  const onDriversClick = () => {
    setView("drivers");
  };
  const onTeamsClick = () => {
    setView("teams");
  };
  return (
    <div className="main-body">
      <div></div>
      <div>
        <div className="main-container">
          <PageName />
          <SearchBar
            placeHolder="Search F1 drivers"
            onChange={onChangeHandler}
            onDriverClick={onDriversClick}
            onTeamClick={onTeamsClick}
            onPage={view}
          />
          {view === "drivers" ? (
            <DriverCardList drivers={filteredDrivers} />
          ) : (
            <TeamsCardList teams={filteredTeams} />
          )}
        </div>
      </div>
      <div>
        <CurrentGp />
      </div>
    </div>
  );
};

export default App;
