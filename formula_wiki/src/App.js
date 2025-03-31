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
    };
  }

  componentDidMount() {
    this.setState(() => {
      return { drivers: driversData };
    });
  }

  onChangeHandler = (event) => {
    const searchInput = event.target.value;
    this.setState(() => {
      return { searchInput };
    });
  };

  render() {
    const { drivers, searchInput } = this.state;
    const { onChangeHandler } = this;

    const filteredDrivers = drivers.filter((driver) => {
      return driver.name.toLocaleLowerCase().includes(searchInput);
    });

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
  }
}

export default App;
