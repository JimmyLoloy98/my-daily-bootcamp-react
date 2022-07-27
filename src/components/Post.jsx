import dots_icon from "../assets/img/icons/dots.svg";
import trash_icon from "../assets/img/trash.svg";
import profile_img from "../assets/img/profile.jpg";

import DataContext from "../context/context";
import { useContext, useState } from "react";

export default function Post() {
  let dataContext = useContext(DataContext);
  const [options, setOptions] = useState(false);
  
  let buttonActionPost = () => {
    options ? setOptions(false) : setOptions(true);
  };

  return (
    <>
      {dataContext.posts.map((post, index) => {
        return (
          <div className="public" key={index}>
            <div
              className="pop-container"
            >
              <button className="dropdown-button" onClick={buttonActionPost}>
                <img src={dots_icon} alt="Menú de Opciones" />
              </button>
              <div
                className={options ? "popup-container" : "popup-container hidden"}
              >
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
                  <div className="sub-img1">
                    <img src={post.images[0]} alt="image 1.0" />
                  </div>
                  <div className="sub-img2">
                    <img src={post.images[1]} alt="image 2.0" />
                    <img src={post.images[2]} alt="image 2.1" />
                  </div>
                </>
              ) : (
                post.images.map((img) => {
                  return <img src={img} alt="image 1.0" />;
                })
              )}
            </div>
          </div>
        );
      })}
    </>
  );
}
