import React from "react";


const TrainingFocus = ({updateFocus}) => {

    const handleChange = (event) => {
        let valueToSave = event.target.value;
        updateFocus("focus", valueToSave)
    }

    return (
        <div>
            <label>FOCUS: </label>
            <select name="option"  onChange={handleChange}>
                <option selected disabled value="choose">choose</option>
                <option value="technical">Technical</option>
                <option value="jump">Jump</option>
                <option value="endurance">Endurance</option>
            </select>
            <a href="/">
                -- Learn about training focus --
            </a>
        </div>
    )
}

export {TrainingFocus}