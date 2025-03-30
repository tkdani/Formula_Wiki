import { Component } from "react";
import "./App.css";

import PageName from "./components/page-name/page-name.component";
import SearchBar from "./components/search-bar/search-bar.component";
import CardList from "./components/card-list/card-list.component";
import SideBar from "./components/side-bar/side-bar.component";

import driversData from "./drivers.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      drivers: [],
      searchInput: "",
      nextGP: [],
    };
  }

  componentDidMount() {
    fetch("https://api.openf1.org/v1/meetings?year=2025&meeting_key=latest")
      .then((response) => response.json())
      .then((jsonContent) =>
        this.setState(() => {
          return { nextGP: jsonContent, drivers: driversData };
        })
      );
  }

  onChangeHandler = (event) => {
    const searchInput = event.target.value;
    this.setState(() => {
      return { searchInput };
    });
  };

  render() {
    const { drivers, searchInput, nextGP } = this.state;
    const { onChangeHandler } = this;

    const filteredDrivers = drivers.filter((driver) => {
      return driver.name.toLocaleLowerCase().includes(searchInput);
    });

    return (
      <div className="main-body">
        <SideBar NextGrandP={nextGP} />
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
  }
}

export default App;
