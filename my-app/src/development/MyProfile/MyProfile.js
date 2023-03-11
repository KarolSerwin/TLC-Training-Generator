import React from "react";
import {MyTrainings} from "./MyTrainings";
import "./myProfile.scss"

const MyProfile = () => {

    const user = localStorage.getItem("user")
    const trainings = JSON.parse(localStorage.getItem("trainings"))


    return <div className="myProfile-container">
        <h1>Hello {user}</h1>
        <p>Here you have access to all your saved trainings</p>
        <MyTrainings trainings={trainings}/>
    </div>
}

export {MyProfile}