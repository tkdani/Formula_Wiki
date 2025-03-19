import { Component } from "react";
import "./App.css";
import SearchBar from "./components/search-bar/search-bar.component";
import CardList from "./components/card-list/card-list.component";
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
      <div>
        <SearchBar placeHolder="Search F1 drivers" onChange={onChangeHandler} />
        <CardList drivers={filteredDrivers} />
      </div>
    );
  }
}

export default App;
