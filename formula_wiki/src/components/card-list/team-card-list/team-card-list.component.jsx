import "./team-card-list.style.css";

const TeamsCardList = ({ teams }) => {
  return (
    <div className="card-list-teams">
      {teams.map((team) => {
        return (
          <div key={team.id} className="card-container-teams">
            <div className="team-name-container">
              <h2 className="team-name">{team.name}</h2>
              <img
                alt={team.name}
                src={team.logoImg}
                className="team-logo-img"
              />
            </div>

            <div className="team-detail-container">
              <div className="team-detail">
                <p className="team-boss">
                  Team principal:{" "}
                  <a className="team-boss-name">
                    <br />
                    {team.boss}
                  </a>
                </p>
                <p className="team-drivers">
                  Drivers:{" "}
                  <a className="team-drivers-names">
                    <br />
                    {team.racers}
                  </a>
                </p>
              </div>
              <img className="car-pic" alt={team.name} src={team.carImg} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TeamsCardList;
