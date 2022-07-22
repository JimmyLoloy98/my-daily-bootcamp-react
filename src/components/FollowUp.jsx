import inst_condef5 from "../assets/img/instructors/condef5.jpeg";
import inst_yummta from "../assets/img/instructors/yummta.jpeg";
import check from "../assets/img/icons/twitter-check.svg";

export default function FollowUp() {
  return (
    <div class="Follow-P">
      <h3>Who to Follow</h3>
      <div class="follow">
        <div class="follow-date">
          <div class="info">
            <a
              class="link-follow"
              href="https://twitter.com/condef5"
              target="_blank"
            >
              <img
                src={inst_condef5}
                alt="foto de perfil de un usuario"
                class="instructor-profile"
              />
              <p>@condef5</p>
              <img src={check} alt="check" />
            </a>
          </div>
          <button class="follow-1">
            <b>Follow</b>
          </button>
        </div>
        <div class="follow-date">
          <div class="info">
            <a
              class="link-follow"
              href="https://twitter.com/yummta?lang=es"
              target="_blank"
            >
              <img
                src={inst_yummta}
                alt="Paul Portillo"
                class="instructor-profile"
              />
              <p>@yummta</p>
              <img src={check} alt="check" />
            </a>
          </div>
          <button class="follow-1">
            <b>Follow</b>
          </button>
        </div>
      </div>
    </div>
  );
}
