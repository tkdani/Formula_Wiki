import { Component } from "react";
import "./App.css";

import PageName from "./components/page-name/page-name.component";
import SearchBar from "./components/search-bar/search-bar.component";
import CardList from "./components/card-list/card-list.component";
import NextGp from "./components/next-gp/next-gp.component";
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
        <NextGp nextGrandP={nextGP} />
        <div>
          <PageName />
          <SearchBar
            placeHolder="Search F1 drivers"
            onChange={onChangeHandler}
          />
          <CardList drivers={filteredDrivers} />
        </div>
      </div>
    );
  }
}

export default App;
