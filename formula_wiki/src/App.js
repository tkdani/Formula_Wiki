import { useState, useEffect } from "react";
import "./App.css";

import PageName from "./components/page-name/page-name.component";
import SearchBar from "./components/search-bar/search-bar.component";
import CardList from "./components/card-list/card-list.component";
import SideBar from "./components/side-bar/side-bar.component";

import driversData from "./drivers.json";

const App = () => {
  const [drivers, setDrivers] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredDrivers, setFilteredDrivers] = useState(drivers);

  useEffect(() => {
    setDrivers(driversData);
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
      <SideBar />
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
    </div>
  );
};

export default App;
