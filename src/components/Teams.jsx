import team1 from "../../public/assets/img/team/team-1.jpg";
import team2 from "../../public/assets/img/team/team-2.jpg";
import team3 from "../../public/assets/img/team/team-3.jpg";
import team4 from "../../public/assets/img/team/team-4.jpg";

const Team = () => {
  return (
    <div className="teams">
      <h2>My team</h2>
      <div className="container-team">
        <div className="date-teams1">
          <a className="link-team" href="#">
            <img className="team-img" src={team1} alt="Alden Cantrell" />
            <p className="text-teams">Alden Cantrell</p>
          </a>
        </div>
        <div className="date-teams">
          <a className="link-team" href="#">
            <img className="team-img" src={team2} alt="Thomas Crane" />
            <p>Thomas Crane</p>
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
        </div>
      </div>
    </div>
  );
};

export default Team;
