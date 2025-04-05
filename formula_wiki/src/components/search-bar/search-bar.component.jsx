import "./search-bar.style.css";
const SearchBar = ({ placeHolder, onChange, onDriverClick, onTeamClick }) => {
  return (
    <div className="search-bar-container">
      <div className="button-container">
        <button onClick={onDriverClick} className="drivers-btn">
          Drivers
        </button>
        <button onClick={onTeamClick} className="teams-btn">
          Teams
        </button>
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
