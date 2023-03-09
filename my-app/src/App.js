import React, {useEffect, useState} from "react";
import {BrowserRouter, Link, Route, Routes, Navigate, Outlet} from "react-router-dom";
import './App.css';
import {MyCycle} from "./development/MyCycle/MyCycle";
import {CarouselMain} from "./Carousel";
import "./carousel.css"
import {MyProfile} from "./development/MyProfile/MyProfile";
import {TeamCycle} from "./development/TeamCycle/TeamCycle";
import {Methods} from "./development/Methods/Methods";
import {Login} from "./Login";

/*
Font awsome pattern
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import  {faCake} from "@fortawesome/free-solid-svg-icons";
*/

function App() {

  const [user, setUser] = useState(false)

  const [activePage, setActivePage] = useState(false)
  //useEffect get item user const user =

 /* useEffect(()=> {

     if (localStorage.getItem("user")) {
     setUser(true)

  },[])*/

  const ProtectedRoutes = ({
    user,
    redirectPath = "/login",
    children
  }) => {
    if (!user) {
      return <Navigate to={redirectPath} replace />
    }
    return children ? children : <Outlet/>
  };

  const updateState = (user) => {
    setUser(user)
  }



  return <BrowserRouter>
    <div>
      <CarouselMain/>
      <ul className="navigation">
        <li><Link className="navLink" to="/my-profile">My Profile</Link></li>
        <li><Link className="navLink" to="/my-cycle">My Cycle</Link></li>
        <li><Link className="navLink" to="/team-cycle">Team Cycle</Link></li>
        <li><Link className="navLink" to="/methods">TLC Methods</Link></li>

      </ul>
    </div>
    <Routes>
      <Route path="login" element={<Login updateState={updateState}/>} />
      <Route element={<ProtectedRoutes user={user}/> }>
        <Route path="my-profile" element={<MyProfile/>} />
        <Route path="my-cycle" element={<MyCycle/>} />
        <Route path="team-cycle" element={<TeamCycle/>} />
        <Route path="methods" element={<Methods/>} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App;
