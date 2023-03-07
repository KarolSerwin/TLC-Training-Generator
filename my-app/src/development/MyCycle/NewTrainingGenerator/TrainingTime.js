import React, {useState} from "react";




const TrainingTime = ({updateTime}) => {

    const [time, setTime] = useState("")
    const handleChange = (event) => {
        let valueToSave = event.target.value;
        setTime(valueToSave)
        updateTime(valueToSave)
    }


    return (
        <div>
            <label>TIME: </label>
            <select name="option" value={time} onChange={handleChange}>
                <option value="time">min</option>
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