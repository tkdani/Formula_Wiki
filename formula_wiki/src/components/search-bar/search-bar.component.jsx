import { Component } from "react";
import "./search-bar.style.css";
class SearchBar extends Component {
  render() {
    const { placeHolder, onChange } = this.props;
    return (
      <input
        className="searchBar"
        type="search"
        placeholder={placeHolder}
        onChange={onChange}
      />
    );
  }
}
export default SearchBar;
