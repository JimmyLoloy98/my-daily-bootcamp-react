import profile1 from "../assets/img/stories/profile-1.jpg";
import profile2 from "../assets/img/stories/profile-2.jpg";
import profile3 from "../assets/img/stories/profile-3.jpg";

export default function Storie() {
  return (
    <div className="stories">
      <h2 className="tittle-stories">Stories</h2>
      <ul className="stories-sqare">
        <a className="link-stories" href="#">
          <li className="frame-storie">
            <div className="img-storie1 img-storie">
              <img
                className="profile-photo"
                src={profile1}
                alt="foto de perfil de un usuario"
              />
              <h3 className="profile-name">Kierra Gentry</h3>
            </div>
            <div className="storie-borde"></div>
          </li>
        </a>
        <a className="link-stories" href="#">
          <li className="frame-storie">
            <div className="img-storie2 img-storie">
              <img
                className="profile-photo"
                src={profile2}
                alt="foto de perfil de un usuario"
              />
              <h3 className="profile-name">Bradyn Krammer</h3>
            </div>
            <div className="storie-borde"></div>
          </li>
        </a>
        <a className="link-stories" href="#">
          <li className="frame-storie">
            <div className="img-storie3 img-storie">
              <img
                className="profile-photo"
                src={profile3}
                alt="foto de perfil de un usuario"
              />
              <h3 className="profile-name">Pierre Cox</h3>
            </div>
            <div className="storie-borde"></div>
          </li>
        </a>
      </ul>
    </div>
  );
}
