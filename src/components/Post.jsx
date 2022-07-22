import dots_icon from "../assets/img/icons/dots.svg";
import trash_icon from "../assets/img/trash.svg";
import profile_img from "../assets/img/profile.jpg";
import cake1 from "../assets/img/feed/cake-1.jpg";
import cake2 from "../assets/img/feed/cake-2.jpg";
import cake3 from "../assets/img/feed/cake-3.jpg";
import cups1 from "../assets/img/feed/cups-1.jpg";
import cups2 from "../assets/img/feed/cups-2.jpg";
import cups3 from "../assets/img/feed/cups-3.jpg";

export default function Post() {
  return (
    <>
      <div className="public">
        <div className="pop-container">
          <button className="public-button">
            <img src={dots_icon} alt="Menú de Opciones" />
          </button>
          <div className="POP">
            <button className="popUp">
              <img src={trash_icon} />
              <p>Delete</p>
            </button>
          </div>
        </div>
        <div className="public-date">
          <div className="date-conte">
            <a
              className="link-public"
              href="https://twitter.com/yummta?lang=es"
              target="_blank"
            >
              <img
                className="date-img"
                src={profile_img}
                alt="Foto de perfil del usuario"
              />
            </a>
            <div className="date-text">
              <a
                className="link-public"
                href="https://twitter.com/yummta?lang=es"
                target="_blank"
              >
                <h3>Pavel</h3>
              </a>
              <p>04 de Julio, 2022</p>
            </div>
          </div>
        </div>
        <div className="text">
          <p>This is a first Post</p>
        </div>
      </div>

      <div className="public">
        <div className="pop-container">
          <button className="public-button">
            <img src={dots_icon} alt="Menú de Opciones" />
          </button>
          <div className="POP">
            <button className="popUp">
              <img src={trash_icon} />
              <p>Delete</p>
            </button>
          </div>
        </div>
        <div className="public-date">
          <div className="date-conte">
            <a className="link-public" href="#">
              <img className="date-img" src={profile_img} alt="Paul Portillo" />
            </a>
            <div className="date-text">
              <a
                className="link-public"
                href="https://twitter.com/yummta?lang=es"
                target="_blank"
              >
                <h3>Paul Portillo</h3>
              </a>
              <p>04 de Julio, 2022</p>
            </div>
          </div>
        </div>
        <div className="text">
          <p>
            Hoy aprendí a usar Git. Aprendi a crear un branch, commitear mis
            cambios, hacer pull request y mergearlo!
          </p>
        </div>
        <div className="images">
          <img src={cups3} alt="cups de postres" />
          <div className="sub-img">
            <img src={cake1} alt="cuk postre" />
            <img src={cake3} alt="keke postre" />
          </div>
        </div>
      </div>

      <div className="public">
        <div className="pop-container">
          <button className="public-button">
            <img src={dots_icon} alt="Menú de Opciones" />
          </button>
          <div className="POP">
            <button className="popUp">
              <img src={trash_icon} />
              <p>Delete</p>
            </button>
          </div>
        </div>
        <div className="public-date">
          <div className="date-conte">
            <a
              className="link-public"
              href="https://twitter.com/yummta?lang=es"
              target="_blank"
            >
              <img className="date-img" src={profile_img} alt="Paul Portillo" />
            </a>
            <div className="date-text">
              <a
                className="link-public"
                href="https://twitter.com/yummta?lang=es"
                target="_blank"
              >
                <h3>Paul Portillo</h3>
              </a>
              <p>04 de Julio, 2022</p>
            </div>
          </div>
        </div>
        <div className="text">
          <p>
            Hoy aprendí a usar Git. Aprendi a crear un branch, commitear mis
            cambios, hacer pull request y mergearlo!
          </p>
        </div>
        <div className="images">
          <img src={cups2} alt="cups de postres" />
          <img src={cake2} alt="keke postre" />
        </div>
      </div>

      <div className="public">
        <div className="pop-container">
          <button className="public-button">
            <img src={dots_icon} alt="Menú de Opciones" />
          </button>
          <div className="POP">
            <button className="popUp">
              <img src={trash_icon} />
              <p>Delete</p>
            </button>
          </div>
        </div>
        <div className="public-date">
          <div className="date-conte">
            <a
              className="link-public"
              href="https://twitter.com/yummta?lang=es"
              target="_blank"
            >
              <img className="date-img" src={profile_img} alt="Paul Portillo" />
            </a>
            <div className="date-text">
              <a
                className="link-public"
                href="https://twitter.com/yummta?lang=es"
                target="_blank"
              >
                <h3>Paul Portillo</h3>
              </a>
              <p>04 de Julio, 2022</p>
            </div>
          </div>
        </div>
        <div className="text">
          <p>
            Hoy aprendí a usar Git. Aprendi a crear un branch, commitear mis
            cambios, hacer pull request y mergearlo!
          </p>
        </div>
        <div className="images">
          <img src={cups1} alt="cups de postres" />
        </div>
      </div>
    </>
  );
}
