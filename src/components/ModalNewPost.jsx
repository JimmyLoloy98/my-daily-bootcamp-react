import { useContext, useState } from "react";
import DataContext from "../context/context";

export default function ModalNewPost({ open, setOpen }) {
  let dataContext = useContext(DataContext);
  console.log(dataContext);
  return (
    <div
      id="modal_new_post"
      className={open == false ? "modal close" : "modal"}
    >
      <div className="wrapper-modal">
        <div>
          <div className="modal_window">
            <a
              className="modal_close"
              onClick={() => {
                setOpen(false);
              }}
            >
              &times;
            </a>
            <h3>{`What did you learn today ${dataContext.user.full_name}?`}</h3>
            <textarea
              name="post-area"
              id="post-area"
              placeholder="Today I learned..."
              maxLength="140"
              autoFocus
            ></textarea>
            <div className="geolocation">
              <span className="geolocation_position"></span>
            </div>
            <span className="msg-error-blank">
              Really? Did not you learning anything? This field is required!
            </span>
            <div className="buttons-post">
              <div className="icons-bottom">
                <span className="container-input">
                  <input
                    className="icon-item-bottom inputfile input-file"
                    type="file"
                    id="file-image"
                    multiple
                    
                  />
                  <label htmlFor="file-image">
                    <svg
                      className="iborrainputfile"
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 13.5L5.586 8.914C5.96106 8.53906 6.46967 8.32843 7 8.32843C7.53033 8.32843 8.03894 8.53906 8.414 8.914L13 13.5M11 11.5L12.586 9.914C12.9611 9.53906 13.4697 9.32843 14 9.32843C14.5303 9.32843 15.0389 9.53906 15.414 9.914L17 11.5M11 5.5H11.01M3 17.5H15C15.5304 17.5 16.0391 17.2893 16.4142 16.9142C16.7893 16.5391 17 16.0304 17 15.5V3.5C17 2.96957 16.7893 2.46086 16.4142 2.08579C16.0391 1.71071 15.5304 1.5 15 1.5H3C2.46957 1.5 1.96086 1.71071 1.58579 2.08579C1.21071 2.46086 1 2.96957 1 3.5V15.5C1 16.0304 1.21071 16.5391 1.58579 16.9142C1.96086 17.2893 2.46957 17.5 3 17.5Z"
                        stroke="#203758"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </label>
                </span>
                <span className="icon-item-bottom icon-geoposition">
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.657 14.6567L10.414 18.8997C10.2284 19.0854 10.0081 19.2328 9.76556 19.3333C9.52303 19.4339 9.26305 19.4856 9.0005 19.4856C8.73796 19.4856 8.47798 19.4339 8.23544 19.3333C7.99291 19.2328 7.77256 19.0854 7.587 18.8997L3.343 14.6567C2.22422 13.5379 1.46234 12.1124 1.15369 10.5606C0.845043 9.00873 1.00349 7.40022 1.60901 5.93844C2.21452 4.47665 3.2399 3.22725 4.55548 2.34821C5.87107 1.46918 7.41777 1 9 1C10.5822 1 12.1289 1.46918 13.4445 2.34821C14.7601 3.22725 15.7855 4.47665 16.391 5.93844C16.9965 7.40022 17.155 9.00873 16.8463 10.5606C16.5377 12.1124 15.7758 13.5379 14.657 14.6567V14.6567Z"
                      stroke="#203758"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 8.99951C12 9.79516 11.6839 10.5582 11.1213 11.1208C10.5587 11.6834 9.79565 11.9995 9 11.9995C8.20435 11.9995 7.44129 11.6834 6.87868 11.1208C6.31607 10.5582 6 9.79516 6 8.99951C6 8.20386 6.31607 7.4408 6.87868 6.87819C7.44129 6.31558 8.20435 5.99951 9 5.99951C9.79565 5.99951 10.5587 6.31558 11.1213 6.87819C11.6839 7.4408 12 8.20386 12 8.99951V8.99951Z"
                      stroke="#203758"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <button className="button-bottom publishButton">Publish</button>
            </div>
          </div>
          <div className="container-thumbnails container-images">
            <img src="../assets/img/instructors/condef5.jpeg" alt="" />
            <button className="delete-button">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
