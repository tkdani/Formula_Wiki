import { useState, useEffect } from "react";
import "./App.css";

import PageName from "./components/page-name/page-name.component";
import SearchBar from "./components/search-bar/search-bar.component";
import CardList from "./components/card-list/driver-card-list/card-list.component";

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
    const filteredDriversList = drivers.filter((driver) => {
      return driver.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredDrivers(filteredDriversList);
  }, [drivers, searchField]);

  const onChangeHandler = (event) => {
    const searchInput = event.target.value;
    setSearchField(searchInput);
  };

  return (
    <div className="main-body">
      <div></div>
      <div>
        <PageName />
        <div className="main-container">
          <SearchBar
            placeHolder="Search F1 drivers"
            onChange={onChangeHandler}
          />
          <CardList drivers={filteredDrivers} />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default App;
