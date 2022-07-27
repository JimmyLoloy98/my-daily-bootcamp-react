import team1 from "../assets/img/team/team-1.jpg";
import team2 from "../assets/img/team/team-2.jpg";
import team3 from "../assets/img/team/team-3.jpg";
import team4 from "../assets/img/team/team-4.jpg";
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
                <a className="link-team" href={teammate.twitter_url}>
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

        {/* <div className="date-teams1">
          <a className="link-team" href="#">
            <img className="team-img" src={team1} alt="Alden Cantrell" />
            <p className="text-teams">Alden Cantrell</p>
          </a>
        </div>
        <div className="date-teams">
          <a className="link-team" href="#">
            <img className="team-img" src={team3} alt="Miranda Shaffer" />
            <p>Miranda Shaffer</p>
          </a>
        </div>
        <div className="date-teams2">
          <a className="link-team" href="#">
            <img className="team-img" src={team4} alt="Alvaro Mcgee" />
            <p>Alvaro Mcgee</p>
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Team;
