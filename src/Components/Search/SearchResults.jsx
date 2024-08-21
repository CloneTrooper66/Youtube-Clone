import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { API_KEY } from "../../data.js";
import "./SearchResults.css";
import moment from "moment";

const SearchResults = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      const search_url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${searchTerm}&key=${API_KEY}`;
      const response = await fetch(search_url);
      const data = await response.json();
      setVideos(data.items);
    };

    fetchSearchResults();
  }, [searchTerm]);

  return (
    <div className="search-results">
      {videos.map((video) => (
        <div key={video.id.videoId} className="search-result-item">
          <iframe
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <div className="search-result-details">
            <h3>{video.snippet.title}</h3>
            {video.snippet.description}
            <p>{video.snippet.channelTitle}</p>
            <div className="views-and-time">
              {moment(video.snippet.publishedAt).fromNow()}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
