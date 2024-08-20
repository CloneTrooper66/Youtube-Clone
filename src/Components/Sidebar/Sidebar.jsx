import React from "react";
import "./Sidebar.css";
import home from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import automobiles from "../../assets/automobiles.png";
import sports from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.png";
import Fireship from "../../assets/Fireship.jpg";
import mosh from "../../assets/mosh.jpg";
import badFriends from "../../assets/badFriends.jpg";
import WebDevSimplified from "../../assets/Web Dev Simplified.jpg";
import Crunchyroll from "../../assets/Crunchyroll.jpg";

const Sidebar = ({ sidebar }) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="sortCut-links">
        <div className="side-link">
          <img src={home} alt="home icon" />
          <p>Home</p>
        </div>
        <div className="side-link">
          <img src={game_icon} alt="game icon" />
          <p>Gaming</p>
        </div>
        <div className="side-link">
          <img src={automobiles} alt="automobiles icon" />
          <p>Automobiles</p>
        </div>
        <div className="side-link">
          <img src={sports} alt="sports icon" />
          <p>Sports</p>
        </div>
        <div className="side-link">
          <img src={entertainment} alt="entertainment icon" />
          <p>Entertainment</p>
        </div>
        <div className="side-link">
          <img src={tech} alt="tech icon" />
          <p>Technology</p>
        </div>
        <div className="side-link">
          <img src={music} alt="music icon" />
          <p>Music</p>
        </div>
        <div className="side-link">
          <img src={blogs} alt="blogs icon" />
          <p>Blogs</p>
        </div>
        <div className="side-link">
          <img src={news} alt="news icon" />
          <p>News</p>
        </div>
        <hr />
      </div>
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-link">
          <img src={Fireship} alt="Fireship icon" />
          <p>Fireship</p>
        </div>
        <div className="side-link">
          <img src={mosh} alt="Mosh icon" />
          <p>Programming with Mosh</p>
        </div>
        <div className="side-link">
          <img src={badFriends} alt="badFriends icon" />
          <p>Bad Friends</p>
        </div>
        <div className="side-link">
          <img src={WebDevSimplified} alt="WebDevSimplified icon" />
          <p>Web Dev Simplified</p>
        </div>
        <div className="side-link">
          <img src={Crunchyroll} alt="Crunchyroll icon" />
          <p>Crunchyroll</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
