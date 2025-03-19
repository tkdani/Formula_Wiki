import { Component } from "react";
import "./card-list.style.css";

class CardList extends Component {
  render() {
    const { drivers } = this.props;
    return drivers.map((driver) => {
      return (
        <div key={driver.number} className="driverCards">
          <h2 className="driverNames">{driver.name}</h2>
          <p className="driverNat">{driver.nat}</p>
          <div className="driverDetails">
            <img
              className="driverPic"
              alt={driver.name}
              src={driver.driverImg}
            />
            <p className="teamName">{driver.team}</p>
            <p className="driverNumber">{driver.number}</p>
          </div>
        </div>
      );
    });
  }
}

export default CardList;
