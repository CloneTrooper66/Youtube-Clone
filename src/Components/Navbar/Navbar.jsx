import React, { useState } from "react";
import "./Navbar.css";
import menu_icon from "../../assets/menu.png";
import logo from "../../assets/logo1.png";
import search_icon from "../../assets/search.png";
import more_icon from "../../assets/category.png";
import notification_icon from "../../assets/notification.png";
import profile_icon from "../../assets/user-icon.png";
import upload_icon from "../../assets/upload.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ setSidebar }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`);
      //setSearchTerm("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img
          className="menu-icon"
          onClick={() => setSidebar((prev) => !prev)}
          src={menu_icon}
          alt="menu-icon"
        />
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <img
            src={search_icon}
            alt="search-icon"
            onClick={handleSearch}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>

      <div className="nav-right flex-div">
        <img src={upload_icon} alt="upload-icon" />
        <img src={more_icon} alt="more-icon" />
        <img src={notification_icon} alt="notification-icon" />
        <img className="user-icon" src={profile_icon} alt="profile-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
