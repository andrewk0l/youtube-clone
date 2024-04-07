import React from "react";
import Navbar from "./Components/Navbar/Navbar.jsx"
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Video from "./Pages/Videos/Video.jsx";



const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/video/:categoryId/:videoId" element={<Video/>}/>
      </Routes>

    </div>
  )
}

export default App