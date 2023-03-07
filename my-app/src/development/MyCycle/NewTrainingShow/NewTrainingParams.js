import React, {useState, useEffect} from "react";



const NewTrainingParams = ({trainingParams, date}) => {




    return <>
        <h1>Your new training {date} </h1>
        <span>You will train for: {trainingParams.time}  </span>
        <span>at {trainingParams.level} level </span>
        <span>focusing on: {trainingParams.focus} aspect</span>
    </>
}

export {NewTrainingParams}