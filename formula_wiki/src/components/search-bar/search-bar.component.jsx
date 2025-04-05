import "./search-bar.style.css";
const SearchBar = ({ placeHolder, onChange }) => {
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
};
export default SearchBar;
