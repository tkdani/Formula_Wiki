import { Component } from "react";
import "./search-bar.style.css";
class SearchBar extends Component {
  render() {
    const { placeHolder, onChange } = this.props;
    return (
      <div className="search-bar-container">
        <div className="button-container">
          <div className="drivers-btn">Drivers</div>
          <div className="teams-btn">Teams</div>
        </div>
        <input
          className="searchBar"
          type="search"
          placeholder={placeHolder}
          onChange={onChange}
        />
      </div>
    );
  }
}
export default SearchBar;
