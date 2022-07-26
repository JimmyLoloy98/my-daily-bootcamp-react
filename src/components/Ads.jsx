import comp_profile1 from "../assets/img/companies/profile-1.jpg";
import comp_profile2 from "../assets/img/companies/profile-2.jpg";
import comp_profile3 from "../assets/img/companies/profile-3.jpg";
import comp_profile4 from "../assets/img/companies/profile-4.jpg";
import comp_profile5 from "../assets/img/companies/profile-5.jpg";
import comp_profile6 from "../assets/img/companies/profile-6.jpg";

export default function Ads() {
  return (
    <div className="notice-section">
      <div className="notice-single">
        <article className="notice-article notice-article1">
          <h3 className="notice-tittle">Bootcamp X</h3>
          <p className="notice-text">Learn working in a real environment</p>
          <a
            className="notice-button"
            href="https://twitter.com/condef5"
            target="_blank"
          >
            Explore All
          </a>
        </article>
        <footer className="notice-footer">
          <div className="notice-avatars">
            <img className="avatar avatar1" src={comp_profile1} alt="photo 1" />
            <img className="avatar avatar2" src={comp_profile2} alt="photo 2" />
            <img className="avatar avatar3" src={comp_profile3} alt="photo 3" />
          </div>
          <span className="participants-text">12 participants</span>
        </footer>
      </div>
      <div className="notice-single">
        <article className="notice-article notice-article2">
          <h3 className="notice-tittle">Mali</h3>
          <p className="notice-text">Join events near you for free</p>
          <a className="notice-button" href="https://mali.pe/" target="_blank">
            Explore All
          </a>
        </article>
        <footer className="notice-footer">
          <div className="notice-avatars">
            <img className="avatar avatar1" src={comp_profile4} alt="photo 1" />
            <img className="avatar avatar2" src={comp_profile5} alt="photo 2" />
            <img className="avatar avatar3" src={comp_profile6} alt="photo 3" />
          </div>
          <span className="participants-text">18 participants</span>
        </footer>
      </div>
    </div>
  );
}
