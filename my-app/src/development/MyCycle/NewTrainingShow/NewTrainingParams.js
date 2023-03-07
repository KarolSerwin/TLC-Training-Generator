import React from "react";



const NewTrainingParams = () => {


    let date = new Date()

    return <>
        <h1>Your new training {date.toLocaleString()}</h1>
        <span>You will train for:  </span>
        <span>at  level</span>
        <span>focusing on:  </span>
    </>
}

export {NewTrainingParams}