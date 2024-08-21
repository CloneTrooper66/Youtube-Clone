import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";
import SearchResults from "./Components/Search/SearchResults";

const App = () => {
  const [sidebar, setSidebar] = useState(true);

  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
        <Route path="/search/:searchTerm" element={<SearchResults />} />
      </Routes>
    </div>
  );
};

export default App;
