import React from "react";



const NewTrainingParams = ({trainingParams, date}) => {

const {time, level, focus} = trainingParams


    return <div className="trainingGenerator-show-body-params">
        <h1>Your new training {date} </h1>
        <span>You will train for: {time}  </span>
        <span>at {level} level </span>
        <span>focusing on: {focus} aspect</span>
        <br/>
        <br/>
    </div>
}

export {NewTrainingParams}