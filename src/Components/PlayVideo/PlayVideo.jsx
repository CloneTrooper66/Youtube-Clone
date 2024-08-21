import React, { useEffect, useState } from "react";
import "./PlayVideo.css";
import userIcon from "../../assets/user-icon.png";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import { API_KEY } from "../../data.js";
import moment from "moment";

const PlayVideo = ({ videoId }) => {
  const [apiData, setApiData] = useState(null);

  const fetchVideoData = async () => {
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetails_url)
      .then((res) => res.json())
      .then((data) => setApiData(data.items[0]));
  };

  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  const value_converter = (value) => {
    if (value >= 1000000) {
      return Math.floor(value / 1000000) + "M";
    } else if (value >= 1000) {
      return Math.floor(value / 1000) + "K";
    } else {
      return value;
    }
  };

  return (
    <div className="play-video">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <h3>{apiData ? apiData.snippet.title : "Title Here"}</h3>
      <div className="play-video-info">
        <p>
          {apiData ? value_converter(apiData.statistics.viewCount) : "88K"}
          Views &bull;{" "}
          {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}
        </p>
        <div>
          <span>
            <img src={like} alt="like icon" /> 125
          </span>
          <span>
            <img src={dislike} alt="dislike icon" /> 2
          </span>
          <span>
            <img src={share} alt="share icon" /> Share
          </span>
          <span>
            <img src={save} alt="save icon" /> Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={userIcon} alt="user icon" />
        <div>
          <p>GreatStack</p>
          <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="video-description">
        <p>Channel that makes learning eaasy</p>
        <p>Subscribe me to learn more about web development </p>
        <hr />
        <h4>130 Comments</h4>
        <div className="comment">
          <img src={userIcon} alt="user icon" />
          <div>
            <h3>
              Luka Elizbarashvili <span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
              tenetur sunt unde molestias tempora nostrum quisquam voluptatibus
              minus, dolores aut!
            </p>
            <div className="comment-action">
              <img src={like} alt="like icon" />
              <span>244</span>
              <img src={dislike} alt="dislike icon" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={userIcon} alt="user icon" />
          <div>
            <h3>
              Luka Elizbarashvili <span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
              tenetur sunt unde molestias tempora nostrum quisquam voluptatibus
              minus, dolores aut!
            </p>
            <div className="comment-action">
              <img src={like} alt="like icon" />
              <span>244</span>
              <img src={dislike} alt="dislike icon" />
            </div>
          </div>
        </div>{" "}
        <div className="comment">
          <img src={userIcon} alt="user icon" />
          <div>
            <h3>
              Luka Elizbarashvili <span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
              tenetur sunt unde molestias tempora nostrum quisquam voluptatibus
              minus, dolores aut!
            </p>
            <div className="comment-action">
              <img src={like} alt="like icon" />
              <span>244</span>
              <img src={dislike} alt="dislike icon" />
            </div>
          </div>
        </div>{" "}
        <div className="comment">
          <img src={userIcon} alt="user icon" />
          <div>
            <h3>
              Luka Elizbarashvili <span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
              tenetur sunt unde molestias tempora nostrum quisquam voluptatibus
              minus, dolores aut!
            </p>
            <div className="comment-action">
              <img src={like} alt="like icon" />
              <span>244</span>
              <img src={dislike} alt="dislike icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
