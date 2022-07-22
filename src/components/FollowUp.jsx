import inst_condef5 from "../assets/img/instructors/condef5.jpeg";
import inst_yummta from "../assets/img/instructors/yummta.jpeg";
import check from "../assets/img/icons/twitter-check.svg";

export default function FollowUp() {
  return (
    <div className="Follow-P">
      <h3>Who to Follow</h3>
      <div className="follow">
        <div className="follow-date">
          <div className="info">
            <a
              className="link-follow"
              href="https://twitter.com/condef5"
              target="_blank"
            >
              <img
                src={inst_condef5}
                alt="foto de perfil de un usuario"
                className="instructor-profile"
              />
              <p>@condef5</p>
              <img src={check} alt="check" />
            </a>
          </div>
          <button className="follow-1">
            <b>Follow</b>
          </button>
        </div>
        <div className="follow-date">
          <div className="info">
            <a
              className="link-follow"
              href="https://twitter.com/yummta?lang=es"
              target="_blank"
            >
              <img
                src={inst_yummta}
                alt="Paul Portillo"
                className="instructor-profile"
              />
              <p>@yummta</p>
              <img src={check} alt="check" />
            </a>
          </div>
          <button className="follow-1">
            <b>Follow</b>
          </button>
        </div>
      </div>
    </div>
  );
}
