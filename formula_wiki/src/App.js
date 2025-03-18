import { Component } from "react";
import "./App.css";
import SearchBar from "./components/search-bar/search-bar.component";
import CardList from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      drivers: [],
      searchInput: "",
    };
  }

  componentDidMount() {
    fetch("https://api.openf1.org/v1/drivers?session_key=latest")
      .then((response) => response.json())
      .then((jsonContent) =>
        this.setState(() => {
          return { drivers: jsonContent };
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
    const { drivers, searchInput } = this.state;
    const { onChangeHandler } = this;

    const filteredDrivers = drivers.filter((driver) => {
      return driver.full_name.toLocaleLowerCase().includes(searchInput);
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
