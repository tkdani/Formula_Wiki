import { Component } from "react";
import "./card-list.style.css";

class CardList extends Component {
  render() {
    const { drivers } = this.props;
    return drivers.map((driver) => {
      return (
        <div key={driver.driver_number} className="driverCards">
          <h2 className="driverNames">
            {driver.first_name} {driver.last_name}
          </h2>
          <div className="driverDetails">
            <img className="driverPic" src={driver.headshot_url} />
            <p className="teamName">Team: {driver.team_name}</p>
            <p className="driverNumber">Number: {driver.driver_number}</p>
            <p className="driverNat">Nationality: {driver.country_code}</p>
          </div>
        </div>
      );
    });
  }
}

export default CardList;
