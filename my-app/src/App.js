import React, {useEffect, useState,} from "react";
import {BrowserRouter, Link, Route, Routes, Navigate, Outlet} from "react-router-dom";
import './App.scss';
import {MyCycle} from "./development/MyCycle/MyCycle";
import {CarouselMain} from "./Carousel";
import "./carousel.scss"
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

  const [user, setUser] = useState("on")


  useEffect(()=> {

     if (!localStorage.getItem("user")) {
       setUser("off")

     }
  },[])



  const ProtectedRoutes = ({
    user,
    redirectPath = "/login",
    children
  }) => {
    if (user === "off") {
      return <Navigate to={redirectPath} />
    }
    return children ? children : <Outlet/>
  };


  const updateState = (user) => {
    setUser(user)
  }


  return <BrowserRouter>
    <div className="app">
      <CarouselMain/>
      <ul className="app-navig">
        <li><Link className="app-navig-link" to="/">My Profile</Link></li>
        <li><Link className="app-navig-link" to="/my-cycle">My Cycle</Link></li>
        <li><Link className="app-navig-link" to="/team-cycle">Team Cycle</Link></li>
        <li><Link className="app-navig-link" to="/methods">TLC Methods</Link></li>
      </ul>
    </div>
    <Routes>
      <Route element={<ProtectedRoutes user={user}/> }>
        <Route path="" element={<MyProfile user={user}/>} />
        <Route path="my-cycle" element={<MyCycle/>} />
        <Route path="team-cycle" element={<TeamCycle/>} />
        <Route path="methods" element={<Methods/>} />
      </Route>
      <Route>
        <Route path="login" element={<Login updateState={updateState}/>} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App;
