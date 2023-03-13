import React from "react";


const TopBar = ({toggle}) => {

    const user = localStorage.getItem("user")

    return <div className="topBar">
        <button onClick={toggle}>Switch mode</button>
        <span>Logged as: {user}</span>
    </div>
}

export {TopBar}