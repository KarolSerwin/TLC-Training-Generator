import React from "react";


const TrainingTime = ({updateTime}) => {

    const handleChange = (event) => {
        let valueToSave = event.target.value;
        updateTime("time", valueToSave)
    }

    return (
        <div>
            <span>TIME: </span>
            <select name="option"  onChange={handleChange}>
                <option selected disabled value="time">min</option>
                <option value="60min">60 min</option>
                <option value="75min">75 min</option>
                <option value="90min">90 min</option>
            </select>
            <a href="/">
                -- Learn about training time --
            </a>
        </div>
    )
}


export {TrainingTime}