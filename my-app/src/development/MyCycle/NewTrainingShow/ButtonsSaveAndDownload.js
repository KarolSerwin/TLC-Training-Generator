import React from "react";
import "./trainingShow.css"



const ButtonsSaveAndDownload = ({areButtonsActive}) => {


    return <div className="trainingShowButtonsWrap" style={{display: areButtonsActive ? "flex" : "none"}}>
        <button>Save</button>
        <button>Download PDF</button>

    </div>
}

export {ButtonsSaveAndDownload}