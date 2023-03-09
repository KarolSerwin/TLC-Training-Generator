import React from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import './App.css';
import {MyCycle} from "./development/MyCycle/MyCycle";
import {CarouselMain} from "./Carousel";
import "./carousel.css"
import {MyProfile} from "./development/MyProfile/MyProfile";
import {TeamCycle} from "./development/TeamCycle/TeamCycle";

/*
Font awsome pattern
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import  {faCake} from "@fortawesome/free-solid-svg-icons";
*/

function App() {
  return <BrowserRouter>
    <div>
      <CarouselMain/>
      <ul className="navigation">
        <li><Link className="navLink" to="/MyProfile">My Profile</Link></li>
        <li><Link className="navLink" to="/MyCycle">My Cycle</Link></li>
        <li><Link className="navLink" to="/TeamCycle">Team Cycle</Link></li>
      </ul>
    </div>
    <Routes>
      <Route path="MyProfile" element={<MyProfile/>} />
      <Route path="MyCycle" element={<MyCycle className="mainContainer"/>} />
      <Route path="TeamCycle" element={<TeamCycle/>} />
    </Routes>

  </BrowserRouter>
}

export default App;
