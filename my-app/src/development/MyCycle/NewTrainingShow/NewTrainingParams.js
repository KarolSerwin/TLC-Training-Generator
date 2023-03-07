import React from "react";



const NewTrainingParams = ({trainingParams}) => {


    let date = new Date()

    return <>
        <h1>Your new training {date.toLocaleString()}</h1>
        <span>You will train for: {trainingParams.time}  </span>
        <span>at {trainingParams.level} level </span>
        <span>focusing on: {trainingParams.focus} aspect</span>
    </>
}

export {NewTrainingParams}