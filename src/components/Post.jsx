import dots_icon from "../assets/img/icons/dots.svg";
import trash_icon from "../assets/img/trash.svg";
import profile_img from "../assets/img/profile.jpg";
import cake1 from "../assets/img/feed/cake-1.jpg";
import cake2 from "../assets/img/feed/cake-2.jpg";
import cake3 from "../assets/img/feed/cake-3.jpg";
import cups1 from "../assets/img/feed/cups-1.jpg";
import cups2 from "../assets/img/feed/cups-2.jpg";
import cups3 from "../assets/img/feed/cups-3.jpg";

import DataContext from "../context/context";
import { useContext } from "react";

export default function Post() {
  let dataContext = useContext(DataContext);

  return (
    <>
      {dataContext.posts.map((post, index) => {
        return (
          <div className="public" key={index}>
            <div className="pop-container">
              <button className="dropdown-button">
                <img src={dots_icon} alt="Menú de Opciones" />
              </button>
              <div className="popup-container">
                <button className="pop-up">
                  <img src={trash_icon} />
                  <p>Delete</p>
                </button>
              </div>
            </div>
            <a className="public-date">
              <figure className="profile-img-post">
                <img src={profile_img} alt="Foto del usuario" />
              </figure>
              <div className="date-text">
                <h3>Jimmy Loloy</h3>
                <p>04 de Julio, 2022</p>
              </div>
            </a>
            <div className="post-description">
              <p>{post.description}</p>
            </div>
            <div className="images">
              {post.images.length === 3 ? (
                <>
                  <img src={post.images[0]} alt="cuk postre" />
                  <div className="sub-img">
                    <img src={post.images[1]} alt="cuk postre" />
                    <img src={post.images[2]} alt="keke postre" />
                  </div>
                </>
              ) : (
                post.images.map((img, j) => {
                  return <img src={img} alt="keke postre" key={j} />;
                })
              )}
            </div>
          </div>
        );
      })}
    </>
  );
}
