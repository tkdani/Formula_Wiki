import { Component } from "react";

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
