import { Component } from "react";
import "./card-list.style.css";

class CardList extends Component {
  render() {
    const { drivers } = this.props;
    return (
      <div className="card-list">
        {drivers.map((driver) => {
          return (
            <div className="card-container">
              <div className="driver-name-container">
                <h2 className="driver-name">{driver.name}</h2>
                <div className="driver-nat-container">
                  <p className="driver-nat-name">{driver.nat}</p>
                  <img src={driver.natImg} className="driver-nat-img" />
                </div>
              </div>

              <div className="driver-detail-container">
                <img
                  className="driver-pic"
                  alt={driver.name}
                  src={driver.driverImg}
                />
                <div className="driver-detail">
                  <p className="team-name">{driver.team}</p>
                  <p className="driver-number">{driver.number}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
