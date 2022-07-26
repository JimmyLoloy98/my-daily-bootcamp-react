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
                  <img
                    className="date-img"
                    src={profile_img}
                    alt="Paul Portillo"
                  />
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
                post.images.map((img) => {
                  return <img src={img} alt="keke postre" />;
                })
              )}
            </div>
          </div>
        );
      })}
    </>
  );
}
