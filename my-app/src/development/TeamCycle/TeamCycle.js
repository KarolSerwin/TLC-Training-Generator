import React from "react";
import {InstagramRider} from "./InstagramRider";


const TeamCycle = () => {

    const ridersPosts = ["https://www.instagram.com/p/CoVN3zyu1IR/",
    "https://www.instagram.com/p/CiAXkMRjyJl/",
    "https://www.instagram.com/p/CThvPB3jHw_/",
    "https://www.instagram.com/p/Ck1F5j-yw9_/"]

    return <>
        <h1>Team Cycle</h1>
        <div style={{display: "flex", flexWrap: "wrap", gap: 200, justifyContent: "center"}}>
            {ridersPosts.map(rider => <InstagramRider key={rider} post={rider}/>)}
        </div>
    </>
}

export {TeamCycle}