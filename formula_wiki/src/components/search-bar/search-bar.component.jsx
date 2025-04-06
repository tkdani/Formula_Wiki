import "./search-bar.style.css";
const SearchBar = ({
  placeHolder,
  onChange,
  onDriverClick,
  onTeamClick,
  onPage,
}) => {
  console.log(onPage);
  return (
    <div className="search-bar-container">
      <div className="button-container">
        <button
          onClick={onDriverClick}
          className={`drivers-btn ${onPage === "drivers" ? "activePage" : ""}`}
        >
          Drivers
        </button>
        <button
          onClick={onTeamClick}
          className={`teams-btn ${onPage === "teams" ? "activePage" : ""}`}
        >
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
