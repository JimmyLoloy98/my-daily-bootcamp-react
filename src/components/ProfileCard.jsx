import me from "../assets/img/me.jpg";
import { useContext } from "react";
import DataContext from "../context/context";

const ProfileCard = () => {
  const dataContext = useContext(DataContext);

  return (
    <div className="Profile-card">
      <img src={dataContext.user.profile_url} alt="Perfil del usuario" />
      <h3>{dataContext.user.full_name}</h3>
      <span>{dataContext.user.title}</span>
      <div className="buttons-link">
        <a
          href={dataContext.user.twitter_url}
          target="_blank"
          className="profile-link"
        >
          <b>Twitter</b>
        </a>
        <a
          href={dataContext.user.linkedin_url}
          target="_blank"
          className="profile-link"
        >
          <b>LinkedIn</b>
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
