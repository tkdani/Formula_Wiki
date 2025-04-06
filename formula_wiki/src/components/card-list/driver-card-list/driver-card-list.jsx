import "./driver-card-list.style.css";

const DriverCardList = ({ drivers }) => {
  return (
    <div className="card-list-drivers">
      {drivers.map((driver) => {
        return (
          <div key={driver.number} className="card-container-drivers">
            <div className="driver-name-container">
              <h2 className="driver-name">{driver.name}</h2>
              <img
                alt={driver.name}
                src={driver.natImg}
                className="driver-nat-img"
              />
            </div>

            <div className="driver-detail-container">
              <div className="driver-detail">
                <p className="team-name-driver">{driver.team}</p>
                <p className="driver-number">{driver.number}</p>
              </div>
              <img
                className="driver-pic"
                alt={driver.name}
                src={driver.driverImg}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DriverCardList;
