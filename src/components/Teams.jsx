import { useContext } from "react";
import DataContext from "../context/context";

const Team = () => {
  const dataContext = useContext(DataContext);

  return (
    <div className="teams">
      <h2>My team</h2>
      <div className="container-team">
        {dataContext.myTeam.map((teammate, index) => {
          if (index > 1 && index < 5) {
            return (
              <div className="date-teams1" key={index}>
                <a className="link-team" href={teammate.twitter_url} target="_blank">
                  <img
                    className="team-img"
                    src={teammate.profile_url}
                    alt={teammate.id}
                  />
                  <p>{teammate.full_name}</p>
                </a>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Team;
