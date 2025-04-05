const TeamsCardList = ({ teams }) => {
  return (
    <div className="card-list">
      {teams.map((team) => {
        return (
          <div key={team.id} className="team-card-container">
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
                <p className="team-principal-name">{team.boss}</p>
              </div>
              <img className="team-pic" alt={team.name} src={team.carImg} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TeamsCardList;
